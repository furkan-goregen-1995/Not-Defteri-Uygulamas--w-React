import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './pages/Create';
import Notes from './pages/Notes';
import {createTheme,ThemeProvider} from '@material-ui/core'
import {cyan} from '@material-ui/core/colors'
import Layout from './components/Layout';
import NotePaper from './components/NotePaper';
import Edit from './pages/Edit';

const theme=createTheme({
  palette:{
    primary:{
      main:'#f39c12'
    },
    secondary:cyan
  },
  typography:{
    fontSize:20,
    fontFamily:'Big Shoulders Display'
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
      
          <Routes>
            <Route exact path='/notes' element={<Notes/>}/>
            <Route exact path='/create' element={<Create/>}/>
            <Route exact path='/note/:id' element={<NotePaper/>}/>
            <Route exact path='/edit/:id/:categories/:titles/:detailss' element={<Edit/>}/>
          </Routes>
        
      </Layout>
    </ThemeProvider>
  );
}

export default App;
