import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ 
        border:"solid 1px #f0f0f0",
      maxWidth: 345, 
      height: "100%", 
      display: "flex", 
      flexDirection: "column", 
      ":hover": {
        backgroundColor: "#f0f0f0", 
        cursor: "pointer",
        boxShadow:15,
      } 
    }}>
      <CardMedia
        component="img"
        height="210"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: "contain" }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: "1.2rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {product.title}
        </Typography>
        <Typography variant="h4" color="text.primary">
          ${product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
