import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import ApptsPage from './pages/ApptsPage';
import ApptDetailPage from './pages/ApptDetailPage';
import AddPage from './pages/AddPage';
import UpdatePage from './pages/UpdatePage';
import DeletePage from './pages/DeletePage';

function App() {

  return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/about' element={<AboutPage />} />

        <Route path='/appointments' element={<ApptsPage />} />

        <Route path='/appointment/:apptId' element={<ApptDetailPage />} />

        <Route path='/addAppointments' element={<AddPage />} />

        <Route path='/updateAppointments' element={<UpdatePage />} />

        <Route path='/deleteAppointments' element={<DeletePage />} />

        <Route path='*' element={ <NotFoundPage /> } />
      </Routes>

      <Footer />

    </div>
  )
}

export default App;
