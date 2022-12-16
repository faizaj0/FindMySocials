import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSwiper } from "swiper/react";

import { Image, Box, VStack } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

import { data } from "../constants/userdummydata";
import Socialmodal from "../components/socialmodal"



export default function Userdetail(item) {
  const swiper = useSwiper();
  const { id } = useParams();

  return (
    <div className="flex-container userdetail">
      

      {data.map((item) => {
        if (id == item.generalinfo.first_name) {
          
          return (
            <div>
              <h1>{item.generalinfo.first_name} {item.generalinfo.last_name}</h1>
              {/* to be changed: */}
              <p>Distance: 100m</p> 
              <Socialmodal />
              
            </div>
          )
          
        }

        }
      )}
    </div>
   
  );
}
