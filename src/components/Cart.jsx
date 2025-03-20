import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, vaciarCarrito } = useContext(CartContext);
  const { darkMode } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);


  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      {/* Botón para abrir/cerrar el carrito */}
      <button
        onClick={toggleCart}
        className="w-full p-4 flex justify-between items-center border-b dark:border-gray-700"
      >
        <h2 className="text-2xl font-bold dark:text-white">🛒 Tu Carrito</h2>
        <div className="flex items-center">
          <span className="mr-2 bg-blue-600 text-white text-sm px-2 py-1 rounded-full">
            {cart.length}
          </span>
          <svg
            className={`w-6 h-6 transition-transform duration-300 dark:text-white ${isOpen ? "transform rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </button>

      {/* Contenido del carrito - se muestra/oculta según el estado */}
      <div 
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-6">
          {cart.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400 text-center py-6">El carrito está vacío</p>
          ) : (
            <div>
              <div className="space-y-4">
                {cart.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 border-b dark:border-gray-700"
                  >
                    <div className="flex items-center mb-2 sm:mb-0">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-12 h-12 object-cover rounded mr-3"
                      />
                      <div>
                        <h3 className="font-semibold dark:text-white">{product.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400">${product.price} c/u</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(product.id, product.quantity - 1)}
                          disabled={product.quantity <= 1}
                          className="w-8 h-8 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full disabled:opacity-50 disabled:cursor-not-allowed text-lg dark:text-white"
                        >
                          -
                        </button>
                        <span className="font-medium w-8 text-center dark:text-white">
                          {product.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, product.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full text-lg dark:text-white"
                        >
                          +
                        </button>
                      </div>
                      <p className="font-medium dark:text-white">
                        ${(product.price * product.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded text-sm transition-colors duration-300"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-right">
                <h3 className="text-xl font-bold dark:text-white">Total: ${totalPrice.toFixed(2)}</h3>
                <button 
                  className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded transition-colors duration-300"
                >
                  Finalizar Compra
                </button>
                <button onClick={vaciarCarrito} className="mt-2 bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded transition-colors duration-300">
                  Vaciar Carrito
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;