import { Grid, Card, CardActionArea, CardMedia, Box, Typography, Link } from "@mui/material";
import { FC, useMemo, useState } from "react"
import { IProduct } from "../../interfaces"

import NextLink from 'next/link'



interface Props {
  product: IProduct;
}
 // Estado para controlar si el mouse está sobre la tarjeta
export const ProductCard: FC<Props> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false)
    // Determina qué imagen mostrar según si el mouse está sobre la tarjeta o no
  const productImage = useMemo(() => {
    return isHovered
      ? `products/${product.images[1]}`
      : `products/${product.images[0]}`
  }, [isHovered, product.images])
  return (
    <Grid item
      xs={6}
      sm={4}
      key={product.slug}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
   {/* Enlace a la página del producto */}
        <NextLink href='/product/slug' passHref prefetch={false} legacyBehavior>
          <Link>
            <CardActionArea>
                {/* Imagen del producto */}
              <CardMedia
                component='img'
                image={productImage}
                alt={product.title}
              />
            </CardActionArea>
          </Link>
        </NextLink>
      </Card>
      <Box sx={{ met: 1 }} className='fadeIn'>
                {/* Título y precio del producto */}
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>{`$${product.price}`}</Typography>
      </Box>
    </Grid>
  )
}
