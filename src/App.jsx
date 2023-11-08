import DashboardFrame from "./components/dashframe/DashFrame.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import CropClinic from "./pages/crop_clinic/CropClinic.jsx";

function App() {


  return (
    <>
      <div>
          <DashboardFrame contents={ <CropClinic/>}/>

      </div>
    </>
  )
}

export default App
