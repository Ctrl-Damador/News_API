import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardActions'
import CardMedia from '@mui/material/CardMedia'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const News = ({ news }) => {

  const { urlToImage, url, title, description, source } = news
  return (
    <Grid item md={6} lg={4} >
      <Card>
        <CardMedia
          component="img"
          alt={`Imagen de la noticia ${title}`}
          image={urlToImage}
          height={'250'}
        />
        <CardContent>
          <Typography variant='h6' color="secondary">
            {source.name}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant='h5' component="div">
            {title}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant='body2'>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            href={url}
            target="_blank"
            variant='button outlined'
            color={'secondary'}
            width={'100%'}
            textAlign={'center'}
            border={1}
            padding={1}
            sx={{
              textDecoration: 'none',
            }}
          >
            Leer noticia
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default News