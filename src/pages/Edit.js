import { useState } from 'react';
import React from 'react'
import {FormControl,FormLabel,FormControlLabel,makeStyles,Container,Button,TextField, Radio,RadioGroup} from '@material-ui/core'
import { useNavigate, useParams } from 'react-router-dom';

const sitil = makeStyles({
    margin:{
        marginTop:20
    },
    outlined:{
        marginTop:20,
        color: '#000',
        background: '#1ecbe1',
        '&:hover': {
            backgroundColor: '#a65971',
            color: '#ff3800'
        }
    },
    field:{
        marginTop:20,
        marginBottom:20,
        display:'block'
    }
})
export default function Edit() {
    const {id,categories,titles,detailss} = useParams()
    const sitilOlustur = sitil();
    const navigate = useNavigate()
    const [note, setNote] = useState([])
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const [category, setCategory] = useState('')

    const handleSubmit= (e) =>{
        e.preventDefault()

        if(!title){
            setTitle(titles)
        }

        if(!details){
            setDetails(detailss)
        }

        if(title && details){
          fetch('http://localhost:8000/notes/'+ id,{
            method:'PUT',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({title,details,category})
          }).then(()=>navigate('/notes'))
        }
        
    }

    

    
    return (
        <Container>
            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <TextField label='Not Başlık' color='secondary' fullWidth className={sitilOlustur.margin} placeholder={titles} onChange={(e)=>setTitle(e.target.value)}/>
                <br />
                <TextField label='Not Detay' fullWidth color='secondary' className={sitilOlustur.margin} placeholder={detailss} onChange={(e)=>setDetails(e.target.value)}/>
                <br />
                <FormControl className={sitilOlustur.field} required>
                    <FormLabel>Not Kategorisi</FormLabel>
                    <RadioGroup value={category} onChange={(e)=>setCategory(e.target.value)} >
                        <FormControlLabel value="normal" control={<Radio />} label="Normal"/>
                        <FormControlLabel value="acil" control={<Radio />} label="Acil"/>
                        <FormControlLabel value="kritik" control={<Radio />} label="Kritik"/>
                    </RadioGroup>
                </FormControl>
                <Button className={sitilOlustur.margin}  type='submit' color='primary' variant='outlined'>Düzenle</Button>            
            </form>
        </Container>
    )
}
