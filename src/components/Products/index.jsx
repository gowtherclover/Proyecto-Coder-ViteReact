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
            <Paper>
                <Grid   
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{mt:2}}
                >
                    <Img src="http://via.placeholder.com/200" alt="fotito"/>
                    <Box sx={{flexGrow:1,display:"grid",gap:4,mx:2}}>
                        <Typography variant="h4" align="center" >Nombre del producto</Typography>
                        <Typography variant="body1" align="center">descripcion del producto</Typography>
                        <Button variant="contained">Agregar</Button>
                    </Box>
                    <Box sx={{mr:2}} component="p">$14.57</Box>
                </Grid>
            </Paper>
            <Paper   >
                <Grid   
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{mt:2}}
                >
                    <Img src="http://via.placeholder.com/200" alt="fotito"/>
                    <Box sx={{flexGrow:1,display:"grid",gap:4,mx:2}}>
                        <Typography variant="h4" align="center">Nombre del producto</Typography>
                        <Typography variant="body1" align="center">descripcion del producto</Typography>
                        <Button variant="contained">Agregar</Button>
                    </Box>
                    <Box sx={{mr:2}} component="p">$14.57</Box>
                </Grid>
            </Paper>
        </>
    )
}