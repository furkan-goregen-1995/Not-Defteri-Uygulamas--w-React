import { useNavigate, useLocation } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import {Drawer, makeStyles, Typography} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Avatar from '@material-ui/core/Avatar'


const drawerWidth = 240
const useStyles = makeStyles((theme) => {
    return {
      page: {
        background: '#f9f9f9',
        width: '100%',
        padding: theme.spacing(3),
      },
      root: {
        display: 'flex',
      },
      drawer: {
        width: drawerWidth,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      active: {
        background: '#f4f4f4'
      },
      title: {
        padding: theme.spacing(2),
      },
      appBar: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
	  },
      toolbar: theme.mixins.toolbar,
      avatar: {
        marginLeft: theme.spacing(2),
        background: '#7ed6df',
        color:'#000',
        border: '1px solid #000'
      }
    }
  })

export default function Layout({children}) {
    const classes = useStyles()
    const location = useLocation()
    const navigate = useNavigate()
    const menuItems = [
        { 
          text: 'Notlar', 
          icon: <SubjectOutlined color="secondary" />, 
          path: '/notes' 
        },
        { 
          text: 'Yeni Not', 
          icon: <AddCircleOutlineOutlined color="secondary" />, 
          path: '/create' 
        },
      ];
    return (
    <div className={classes.root}>
        <div>app bar</div>
        <AppBar className={classes.appBar} color="secondary" position="fixed" elevation={0}>
	        <Toolbar>
		        <Typography>
			        Önemli Notlar
		        </Typography>
                <Avatar className={classes.avatar} variant="rounded"><Typography>AFG</Typography></Avatar>
	        </Toolbar>
        </AppBar>
        <Drawer className={classes.drawer} variant="permanent" classes={{paper:classes.drawerPaper}} anchor="left">
            <div>
                <Typography variant='h5' className={classes.title}>
                    AFG Not Defteri
                </Typography>
                <List>
                {menuItems.map((item) => (
                    <ListItem 
                    button 
                    key={item.text}  onClick={()=>navigate(item.path)} className={location.pathname==item.path?classes.active:null}
                    >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
            </div>
        </Drawer>
        <div className={classes.page}>
            <div className={classes.toolbar}></div>
            {children}
        </div>
    </div>
  )
}
