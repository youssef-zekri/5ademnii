import React, { useState } from "react";
import User from "../../assets/images/user.png";
import NavLinks from "../NavLinks/NavLinks";
import useWindowDimensions from "../../Hooks/useWindowSize";
export default function SideBar() {
  const Links: { icon: string; path: string; message: string , name?:any }[] = [
    { icon: "fa-solid fa-house", path: "/", message: "Home" },
    { icon: "fa-regular fa-user", path: "/profile", message: "Profile" },
    { icon: "fa-regular fa-message", path: "/chat", message: "Chat" },
    { icon: "fa-solid fa-qrcode", path: "/Qr", message: "Qr" },
    { icon: "fa-solid fa-arrow-right-from-bracket", path: "/login", message: "Log out" , name : 'logOut' },
  ];
  const [sideBar, setSideBar] = useState(true);
  const [darkMode, setDarkMode] = React.useState(true);
  const dim : any = useWindowDimensions()
  console.log(dim)
  return (
    <div className={sideBar|| dim.width < 1000 ?"SideBar SideBar--active" : "SideBar"}>

      {!sideBar && dim.width > 1000 ? (
        <>
          <img src={User} className="SideBar__UserPhoto" />
          <p className="SideBar__UserName">Youssef Zekri</p>
        </>
      ) : <i className="fa-brands fa-slack SideBar__logo"></i>}
{dim.width>1000?
  <i
        className={"fa-solid SideBar__Toggler fa-angle-left"}
        id={sideBar ? "SideBar__Toggler--active" : "SideBar__Toggler"}
        onClick={() => setSideBar(!sideBar)}
      ></i>
:
<i className="fa-solid fa-bars SideBar__Toggler">

</i>
}
      
      {Links.map((link: { icon: string; path: string; message: string , name?:any }, i: Number) => (
        <NavLinks
          key={`link ${i}`}
          icon={<i className={link.icon}></i>}
          path={link.path}
          message={sideBar || dim.width < 1000 ? '':link.message}
          name = {link.name}
        />
      ))}

    </div>
  );
}
