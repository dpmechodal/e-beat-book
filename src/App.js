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
import SuperAdminUsers from './AllAdmin/SuperAdmin/Users';

// {/* Zone Admin  */}
import ZoneAdminDashboard from './AllAdmin/ZoneAdmin/Dashboard';
import ZoneAdminReport from './AllAdmin/ZoneAdmin/Report';
import ZoneAdminNistaranVivran from './AllAdmin/ZoneAdmin/NistaranVivran';
import ZoneAdminPiditaoInfo from './AllAdmin/ZoneAdmin/PiditaoInfo';
import ZoneAdminPracharPrasar from './AllAdmin/ZoneAdmin/PracharPrasar';
import ZoneAdminJanJagrukta from './AllAdmin/ZoneAdmin/JanJagrukta';

// Range Admin
import RangeAdminDashboard from './AllAdmin/RangeAdmin/Dashboard';
import RangeAdminReport from './AllAdmin/RangeAdmin/Report';

// CO Admin
import COAdminDashboard from './AllAdmin/COAdmin/Dashboard';
import COAdminReport from './AllAdmin/COAdmin/Report';

// District Admin
import DistrictAdminDashboard from './AllAdmin/DistrictAdmin/Dashboard';
import DistrictAdminReport from './AllAdmin/DistrictAdmin/Report';

// Police Station Admin
import PoliceStationAdminDashboard from './AllAdmin/PoliceStationAdmin/Dashboard';
import PoliceStationAdminCreateBeats from './AllAdmin/PoliceStationAdmin/CreateBeats';
import PoliceStationAdminBeats from './AllAdmin/PoliceStationAdmin/Beats';
import PoliceStationAdminPolice from './AllAdmin/PoliceStationAdmin/Police';
import PoliceStationAdminNistaranVivran from './AllAdmin/PoliceStationAdmin/NistaranVivran';
import PoliceStationAdminPiditaoInfo from './AllAdmin/PoliceStationAdmin/PiditaoInfo';
import PoliceStationAdminPracharPrasar from './AllAdmin/PoliceStationAdmin/PracharPrasar';
import PoliceStationAdminJanJagrukta from './AllAdmin/PoliceStationAdmin/JanJagrukta';
import PoliceStationAdminReport from './AllAdmin/PoliceStationAdmin/Report';


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
          <Route path='/SuperAdmin/Users' element={<SuperAdminUsers/>}/>

          {/* Zone Admin  */}
          <Route path='/ZoneAdmin/Dashboard' element={<ZoneAdminDashboard/>}/>
          <Route path='/ZoneAdmin/Report' element={<ZoneAdminReport/>}/>
          <Route path='/ZoneAdmin/NistaranVivran' element={<ZoneAdminNistaranVivran/>}/>
          <Route path='/ZoneAdmin/PiditaoInfo' element={<ZoneAdminPiditaoInfo/>}/>
          <Route path='/ZoneAdmin/PracharPrasar' element={<ZoneAdminPracharPrasar/>}/>
          <Route path='/ZoneAdmin/JanJagrukta' element={<ZoneAdminJanJagrukta/>}/>

          {/* Range Admin */}
          <Route path='/RangeAdmin/Dashboard' element={<RangeAdminDashboard/>}/>
          <Route path='/RangeAdmin/Report' element={<RangeAdminReport/>}/>
          
          {/* CO Admin */}
          <Route path='/COAdmin/Dashboard' element={<COAdminDashboard/>}/>
          <Route path='/COAdmin/Report' element={<COAdminReport/>}/>

          {/* District Admin */}
          <Route path='/DistrictAdmin/Dashboard' element={<DistrictAdminDashboard/>}/>
          <Route path='/DistrictAdmin/Report' element={<DistrictAdminReport/>}/>

          {/* Police Station Admin */}
          <Route path='/PoliceStationAdmin/Dashboard' element={<PoliceStationAdminDashboard/>}/>
          <Route path='/PoliceStationAdmin/CreateBeats' element={<PoliceStationAdminCreateBeats/>}/>
          <Route path='/PoliceStationAdmin/Beats' element={<PoliceStationAdminBeats/>}/>
          <Route path='/PoliceStationAdmin/Police' element={<PoliceStationAdminPolice/>}/>
          <Route path='/PoliceStationAdmin/NistaranVivran' element={<PoliceStationAdminNistaranVivran/>}/>
          <Route path='/PoliceStationAdmin/PiditaoInfo' element={<PoliceStationAdminPiditaoInfo/>}/>
          <Route path='/PoliceStationAdmin/PracharPrasar' element={<PoliceStationAdminPracharPrasar/>}/>
          <Route path='/PoliceStationAdmin/JanJagrukta' element={<PoliceStationAdminJanJagrukta/>}/>
          <Route path='/PoliceStationAdmin/Report' element={<PoliceStationAdminReport/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
