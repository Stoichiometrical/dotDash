import './crop.scss'
import FormComponent from "./Form.jsx";

export default function  CropClinic(){
    return(
        <div className='crop-clinic'>
            <h2 className='c-header'>Crop Clinic</h2>

            <br/>
            <div className='w-text'>Welcome To Crop Clinic</div>
            <br/>
            <div className='w-text2'>
                Discover the power of our interactive AI-powered farming advisor, Crop Clinic. This innovative tool is designed to provide personalized advice on crops and farming activities, custom-tailored to meet the unique needs and goals of each farmer. With Crop Clinic, you can set specific goals, track your progress, and effectively manage your financial and operational activities for optimal results.
            </div>

            <br/>
            <br/>

            <div className='advisor'>
                <div className='a-head'>AI Farming Advisor for in-depth Recommendations</div>
                <div className='a2'>
                    Enter your details now and unlock the full potential of Crop Clinic to elevate your farming practices and maximize
                </div>
            </div>

            <div className="form-fields">
              <FormComponent/>
            </div>




        </div>
    )
}