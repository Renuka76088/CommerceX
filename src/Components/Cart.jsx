import React from "react";
import { Minus, Plus, ChevronRight, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, getCartCount, clearCart } = useCart();

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    alert("Checkout functionality would be implemented here! Total: ₹" + getCartTotal());
    clearCart();
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] py-6 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-6">

        {/* LEFT SECTION */}
        <div className="lg:w-[65%] w-full space-y-6">

          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <ShoppingBag className="text-[#0e4a5a]" /> Shopping Cart
            </h1>
            <span className="text-gray-500 font-medium">{getCartCount()} items</span>
          </div>

          {cartItems.length === 0 ? (
            <div className="bg-white rounded-xl p-10 text-center border border-gray-200">
               <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png" alt="Empty Cart" className="w-48 mx-auto mb-4 opacity-50" />
               <h2 className="text-2xl font-bold text-gray-700 mb-2">Your cart is empty</h2>
               <p className="text-gray-500 mb-6">Looks like you haven't added any items to the cart yet.</p>
               <Link to="/" className="bg-[#0e4a5a] text-white px-8 py-3 rounded-md font-medium hover:bg-[#0c3f4d] transition-colors inline-block">
                 Continue Shopping
               </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-sm hover:shadow-md transition-shadow">
                  
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image || "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=300"}
                      alt={item.name}
                      className="w-24 h-24 rounded-lg object-cover bg-gray-100"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xl font-bold text-[#0e4a5a]">
                          ₹ {item.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                    {/* QUANTITY */}
                    <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden border border-gray-200 shadow-inner">
                      <button 
                         onClick={() => updateQuantity(item.id, -1)}
                         className="px-3 py-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-4 text-sm font-semibold bg-white py-2 min-w-[40px] text-center border-x border-gray-200">
                        {item.quantity}
                      </span>
                      <button 
                         onClick={() => updateQuantity(item.id, 1)}
                         className="px-3 py-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <button 
                       onClick={() => removeFromCart(item.id)}
                       className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                       title="Remove item"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ADD ONS */}
          <div className="bg-[#f2e6dd] rounded-xl p-5 sm:p-6 shadow-sm border border-[#e8d5c4]">
            <h2 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
               Recommended Add-ons
            </h2>

            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
              {[
                  { name: "Greeting Card", price: 99, img: "https://images.unsplash.com/photo-1554289417-063a5ba82bc4?q=80&w=300" },
                  { name: "Chocolate Box", price: 299, img: "https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=300" },
                  { name: "Teddy Bear", price: 399, img: "https://images.unsplash.com/photo-1559400870-1fc5d6910a30?q=80&w=300" },
                  { name: "Balloons", price: 149, img: "https://images.unsplash.com/photo-1530103862676-de8892ebe829?q=80&w=300" }
               ].map((item, index) => (
                <div
                  key={index}
                  className="min-w-[180px] sm:min-w-[200px] bg-white rounded-xl border border-gray-200 p-3 relative snap-start hover:shadow-md transition-shadow"
                >
                  <div className="relative h-32 w-full mb-3 rounded-lg overflow-hidden">
                    <img
                      src={item.img}
                      className="w-full h-full object-cover"
                      alt={item.name}
                    />
                  </div>
                  <p className="text-sm text-gray-700 font-medium truncate">
                    {item.name}
                  </p>
                  <p className="font-bold text-[#0e4a5a] mt-1">₹ {item.price}</p>
                  <button className="mt-3 w-full border-2 border-[#0e4a5a] text-[#0e4a5a] py-1.5 rounded-lg text-sm font-semibold hover:bg-[#0e4a5a] hover:text-white transition-all duration-200">
                    Add
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT BILL SUMMARY */}
        <div className="lg:w-[35%] w-full">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg relative lg:sticky lg:top-6">

            {/* SAVE BADGE */}
            {getCartTotal() > 1000 && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-xs font-bold px-4 py-1.5 rounded-full border border-green-200 shadow-sm whitespace-nowrap">
                🎉 Free Delivery Applied!
              </div>
            )}

            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="font-bold text-xl text-gray-800">
                Order Summary
              </h2>
              <span className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600 font-medium">
                {getCartCount()} Item{getCartCount() !== 1 ? 's' : ''}
              </span>
            </div>

            <div className="space-y-4 text-gray-600">
              <div className="flex justify-between items-center text-sm">
                <span>Subtotal</span>
                <span className="font-semibold text-gray-800">₹ {getCartTotal()}</span>
              </div>
              
              <div className="flex justify-between items-center text-sm">
                <span>Delivery Charges</span>
                <span className="font-semibold text-emerald-600">
                  {getCartTotal() > 1000 ? "FREE" : "₹ 49"}
                </span>
              </div>

              <div className="flex justify-between items-center text-sm">
                <span>Taxes</span>
                <span className="font-semibold text-gray-800">₹ {Math.round(getCartTotal() * 0.05)}</span>
              </div>

              <div className="border-t border-dashed border-gray-300 pt-4 mt-4 flex justify-between items-center">
                <span className="font-bold text-lg text-gray-800">Grand Total</span>
                <div className="text-right">
                   <span className="font-bold text-2xl text-[#0e4a5a]">
                     ₹ {getCartTotal() + (getCartTotal() > 1000 ? 0 : 49) + Math.round(getCartTotal() * 0.05)}
                   </span>
                   <p className="text-xs text-gray-400 font-normal">Inclusive of all taxes</p>
                </div>
              </div>
            </div>

            <button 
              onClick={handleCheckout}
              disabled={cartItems.length === 0}
              className={`mt-8 w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-md flex items-center justify-center gap-2 ${
                cartItems.length > 0 
                ? "bg-gradient-to-r from-[#0e4a5a] to-[#156e85] hover:shadow-lg text-white hover:scale-[1.02]" 
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              PROCEED TO SECURE CHECKOUT <ChevronRight size={20} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}