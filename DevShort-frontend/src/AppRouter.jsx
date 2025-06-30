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
import PrivateRoute from './PrivateRoute'
import ErrorPage from './components/ErrorPage'

const AppRouter = () => {
  return (
   <>
    <Navbar/>
    <Toaster position='bottom-center' />
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>

      <Route path='/register' element={<PrivateRoute publicPage={true}><RegisterPage/></PrivateRoute>}/>
      <Route path='/login' element={<PrivateRoute publicPage={true}><Login/> </PrivateRoute>}/>

      <Route path='/dashboard' element={<PrivateRoute publicPage={false}><DashboardLayout/></PrivateRoute>}/>

      <Route path='/error' element={<ErrorPage />}/>
      <Route path='*' element={<ErrorPage message="We can't seem to find the page you are looking for !!"/>}/>
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