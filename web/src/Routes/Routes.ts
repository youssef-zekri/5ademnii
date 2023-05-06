import React from "react";
import MainLayouts from "../Layouts/MainLayouts";
import Auth from "../views/Auth/Auth";


const Login = React.lazy(() => import("../views/Auth/login"));
const Chat = React.lazy(() => import("../views/Chat"));
const Home = React.lazy(() => import("../views/home"));
const Profile = React.lazy(() => import("../views/Profile/Profile"));
const Qr = React.lazy(() => import("../views/Qr"));
const Error = React.lazy(() => import("../views/Error/Error"));
const Register = React.lazy(()=>import('../views/Auth/Register/Register'))
const Cv = React.lazy(()=>import('../views/cv/Cv'))
enum RoutePath {
    HOME = '/',
    Profile = '/Profile',
    Chat = '/Chat',
    Qr = '/qr',
    Login = '/login',
    Register = '/Register',
    Error  ='*',
    Cv = '/profile/:groupeId'
  
}
  
interface Route {
  path: RoutePath;
  component: any  ;
  layout : any;
  exact?: boolean ;
}
  
export const routes: Route[] = [
    {
      path: RoutePath.HOME,
      component: Home,
      layout : MainLayouts,
      exact: true,
    },
    {
      path: RoutePath.Profile,
      component: Profile,
      layout : MainLayouts,
      exact: true,
    },
    {
      path: RoutePath.Chat,
      component: Chat,
      layout : MainLayouts,
      exact: true,
    },
    {
      path: RoutePath.Qr,
      component: Qr,
      layout : MainLayouts,
      exact: true,
    },
    {
      path: RoutePath.Login,
      component: Login,
      layout : Auth,
      exact: true,
    },
    {
      path: RoutePath.Register,
      component: Register,
      layout : Auth,
      exact: true,
    },
    {
      path: RoutePath.Cv,
      component: null,
      layout : Cv,
      exact: true,
    },
    {
      path: RoutePath.Error,
      component: null,
      layout : Error,
      exact: false,
    },
  ];

  
