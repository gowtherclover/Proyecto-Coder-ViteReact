import { Card, CardMedia, CardContent, Typography, CardActions, Button, CardActionArea } from "@mui/material"

export default function Tarjeta(){

    return(
        <Card sx={{mt:3}}>
            <CardActionArea>
                <CardMedia 
                    component="img"
                    image="http://via.placeholder.com/1000x200"
                    height="200"
                    alt="Descripcion de la foto"
                />
                <CardContent>
                    <Typography variant="h5">Titulo de la Card</Typography>
                    <Typography
                        component="p"
                        variant="body2"
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eos illum, ipsa quia commodi, vel dolor ea magnam eligendi recusandae possimus iure. Quidem maxime asperiores at necessitatibus ratione iusto doloremque!

                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained">Agregar</Button>
                    <Button variant="contained" color="error">Eliminar</Button>
                </CardActions>
            </CardActionArea>
        </Card>
    )
} 