import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './Pages/about/about.jsx'
import Events from './Pages/events/events.jsx'
import Wie from './Pages/gallery/gallery.jsx'

import Team from './Pages/team/team.jsx'
import Contact from './Pages/contact/contact.jsx'

import Navbar from './Components/Navbar.jsx'
import Footer from './Components/footer.jsx'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<About/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/gallery' element={<Wie/>}/>
      
      <Route path='/team' element={<Team/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    
  )
}

export default App
