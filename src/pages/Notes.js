import { Grid, Paper } from '@material-ui/core'
import React from 'react'
import { useState,useEffect } from 'react'
import NoteCard from '../components/NoteCard'
import { useNavigate } from 'react-router-dom'

export default function Notes() {
  const [notes, setNotes] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:8000/notes').then(res=>res.json()).then(data=>setNotes(data))
  }, [])


  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/notes/' + id, {
      method: 'DELETE'
    })
    const newNotes = notes.filter(note => note.id != id)
    setNotes(newNotes)
  }

  return (
    <Grid container spacing={3}>
      {notes.map(note=>(
      <Grid key={note.id} xs={12} sm={12} md={6} lg={4}  item >
        <NoteCard note={note} handleDelete={handleDelete}/>
      </Grid>
      ))}

    </Grid>
  )
}
