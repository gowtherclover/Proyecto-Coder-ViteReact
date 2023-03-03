import { Card, CardMedia, CardContent, Typography, CardActions, Button, CardActionArea } from "@mui/material"

export default function ItemCard({products}){

    return(
        <>
        {products.map((datos)=>{
            <Card sx={{mt:3,width:250}} elevation="8">
                <CardActionArea>
                    <CardMedia 
                        component="img"
                        image="http://via.placeholder.com/1000x200"
                        height="200"
                        alt="Descripcion de la foto"
                    />
                    <CardContent sx={{textAlign:"center"}}>
                        <Typography variant="h5" key={datos.id}>{datos.tipo}</Typography>
                        <Typography
                            component="p"
                            variant="body2"
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eos illum, ipsa quia commodi, vel dolor ea magnam eligendi recusandae possimus iure. Quidem maxime asperiores at necessitatibus ratione iusto doloremque!

                        </Typography>
                    </CardContent>
                    <CardActions sx={{justifyContent:"space-around"}}>
                        <Button variant="contained" color="secondary">Agregar</Button>
                        <Button variant="contained" color="error">Eliminar</Button>
                    </CardActions>
                </CardActionArea>
            </Card>
        })}
        </>
        
    )
} 