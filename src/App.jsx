import DashboardFrame from "./components/dashframe/DashFrame.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";

function App() {


  return (
    <>
      <div>
          <DashboardFrame contents={ <Dashboard/>}/>

      </div>
    </>
  )
}

export default App
