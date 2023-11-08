import DashboardFrame from "./components/dashframe/DashFrame.jsx";

import Reports from "./pages/reports/Reports.jsx";

function App() {


  return (
    <>
      <div>
          <DashboardFrame contents={ <Reports/>}/>

      </div>
    </>
  )
}

export default App
