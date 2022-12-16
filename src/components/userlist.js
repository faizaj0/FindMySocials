import { useNavigate } from "react-router-dom";

import { Grid } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'

import {data} from "../constants/userdummydata"

export default function Userlist() {
    const navigate = useNavigate();
    const placeholder = "https://via.placeholder.com/250x250";

    
    return (
   
    <div className="userGrid">
      <Grid templateColumns="repeat(3, 1fr)" gap={1}>
      {data.map((item, index) => (
        
         <div key={index} className="userlistitem">
           
            <Image src={item.generalinfo.image.uri} onClick={() => {navigate('/userlistitem/'+item.generalinfo.first_name)}}/>
         </div>
       
      ))}
   
      </Grid>
    </div>
  );
}
