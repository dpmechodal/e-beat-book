import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Scrolltotop from './Scrolltotop';
import Signin from './AllAdmin/Signin';
import OTP from './AllAdmin/OTP';

// Super Admin 
import SuperAdminZone from './AllAdmin/SuperAdmin/Zone';
import SuperAdminRange from './AllAdmin/SuperAdmin/Range';
import SuperAdminDistrict from './AllAdmin/SuperAdmin/District';
import SuperAdminCircleOfficer from './AllAdmin/SuperAdmin/CircleOfficer';
import SuperAdminPoliceStation from './AllAdmin/SuperAdmin/PoliceStation';
import SuperAdminEvent from './AllAdmin/SuperAdmin/Event';
import SuperAdminRank from './AllAdmin/SuperAdmin/Rank';
import SuperAdminRemarks from './AllAdmin/SuperAdmin/Remarks';

import ZoneAdminDashboard from './AllAdmin/ZoneAdmin/Dashboard';
import ZoneAdminVehicleTypes from './AllAdmin/ZoneAdmin/VehicleTypes';
import RangeAdminDashboard from './AllAdmin/RangeAdmin/Dashboard';
import RangeAdminVehicleTypes from './AllAdmin/RangeAdmin/VehicleTypes';
import CRAdminDashboard from './AllAdmin/CRAdmin/Dashboard';
import CRAdminVehicleTypes from './AllAdmin/CRAdmin/VehicleTypes';
import DistrictAdminDashboard from './AllAdmin/DistrictAdmin/Dashboard';
import DistrictAdminVehicleTypes from './AllAdmin/DistrictAdmin/VehicleTypes';
import PoliceStationAdminDashboard from './AllAdmin/PoliceStationAdmin/Dashboard';
import PoliceStationAdminVehicleTypes from './AllAdmin/PoliceStationAdmin/VehicleTypes';


function App() {
  return (
    <div className="App"> 
      <Router>
      <Scrolltotop/>
        <Routes>
          <Route path='/' element={<Signin/>}/>
          <Route path='/OTP' element={<OTP/>}/>

          {/* Super Admin  */}
          <Route path='/SuperAdmin/Zone' element={<SuperAdminZone/>}/>
          <Route path='/SuperAdmin/Range' element={<SuperAdminRange/>}/>
          <Route path='/SuperAdmin/District' element={<SuperAdminDistrict/>}/>
          <Route path='/SuperAdmin/CircleOfficer' element={<SuperAdminCircleOfficer/>}/>
          <Route path='/SuperAdmin/PoliceStation' element={<SuperAdminPoliceStation/>}/>
          <Route path='/SuperAdmin/Event' element={<SuperAdminEvent/>}/>
          <Route path='/SuperAdmin/Rank' element={<SuperAdminRank/>}/>
          <Route path='/SuperAdmin/Remarks' element={<SuperAdminRemarks/>}/>

          <Route path='/ZoneAdmin/Dashboard' element={<ZoneAdminDashboard/>}/>
          <Route path='/ZoneAdmin/VehicleTypes' element={<ZoneAdminVehicleTypes/>}/>
          <Route path='/RangeAdmin/Dashboard' element={<RangeAdminDashboard/>}/>
          <Route path='/RangeAdmin/VehicleTypes' element={<RangeAdminVehicleTypes/>}/>
          <Route path='/CRAdmin/Dashboard' element={<CRAdminDashboard/>}/>
          <Route path='/CRAdmin/VehicleTypes' element={<CRAdminVehicleTypes/>}/>
          <Route path='/DistrictAdmin/Dashboard' element={<DistrictAdminDashboard/>}/>
          <Route path='/DistrictAdmin/VehicleTypes' element={<DistrictAdminVehicleTypes/>}/>
          <Route path='/PoliceStationAdmin/Dashboard' element={<PoliceStationAdminDashboard/>}/>
          <Route path='/PoliceStationAdmin/VehicleTypes' element={<PoliceStationAdminVehicleTypes/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
