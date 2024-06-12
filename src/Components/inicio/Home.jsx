import { Box, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import Slider from 'react-slick';
import { Footer } from './Footer';

const Home = () => {
  {/* Carrucel */}
  const items = [  
    {
      name: "",
      description: "",
      image: "https://i.ibb.co/TtLNJbL/1.png"
    },
    {
      name: "",
      description: "",
      image: "https://i.ibb.co/F4ZxrYd/2.png"
    },
  ];

  {/* Cards Marcas referidas Del inicio */}
  const brands = [ 
    {
      name: "Nike",
      description: "Las mejores zapatillas ",
      image: "https://www.brandemia.org/wp-content/uploads/2011/09/logo_nike_principal.jpg"
    },
    {
      name: "Lacoste",
      description: "Un poco de aire en la Tierra",
      image: "https://turbologo.com/articles/wp-content/uploads/2020/02/Lacoste-logo-.png"
    },
    {
      name: "I love 47 Street!",
      description: "La mejor ropa de mujer",
      image: "https://pbs.twimg.com/profile_images/1050391324690698241/kEw0plll_400x400.jpg"
    },
    {
        name: "Jewelry",
        description: "Las mejores joyas",
        image: "https://content.wepik.com/statics/26126067/preview-page3.jpg"
      },
      {
        name: "The North Face",
        description: "Vestite a la moda",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/TheNorthFace_logo.svg/1200px-TheNorthFace_logo.svg.png"
      },
      {
        name: "Adidas",
        description: "Adidas Tienda deportiva Por excelencia",
        image: "https://ams3.digitaloceanspaces.com/graffica/2022/12/Three-Bars-adidas-logo-1.jpg-1024x570.webp"
      },
      
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
    <Box sx={{ textAlign: "center" }}>
      <Slider {...settings}>
        {items.map((item, i) => (
          <Box 
            key={i} 
            sx={{
              textAlign: "center", 
              bgcolor: "black", 
              alignItems: "center", 
              display: "flex", 
              justifyContent: "center"
            }}>
            <img 
              src={item.image} 
              alt={item.name} 
              style={{
                width: '90%', 
                height: 'auto', 
                maxHeight: '400px', 
                objectFit: 'cover', 
                margin: "auto" 
              }} 
            />
          </Box>
        ))}
      </Slider>
      <Typography variant='h6' sx={{ fontWeight: "bold", mt: 10, mb: 5 }}>
        Marcas Asociadas
      </Typography>
      <Grid container spacing={2} sx={{ px: { xs: 2, sm: 4, md: 8, lg: 16 } }}>
        {brands.map((brand, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card 
              sx={{
                ":hover": {
                  bgcolor: "lightgray",
                  transition: "400ms",
                  boxShadow: 10,
                }
              }}>
              <CardMedia
                component="img"
                height="200"
                image={brand.image}
                alt={brand.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {brand.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {brand.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    <Footer />
    </>
  );
};

export default Home;
