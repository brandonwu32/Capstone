import "./App.css";
import Home from './pages/home';
import Signin from './pages/signin';
import Planner from './pages/planner';

function App(){
    return (
        <div>
            <div className = 'home' id = 'home'>
                <Home/>
            </div>

            <div className = 'Signin' id = 'Signin'>
                <Signin/>
            </div>

            <div className = "Planner" id = 'Planner'>
                <Planner/>
            </div>
        </div>
    );
}

export default App;