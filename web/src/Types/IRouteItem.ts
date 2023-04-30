import { ComponentType, LazyExoticComponent } from "react";

export declare interface IRouteItem {

    exact: boolean;
    path: string;
    component: void | LazyExoticComponent<ComponentType<any>>;
    layout: any;
    
}