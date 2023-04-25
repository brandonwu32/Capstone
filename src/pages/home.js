import './home.css';
import calendar from '../static/calendar.png';
import planner from '../static/strong.png';


function Home() {
  function switchToSignin(){
    document.getElementById("Signin").style.display = 'block';
    document.getElementById("home").style.display='none';
    document.getElementById("Planner").style.display='none';
  }
  return (
    <div className = 'big-body'>
      <div className ='title'>
        STUDDIE
      </div>
      <div className = 'backgrounds'>
        <div className = 'backdiv0'>
        </div>
        <div className = 'backdiv1'>
          <video className = 'back1' loop autoPlay muted>
            <source src ="https://github.com/brandonwu32/CapstoneVideos/blob/main/vid.mp4?raw=true"/>
          </video>
        </div>
        <div className = 'backdiv2'>
          <video className = 'back2' loop autoPlay muted>
            <source src ="https://github.com/brandonwu32/CapstoneVideos/blob/main/vid3.mp4?raw=true"/>
          </video>
        </div>
      </div>
        <img className = 'calen' src = {calendar} alt=''/>
        <button onClick = {switchToSignin} className = 'planner-button'>Plan Your Workout Times</button>
        <img className = 'split-maker' src = {planner} alt=''/>
        <button className = 'split-button'>Make Your Splits</button>
      </div>
      );
}

export default Home;
