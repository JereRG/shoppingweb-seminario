import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Box, Grid, Skeleton } from '@mui/material';
import ProductCard from './ProductCard';
import CategoryFilter from './CategoryFilter';

const ProductList = ({ search, setSearch, addToCart, viewProductDetails }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?sort=desc')
      .then(response => {
        const translatedCategories = response.data.map(product => {
          switch (product.category) {
            case "men's clothing":
              product.category = "Ropa de Hombre";
              break;
            case "women's clothing":
              product.category = "Ropa de Mujer";
              break;
            case "electronics":
              product.category = "Electrónica";
              break;
            case "jewelery":
              product.category = "Joyería";
              break;
            default:
              break;
          }
          return product;
        });

        setProducts(translatedCategories);
        const uniqueCategories = [...new Set(translatedCategories.map(product => product.category))];
        setCategories(uniqueCategories);
      })
      .catch(error => console.error('Error fetching the products:', error))
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts = products.filter(product =>
    product.title && typeof product.title === 'string' && product.title.toLowerCase().includes(search.toLowerCase()) &&
    (selectedCategories.length === 0 || selectedCategories.includes(product.category))
  );

  const handleCategoryChange = category => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(cat => cat !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedCategories);
  };

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 7 }}>
        <CategoryFilter
          categories={categories}
          selectedCategories={selectedCategories}
          handleCategoryChange={handleCategoryChange}
        />
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          {loading ? (
            [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item}>
                <Box sx={{ width: '100%', height: 370, marginRight: { xs: 0, md: 4 } }}>
                  <Skeleton variant="rounded" width="100%" height="100%" />
                </Box>
              </Grid>
            ))
          ) : (
            filteredProducts.map(product => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <ProductCard product={product} addToCart={addToCart} viewProductDetails={viewProductDetails} />
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </>
  );
};

ProductList.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  viewProductDetails: PropTypes.func.isRequired,
};

export default ProductList;
