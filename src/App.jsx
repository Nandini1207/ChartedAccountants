import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProfileDetails from './components/ProfileDetails';
import Home from './pages/Home'
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Profiles from './pages/Profiles';


function App() {
 
  return (
    <Router>
     <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/profile' element={<Profiles/>}/>
       <Route path="/details/:id" element={<ProfileDetails />} />
       <Route path='/contact'element={<Contact/>}/>
     </Routes>
     <Footer />
    </Router>
    
  )
}

export default App