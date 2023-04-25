 import "./signin.css";

 function Signin(){
    function switchToPlanner(){
        document.getElementById("Signin").style.display = 'none';
        document.getElementById("home").style.display='none';
        document.getElementById("Planner").style.display='block';
    }
    return (
        <div className = 'main-body2'>
            <div className = 'backgrounds1'>
                <div className = 'backdiv3'>
                </div>
                <div className = 'backdiv4'>
                <video className = 'back4' loop autoPlay muted>
                    <source src ="https://github.com/brandonwu32/CapstoneVideos/blob/main/vid.mp4?raw=true"/>
                </video>
                </div>
                <div className = 'backdiv5'>
                <video className = 'back5' loop autoPlay muted>
                    <source src ="https://github.com/brandonwu32/CapstoneVideos/blob/main/vid3.mp4?raw=true"/>
                </video>
                </div>
            </div>
            <div className = 'SignBody'>
                <h1 className = "signintitle">Sign In</h1>
                <div className = 'email-prompt'>
                    <p className = 'labels'>E-mail:</p>
                    <textarea className = 'prompt'></textarea>
                </div>
                <div className = 'password-prompt'>
                    <p className = 'labels'>Password:</p>
                    <textarea className = 'prompt1'></textarea>
                </div>
                <div className = 'submission'>
                    <button onClick = {switchToPlanner} className = 'submit-button'>Sign-in</button>
                </div>
                <a className = 'makeaccount' href = 'https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp'>Make An Account</a>
            </div>
        </div>
    );
 }

 export default Signin;