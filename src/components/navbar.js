import "./navbar.css";

function NavBar(){

    function switchToHome(){
        document.getElementById("home").style.display='block';
        document.getElementById("Signin").style.display='none';
        document.getElementById("Planner").style.display='none';

    }

    function switchToSignin(){
        document.getElementById("Signin").style.display = 'block';
        document.getElementById("home").style.display='none';
        document.getElementById("Planner").style.display='none';
    }

    function switchToPlanner(){
        document.getElementById("Signin").style.display = 'block';
        document.getElementById("home").style.display='none';
        document.getElementById("Planner").style.display='none';
    }

    return(
        <nav className = "navbar">
            <div className ="options">
                <button className="button" onClick={switchToHome}>Home</button>
                <button className="button" onClick={switchToSignin}>Sign-in</button>
                <button className="button" onClick={switchToPlanner}>Planner</button>
            </div>
        </nav>
    );
}

export default NavBar;