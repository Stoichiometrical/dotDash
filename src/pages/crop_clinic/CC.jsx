import DashboardFrame from "../../components/dashframe/DashFrame.jsx";
import CropClinic from "./CropClinic.jsx";

export default function CropClinics(){
    return(
        <>
            <div>
                <DashboardFrame contents={ <CropClinic/>}/>

            </div>
        </>
    )
}