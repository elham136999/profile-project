import React from "react";
import { VscPulse } from "react-icons/vsc";
import { VscArchive } from "react-icons/vsc";
import { MdRememberMe } from "react-icons/md";
import { IoApertureOutline } from "react-icons/io5";
import "./Sidebar.scss";

const Items = [
  { id: 1, icon: <VscPulse />, label: "هزینه ها" },
  { id: 2, icon: <VscArchive />, label: "کیف پول" },
  { id: 3, icon: <MdRememberMe />, label: "مدیریت تیم" },
  { id: 4, icon: <IoApertureOutline />, label: "مدیریت بخش ها" },
];

function Sidebar() {
  return (
    <section className='section'>
      <div>logo</div>
      <div>img</div>
      <div className='navbar'>
        {Items.map((item) => {
          const { id, icon, label } = item;
          return (
            <div key={id} className='menu-items'>
              <h3>{icon}</h3>
              <h4>{label}</h4>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Sidebar;
