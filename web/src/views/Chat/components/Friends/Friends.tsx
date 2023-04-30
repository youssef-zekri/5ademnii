import React from "react";
import user from '../../assets/imgs/user.jpg'
import { Link } from "react-router-dom";
export default function Friends() {
  return (
      <Link to='/chat' className="Friend">
        <img src={user} alt="user_picture" className="Friend__Picture"/>
        <div className="Friend__Picture__Status"></div>
        <div className="Friend__Content">
          <p className="Friend__Content__Name">Anatolia</p>
          <p className="Friend__Content__LastMessage">Hello</p>
        </div>
        <div className="Friend__Notifications">
          <p className="Friend__Notifications__date">11:52</p>
          <p className="Friend__Notifications__TotalMessages">5</p>
        </div>
      </Link>
  );
}
