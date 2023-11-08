import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import "./reports.scss"
import Report from "../../components/report/Report.jsx";
import SearchBar from "../../components/searchbar/Search.jsx";


export default function Reports(){
    return(
        <div className="reports-container">
            <h3 className="header">Reports</h3>
            <div className="reports-subheader">Welcome to Reports,Unlock Your Farm's Potential</div>
            <div className="reports-desc">
                Discover a wealth of knowledge and detailed insights tailored to your farming needs. Our comprehensive reports provide valuable information on recommended crops, including optimal planting and harvesting periods, cultivation techniques, and specific considerations based on your soil condition, market dynamics, and local climate.
                <br/>
                <br/>
                Empowering farmers with the tools they need to make informed decisions, our reports enable you to maximize your crop yield and profitability. Dive into each recommendation report to uncover valuable guidance and strategies for enhanced crop growth and success.
                <br/>
                <br/>
                Enter your required details now and explore the wealth of knowledge available in our Recommendation Reports. Let us help you achieve your farming goals and unlock your farm's full potential.
            </div>
            <div className="reports-search">
                <div className="rs-head">Your Diary of Insights & Farming history</div>

                <div className="rs-icons">
                    <div className="rs-1 r1">
                        <div className="rs-sect">
                            <div className="rs">14</div>
                            <div className="rs-d">DD</div>
                        </div>

                        <div className="rs-sect">
                            <div className="rs">12</div>
                            <div className="rs-d">MM</div>
                        </div>

                        <div className="rs-sect">
                            <div className="rs">2023</div>
                            <div className="rs-d">YYYY</div>
                        </div>
                    </div>

                    <div className="rs-2">
                        <ArrowCircleRightIcon sx={{fontSize:"33px"}}/>
                    </div>

                    <div className="rs-1">
                        <div className="rs-sect">
                            <div className="rs">14</div>
                            <div className="rs-d">DD</div>
                        </div>

                        <div className="rs-sect">
                            <div className="rs">12</div>
                            <div className="rs-d">MM</div>
                        </div>

                        <div className="rs-sect">
                            <div className="rs">2023</div>
                            <div className="rs-d">YYYY</div>
                        </div>
                    </div>

                    <div className="rs-4">
                        Generate Report
                    </div>


                </div>
                <div className="search-bar">
                    <SearchBar/>
                </div>
            </div>
            <div className="r-reports">
                <div className="r-title">This Month</div>
                <div className="r-section">
                    <Report/>
                    <Report/>
                    <Report/>
                    <Report/>
                    <Report/>

                </div>
            </div>

        </div>
    )
}
