import React from "react";
import "./Users.scss";
import { Profilecontext } from "../context";
import { useContext } from "react";
import { VscLocation } from "react-icons/vsc";
import { TiStopwatch } from "react-icons/ti";
import { CgCalendarDates } from "react-icons/cg";

function Users() {
  const { items } = useContext(Profilecontext);

  return (
    <section>
      <div className='users'>
        <div className='disply'>
          {items.map((item) => {
            const { id, name, location, time, date, img } = item;
            return (
              <div key={id} className='item'>
                <img src={img} alt='' />
                <p className='name'>{name}</p>
                <p>
                  <VscLocation />
                  {location}
                </p>
                <div className='time'>
                  <p>
                    <TiStopwatch />
                    {time}
                  </p>
                  <p className='date'>
                    <CgCalendarDates />
                    {date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Users;
