import React from "react";
import { VscPulse } from "react-icons/vsc";
import { VscArchive } from "react-icons/vsc";
import { MdRememberMe } from "react-icons/md";
import { IoApertureOutline } from "react-icons/io5";
import { FaApplePay } from "react-icons/fa";
import "./Sidebar.scss";

const Items = [
  { id: 1, icon: <VscPulse />, label: "هزینه ها", color: "blue" },
  { id: 2, icon: <VscArchive />, label: "کیف پول", color: "Purple" },
  { id: 3, icon: <MdRememberMe />, label: "مدیریت تیم", color: "Purple-dark" },
  {
    id: 4,
    icon: <IoApertureOutline />,
    label: "مدیریت بخش ها",
    color: "pink",
  },
];

function Sidebar() {
  return (
    <section className='section'>
      <div>
        <div className='logo'>
          <FaApplePay />
        </div>
      </div>
      <div></div>
      <div className='sidebar'>
        {Items.map((item) => {
          const { id, icon, label, color } = item;
          return (
            <div>
              <a href='#'>
                <div key={id} className='menu-items'>
                  <h3 className={color}>{icon}</h3>
                  <h4>{label}</h4>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Sidebar;
