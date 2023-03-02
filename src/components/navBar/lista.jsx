import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts';

export default function Lista(){
    
    return(
        <Box sx={{width:250}}>
            <nav>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Inbox"/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <DraftsIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Drafts"/>
                    </ListItem>
                </List>
            </nav>
            <Divider/>
            <nav>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#Trash">
                            <ListItemText>Trash</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#Spam">
                            <ListItemText>Spam</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Box>
    )
}