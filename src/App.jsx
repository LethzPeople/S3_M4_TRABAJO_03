import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/navbar';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <div className="container mx-auto px-4 py-8">
            <main className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
              <div className="lg:col-span-2">
                <ProductList />
              </div>
              <div className="lg:col-span-1">
                <Cart />
              </div>
            </main>
            <footer className="mt-16 pt-6 border-t dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
              <p>Carrito de Compras con React Context - 2025</p>
            </footer>
          </div>
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;