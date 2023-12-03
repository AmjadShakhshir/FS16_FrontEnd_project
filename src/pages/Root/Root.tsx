import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Root.scss'

const Root = () => {
  return (
    <div className='root'>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Root