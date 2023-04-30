import React from "react";
import SideBar from "../../components/SideBar/SideBar";
type Props = {
  children?: any;
};
export default function MainLayouts({ children }: Props) {
  return (
    <div className="Layout">
      <SideBar />
      <div className="Layout__Child">
        {children}
      </div>
    </div>
  );
}
