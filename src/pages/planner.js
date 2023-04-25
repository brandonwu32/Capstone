import './planner.css';
import NavBar from '../components/navbar';
import calendar from '../static/calendar.png';

function Planner(){
    return(
        <div className = 'mainbody3'>
            <NavBar/>
            <div className = 'planner-contents'>
                <div className = 'sidebar'>
                    <h1 className = 'label1'>Available Times</h1>
                </div>
                <textarea className = 'embed-area'>embed</textarea>
                <img className = 'image' src = {calendar} alt = ''></img>
            </div>
        </div>
    );
}

export default Planner;