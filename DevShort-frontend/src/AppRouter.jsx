import LandingPage from './components/LandingPage'
import AboutPage from './components/AboutPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RegisterPage from './components/RegisterPage'
import { Toaster } from 'react-hot-toast'
import Login from './components/LoginPage'
import DashboardLayout from './components/Dashboard/DashboardLayout'
import ShortenUrlPage from './components/ShortenUrlPage'
import { Route, Routes } from 'react-router-dom'

const AppRouter = () => {
  return (
   <>
    <Navbar/>
    <Toaster position='bottom-center' />
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<DashboardLayout/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default AppRouter

export const subDomainRouter=()=>{

    return(
        <Routes>
      <Route path='/:url' element={<ShortenUrlPage/>}/>
      
    </Routes>
    )
}