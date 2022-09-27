import { useState } from "react";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
const UserNavbar=()=>{
    return(
        <div>
            <ul>
                <li>Book Event</li>
                <li>View Booked Events</li>
            </ul>
        </div>
    );
}
export default UserNavbar;