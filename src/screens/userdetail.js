import React from "react";
import Socialmodal from "../components/socialmodal"

export default function Userdetail({ item }) {
  console.log(item)
  return (
    <div className="flex-container userdetail">
      <div>
        <h1>{item.generalinfo.first_name} {item.generalinfo.last_name}</h1>
        {/* to be changed: */}
        <p>Distance: 100m</p> 
        <Socialmodal />
      </div>
    </div>
  );
}
