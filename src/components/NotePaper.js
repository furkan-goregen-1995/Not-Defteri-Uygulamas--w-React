import { Container, IconButton, Paper, Typography } from '@material-ui/core'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
    title:{
        width: '100%',
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 800,
    },
    category:{
        width: '100%',
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 700,
        opacity: 0.4
    },
    back:{
        display: 'flex',
        textAlign: 'justify',
        background: '#fff',
        '&:hover': {
            background: '#fff'
        }
    },
    details:{
        textAlign:'left',
        width: '100%',
        padding: 20,
        marginLeft: 10,
        fontSize: 20
    }

})

export default function NotePaper() {
    const {id} = useParams()
    const [note, setNote] = useState([])
    const classes = useStyles()
    const navigate = useNavigate()
    fetch('http://localhost:8000/notes/'+id).then(res=>res.json()).then(data=>setNote(data))
    return (
    <Container lg={12} md={12} xs={12}>
        <Paper>
            <Typography className={classes.back}>
                <IconButton onClick={()=>navigate('/notes')}>
                    <ArrowBackIcon/>
                </IconButton>
                <IconButton onClick={()=>navigate('/edit/'+note.id+'/'+note.category+'/'+note.title+'/'+note.details)}>
                    <EditIcon/>
                </IconButton>
            </Typography>
            <Typography className={classes.title}>{note.title}</Typography>
            <Typography className={classes.category}>{note.category}</Typography>
            <p className={classes.details}>{note.details}</p>
        </Paper>
    </Container>
  )
}
