import React from "react";
import UserNavbar from "./UserNavbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BookEvent from "./BookEvent";
import ViewBooked from "./ViewBooked";
import Logout from "../Logout";
import BookingForm from "./BookingForm";
const User=()=>{
    return(
        <div>
            <BrowserRouter>
                <UserNavbar />
                <Switch>
                    <Route path="/user/bookevent" exact>
                        <BookEvent />
                    </Route>
                    <Route path="/user/viewbooked" exact component={ViewBooked} />
                    <Route path="/user/booknow" exact component={BookingForm} />
                    <Route path="/logout" exact component={Logout} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}
export default User;