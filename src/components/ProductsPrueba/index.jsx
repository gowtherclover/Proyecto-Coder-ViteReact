import styled from "@emotion/styled";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";

export default function Products (){
    const Img=styled("img")({
        width:200,
        height:"100%",
        objectFit:"cover",
        obejectPosition:"center",
    })
    return(
        <>
            <Paper 
                elevation="8" 
                sx={{
                    mt:3,
                    display:"grid",
                    gridTemplateColumns:".5fr",
                    gap:2,
                    overflow:"hidden",
                }}
            >
                <Img src="http://via.placeholder.com/200" alt="fotito"/>
                <Box sx={{flexGrow:1,display:"grid",gap:4,mx:2}}>
                    <Typography variant="h4" align="center" >Nombre del producto</Typography>
                    <Typography variant="body1" align="center">descripcion del producto</Typography>
                    <Button variant="contained" color="secondary">Agregar</Button>
                </Box>
                <Box sx={{mr:2}} component="p">$14.57</Box>
            </Paper>
            <Paper 
                elevation="8" 
                sx={{
                    mt:3,
                    display:"flex",
                    flexDirection:"column",
                    columns:"6",
                    alignItems:"center",
                    gap:2,
                    overflow:"hidden",

                }}
            >
                <Img src="http://via.placeholder.com/200" alt="fotito"/>
                <Box sx={{flexGrow:1,display:"grid",gap:4,mx:2}}>
                    <Typography variant="h4" align="center" >Nombre del producto</Typography>
                    <Typography variant="body1" align="center">descripcion del producto</Typography>
                    <Button variant="contained" color="secondary">Agregar</Button>
                </Box>
                <Box sx={{mr:2}} component="p">$14.57</Box>
            </Paper>
        </>
    )
}
