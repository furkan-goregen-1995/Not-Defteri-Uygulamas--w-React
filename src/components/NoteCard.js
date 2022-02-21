import { Card, CardHeader, IconButton,makeStyles,CardActions,Button, CardContent, Typography } from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons'
import Avatar from '@material-ui/core/Avatar'
import { yellow, green, red, blue } from '@material-ui/core/colors'
import { useNavigate } from 'react-router-dom'
import PageviewIcon from '@material-ui/icons/Pageview';


const useStyles = makeStyles({
  test: {
    border: (note) => {
      if (note.category == 'normal') {
        return '1px solid #f6e58d'
      }
      if (note.category == 'acil') {
        return '1px solid #7ed6df'
      }
      if (note.category == 'kritik') {
        return '1px solid #ff7979'
      }
    }
  },
  avatar: {
    backgroundColor: (note) => {
      if (note.category == 'normal') {
        return yellow[700]
      }
      if (note.category == 'acil') {
        return green[500]
      }
      if (note.category == 'kritik') {
        return red[500]
      }
      return blue[500]
    },
  }
})


export default function NoteCard({note, handleDelete}) {

  const classes = useStyles(note)
  const navigate = useNavigate()
  
  return (
    
    <Card  elevation={3} className={classes.test}>
        <CardHeader avatar={<Avatar className={classes.avatar}>{note.category[0].toUpperCase()}</Avatar>} action={
            <IconButton onClick={()=>handleDelete(note.id)}>
                <DeleteOutlined/>
            </IconButton>
        } title={note.title} subheader={note.category}/>
        <CardContent>
          <Typography variant='h6'>
              {note.details.substring(0,80)+'...'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={()=>navigate('/note/'+ note.id)}>Daha fazla öğren...</Button>
        </CardActions>
    </Card>
   
  )
}
