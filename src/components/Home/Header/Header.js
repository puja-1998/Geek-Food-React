import "./Header.css"
import { Link } from "react-router-dom";
// Link is used to link the component
export default function(){
    return(
        <header className="App-header">
       <div className="logo"><Link to="/">
        <img src="https://flowbite.com/docs/images/logo.svg" alt="GeekFoods Logo"></img>
        <h1>GeekFoods</h1></Link>
       </div>

        <div  className="tabs">
        <Link to="/" className='home'>Home</Link>
        <Link to="/Quote">Quote</Link>
        {/* <Link to="/Restaurants">Restaurants</Link>
        <Link to="/Foods">Foods</Link>
        <Link to="/Contact">Contact</Link> */}
        </div>

        <div>
          <button className="getStartedBtn">Get Started</button>
        </div>
      </header>
    );
}