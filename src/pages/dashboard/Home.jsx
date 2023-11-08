import DashboardFrame from "../../components/dashframe/DashFrame.jsx";
import Dashboard from "./Dashboard.jsx";

export  default function Home(){
    return(
        <>
            <div>
                <DashboardFrame contents={ <Dashboard/>}/>

            </div>

        </>
    )
}