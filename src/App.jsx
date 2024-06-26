import { useState } from 'react';
import { Box, Container } from '@mui/material';
import Nav from './Components/navbar/Nav';
import Home from './Components/inicio/Home';
import ProductList from './Components/categoria/ProductList';
import Cart from './Components/cart/Cart';
import CheckoutForm from './Components/cart/CheckoutForm';
import ProductDetails from './Components/categoria/ProductDetails';
import 'normalize.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Login } from './Components/login/Login';
import { Footer } from './Components/inicio/Footer';
import { FormQueja } from './Components/inicio/FormQueja';

const App = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState('Inicio');
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(product => product.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCart(prevCart =>
      prevCart.map(product =>
        product.id === productId ? { ...product, quantity: quantity } : product
      )
    );
  };

  const viewProductDetails = (product) => {
    setSelectedProduct(product);
    setCurrentPage('DetallesProducto');
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setCurrentPage('Inicio');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Inicio':
        return <Home />;
      case 'Productos':
        return <ProductList search={search} setSearch={setSearch} addToCart={addToCart} viewProductDetails={viewProductDetails} />;
      case 'DetallesProducto':
        return <ProductDetails product={selectedProduct} addToCart={addToCart} setCurrentPage={setCurrentPage} />;
      case 'Carrito':
        return <Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} setCurrentPage={setCurrentPage} />;
      case 'Formulario':
        return <CheckoutForm cart={cart} />;
      case 'Sobre Nosotros':
        return <Home />;
      default:
        return <Home />;
    }
  };

  if (!isAuthenticated) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <Box sx={{ bgcolor: "#eeeeee", position: 'relative', minHeight: "100vh"}}>
      <Nav search={search} setSearch={setSearch} setCurrentPage={setCurrentPage} cartItemCount={cart.length} />
      <Container maxWidth="lg" sx={{ pt: 4, pb: 6 }}>
        {renderPage()}
      </Container>
      <Footer />
    </Box>
  );
};

export default App;
