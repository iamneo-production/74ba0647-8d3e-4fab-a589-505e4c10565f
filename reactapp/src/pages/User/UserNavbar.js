import { useState } from "react";
import {Link} from 'react-router-dom';
import "./components/UserNavbar.css";
const UserNavbar=()=>{
    return(
        <div className="nav-bar">
            <ul>
                <li>User Dashboard</li>
                <Link to="/user/bookevent"><li>Book Event</li></Link>
                <Link to="/user/viewbooked"><li>View Booked Events</li></Link>
                <Link to="/logout"><li>Logout</li></Link>
            </ul>
        </div>
    );
}
export default UserNavbar;