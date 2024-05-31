import PropTypes from 'prop-types';
import { Card, CardContent, Typography, CardMedia, Button } from '@mui/material';
import { LocalGroceryStore } from '@mui/icons-material';

const ProductCard = ({ product, addToCart }) => {
    return (
        <Card sx={{ 
            border: "solid 1px #f0f0f0",
            maxWidth: 345, 
            height: "100%", 
            display: "flex", 
            flexDirection: "column", 
            ":hover": {
                backgroundColor: "#f0f0f0", 
                cursor: "pointer",
                boxShadow: 15,
            } 
        }}>
            <CardMedia
                component="img"
                height="210"
                image={product.image || 'default-image-url'} 
                alt={product.title || 'Sin título'}
                sx={{ objectFit: "contain" }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: "1.2rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {product.title || 'Sin título'}
                </Typography>
                <Typography variant="h4" color="text.primary">
                    ${product.price}
                </Typography>
                <Button variant="contained" color="error" startIcon={<LocalGroceryStore />} onClick={() => addToCart(product)} sx={{marginTop: "10px"}}>
                    Agregar al Carrito
                </Button>
            </CardContent>
        </Card>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
    }).isRequired,
    addToCart: PropTypes.func.isRequired,
};

export default ProductCard;
