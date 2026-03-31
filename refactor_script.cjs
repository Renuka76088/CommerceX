const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const directories = ['Pages', 'Flower Category', 'FlowerProducts', 'FlowerDecoration'];

function walkSync(dir, filelist = []) {
  if (!fs.existsSync(dir)) return filelist;
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.jsx')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
}

let filesToProcess = [];
directories.forEach(d => {
  const targetDir = path.join(srcDir, d);
  filesToProcess = filesToProcess.concat(walkSync(targetDir));
});

console.log('Found ' + filesToProcess.length + ' files to process.');

let processedCount = 0;

filesToProcess.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');

    const buttonRegex = /<button className="text-xs bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded">\s*Add\s*<\/button>/g;

    // Skip if it doesn't have the Add button structure
    if (!buttonRegex.test(content)) {
       return;
    }

    buttonRegex.lastIndex = 0; // Reset regex index after testing

    // Skip if we already injected useCart
    if (content.includes('useCart(')) {
       return;
    }

    // Calculate relative path to Context
    let relativeDepth = path.relative(path.dirname(file), path.join(srcDir, 'Context', 'CartContext.jsx')).replace(/\\\\/g, '/');
    if (!relativeDepth.startsWith('.')) {
        relativeDepth = './' + relativeDepth;
    }

    // 1. Add Imports
    if (!content.includes('CartContext')) {
      content = content.replace(/(import React.*?\\n)/, '\$1import { useCart } from "' + relativeDepth + '";\\nimport { useNavigate } from "react-router-dom";\\n');
    }

    // 2. Inject Hooks
    // Look for Component = () => { or function Component() {
    content = content.replace(/(const\\s+\\w+\\s*=\\s*\\(.*?\\)\\s*=>\\s*\\{|function\\s+\\w+\\s*\\(.*?\\)\\s*\\{)/, '\$1\\n  const { addToCart } = useCart();\\n  const navigate = useNavigate();\\n');

    // 3. Replace Button
    const newButton = `<button 
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        const isDecoration = window.location.pathname.toLowerCase().includes('decoration');
        if (isDecoration) {
          navigate('/decoration-booking', { state: { decoration: product } });
        } else {
          let parsedPrice = 595;
          if (product && product.price) {
             parsedPrice = parseInt(String(product.price).replace(/\\D/g, '')) || 595;
          }
          addToCart({ id: product.title || Math.random().toString(), name: product.title || 'Flower Product', price: parsedPrice, image: product.img });
          alert("Item added to cart successfully!");
        }
      }}
      className="text-xs bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded z-10 relative">
      Add
    </button>`;
    
    content = content.replace(buttonRegex, newButton);

    // 4. Wrap Card
    const cardRegex = /<div\s+key=\{i\}\s+className="bg-white rounded-xl shadow-sm hover:shadow-lg transition group"\s*>/g;
    const newCard = `<div
      key={i}
      onClick={() => navigate('/product-details', { state: { product } })}
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition group cursor-pointer relative"
    >`;
    
    content = content.replace(cardRegex, newCard);

    fs.writeFileSync(file, content, 'utf8');
    processedCount++;
  } catch(e) {
    console.error('Error processing file:', file, e);
  }
});

console.log('Processed ' + processedCount + ' files successfully.');
