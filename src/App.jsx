
import './App.css'
import NavSetup from './Componets/Setup/NavSetup'
import NavUp from './Componets/Setup/Nav/NavUp'
import Button from './Componets/Setup/Btn/Button'
import Title from './Componets/Setup/Text/Title'
import NavDown from './Componets/Setup/Nav/NavDown'
import { HashRouter, Routes, Route } from "react-router-dom";
import Deshboard from './Componets/MainContent/Deshboard'
import Incidents from './Componets/MainContent/Incidents'
import Location from './Componets/MainContent/Location'
import Stapber from './Componets/MainContent/Stapber'
import Incident from './Componets/MainContent/Incident'
import Incident2 from './Componets/MainContent/Incident2'
import Incident3 from './Componets/MainContent/Incident3'
import Error from './Componets/MainContent/Error'

function App() {
  return (
    <HashRouter>
        <Routes>
           <Route path='' element={<NavUp />} >
              <Route path='/' element={<Deshboard />} />
              <Route path='/Incidents' element={<Incidents />} />
              <Route path='/Locations' element={<Location />} />
              <Route path='/Stapber' element={<Stapber />} />
              <Route path='/stap' element={<Incident />} />
              <Route path='/next' element={<Incident2 />} />
              <Route path='/next3' element={<Incident3 />} />

           </Route>
           <Route path='*' element={<Error />}/>

        </Routes>
    </HashRouter>
  )
}



export default App

