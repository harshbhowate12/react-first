import "./navbaar.css";
import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <>
           <div className="container">
                 <Link to="/" className="links">Home</Link>
                 <Link to="/about" className="links">About</Link>
                 <Link to="/contact" className="links">contact</Link>             
           </div>
        </>
    )
}

export default Navbar;