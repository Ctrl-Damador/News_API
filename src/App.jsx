import { Container, Grid, Typography } from '@mui/material';
import Formulario from './Components/Formulario'
import ListNews from './Components/ListNews'
import { NewsProvider } from './context/NewsProvider';

function App() {

  return (
    <NewsProvider>
      <Container>
        <header>
          <Typography
            align='center'
            marginY={5}
            component="h1"
            variant='h3'
          >
            Buscador de noticias
          </Typography>
        </header>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={6} xs={10} lg={6}>
            <Formulario />
          </Grid>
        </Grid>

        <ListNews/>

      </Container>
    </NewsProvider>
  )
}

export default App
