import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import UserDetails from './components/UserDetails';
import DriverDetails from './components/DriverDetails';
import Promotions from './components/Promotions';
import VehicleTypes from './components/VehicleTypes';
import DriverDocuments from './components/DriverDocuments';
import Bookings from './components/Bookings';
import HelpSupport from './components/HelpSupport';
import Scrolltotop from './Scrolltotop';
import Signin from './components/Signin';
import EmailVerification from './components/EmailVerification';
import ForgotPassword from './components/ForgotPassword';
import Successfullysentmail from './components/Successfullysentmail';
import ChangePassword from './components/ChangePassword';


function App() {
  return (
    <div className="App"> 
      <Router>
      <Scrolltotop/>
        <Routes>
          <Route path='/' element={<Signin/>}/>
          <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
          <Route path='/EmailVerification' element={<EmailVerification/>}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>
          <Route path='/UserDetails' element={<UserDetails/>}/>
          <Route path='/DriverDetails' element={<DriverDetails/>}/>
          <Route path='/Promotions' element={<Promotions/>}/>
          <Route path='/VehicleTypes' element={<VehicleTypes/>}/>
          <Route path='/DriverDocuments' element={<DriverDocuments/>}/>
          <Route path='/Bookings' element={<Bookings/>}/>
          <Route path='/HelpSupport' element={<HelpSupport/>}/>
          <Route path='/Successfullysentmail' element={<Successfullysentmail/>}/>
          <Route path='/ChangePassword' element={<ChangePassword/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
