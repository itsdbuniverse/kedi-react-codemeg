import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import UnapprovedDoctor from './components/UnapprovedPatient'
import UnapprovedPatient from './components/UnapprovedPatient'
import Header from './components/Header'
import NavMain from './components/NavMain';
import Hospital from "../src/components/Hospital"
import Professionals from "../src/components/Professionals"
import Patients from './components/Patients'
import UnapprovedProfessionals from './components/UnapprovedProfessionals'
import NotificationList from './components/NotificationList'
import AddNew from './components/AddNew'
import AddHospitalpop from './components/AddHospitalpop'
import EditHospital from './components/EditHospital'
import MyAccount from './components/MyAccount'
import ForgetPassword from './components/ForgetPassword'
import Otp from '../src/components/Otp'

function App() {

  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/hospital' element={<Hospital />} />
          <Route path='/un-doc' element={<UnapprovedDoctor />} />
          <Route path='/un-patient' element={<UnapprovedPatient />} />
          <Route path='/professional' element={<Professionals />} />
          <Route path='/patient' element={<Patients />} />
          <Route path='/un-prof' element={<UnapprovedProfessionals />} />
          <Route path='/notification' element={<NotificationList />} />
          <Route path='/add-new' element={<AddNew />} />
          <Route path='/add-h-pop' element={<AddHospitalpop/>} />
          <Route path='/edit-hospital' element={<EditHospital/>} />
          <Route path='/myaccount' element={<MyAccount />} />
          <Route path='/forgetpassword' element={<ForgetPassword />} />
          <Route path='/otp' element={<Otp />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App

//rfce to create a new components