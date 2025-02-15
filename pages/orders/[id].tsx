
import NextLink from 'next/link'
import { ShopLayout } from '../../components/layouts'
import { Box, Button, Card, CardContent, Divider, Grid, Typography, Link, Chip } from '@mui/material'

import { CartList, OrderSummary } from '../../components/cart'
import { CreditScoreOutlined } from '@mui/icons-material'

const OrdenPage = () => {
  return (
    
    <ShopLayout title={'resumen de orden 2131234'} pageDescription={'Resumen de la orden'}>
      <Typography component='h1' variant='h1'>Orden: 2131234</Typography>
      {/* <Chip
        sx={{ my: 2 }}
        label='Pendiente de pago'
        variant='outlined'
        color='error'
        icon={<CreditScoreOutlined />}
      /> */}
      <Chip
        sx={{ my: 2 }}
        label='Orden ya fue pagada'
        variant='outlined'
        color='success'
        icon={<CreditScoreOutlined />}
      />
      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className='summary-card'>
            <CardContent>
              <Typography variant='h2'>Resumen (3 productos)</Typography>
              <Divider sx={{ my: 2 }} />
              <Box display='flex' justifyContent='space-between'>
                <Typography variant='subtitle1'>Direccion de entrega</Typography>
                <NextLink href='/checkout/address' passHref legacyBehavior>
                  <Link underline='always'>
                    Editar
                  </Link>
                </NextLink>
              </Box>

              <Typography>Andres Reyes</Typography>
              <Typography>Carrera 2</Typography>
              <Typography>Los pinos</Typography>
              <Typography>Colombia</Typography>
              <Typography>+57 312 542 5425</Typography>

              <Divider sx={{ my: 1 }} />
              <Box display='flex' justifyContent='end'>
                <NextLink href='/cart' passHref legacyBehavior>
                  <Link underline='always'>
                    Editar
                  </Link>
                </NextLink>
              </Box>

              <OrderSummary />

              <Box sx={{ mt: 3 }}>
                <h1>Pagar</h1>

                <Chip
                  sx={{ my: 2 }}
                  label='Orden ya fue pagada'
                  variant='outlined'
                  color='success'
                  icon={<CreditScoreOutlined />}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default OrdenPage

// Título de la página:
// El componente Typography muestra el título “Orden: 2131234”.
// Estado de la orden:
// Se utiliza el componente Chip para mostrar el estado de la orden.
// El estado “Orden ya fue pagada” está representado por un chip verde con el ícono de una marca de verificación.
// Lista de productos en el carrito:
// Se utiliza el componente CartList para mostrar los productos en el carrito.
// Tarjeta de resumen:
// La tarjeta de resumen contiene detalles importantes:
// Título “Resumen (3 productos)”.
// Sección de dirección de entrega con un enlace para editar la dirección.
// Detalles de la dirección (nombre, dirección, ciudad, país y teléfono).
// Enlace para editar el carrito.
// Resumen de la orden (probablemente el total y otros detalles).
// Sección de pago con el estado “Orden ya fue pagada”.