import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

export default function Lista({navLinks}){
    
    return(
        <Box sx={{width:250}}>
            <nav>
                <List>
                    {
                        navLinks.map(item=>(
                            <ListItem disablePadding>
                                <ListItemButton component="a" href={item.path} key={item.title}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText>{item.title}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </nav>
        </Box>
    )
}