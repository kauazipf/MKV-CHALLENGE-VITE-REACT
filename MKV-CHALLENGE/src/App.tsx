import Header from './components/Header/header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/footer'
import './App.css'

export default function App() {
  return(
    <>
      <div className='index-content'> 
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}
