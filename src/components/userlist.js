import { useNavigate } from "react-router-dom";

import { Grid } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'

export default function Userlist() {
    const navigate = useNavigate();
    const placeholder = "https://via.placeholder.com/250x250";
    
    return (
    <div className="userGrid">
      <Grid templateColumns="repeat(3, 1fr)" gap={1}>
   
        <Image src={placeholder} onClick={() => {navigate('/userlistitem')}}/>
        <Image src={placeholder} onClick={() => {navigate('/userlistitem')}}/>
        <Image src={placeholder} onClick={() => {navigate('/userlistitem')}}/>
        <Image src={placeholder} onClick={() => {navigate('/userlistitem')}}/>
        <Image src={placeholder} onClick={() => {navigate('/userlistitem')}}/>
        <Image src={placeholder} onClick={() => {navigate('/userlistitem')}}/>
        <Image src={placeholder} onClick={() => {navigate('/userlistitem')}}/>
        <Image src={placeholder} onClick={() => {navigate('/userlistitem')}}/>
        <Image src={placeholder} onClick={() => {navigate('/userlistitem')}}/>
        <Image src={placeholder} onClick={() => {navigate('/userlistitem')}}/>
        <Image src={placeholder} onClick={() => {navigate('/userlistitem')}}/>
        <Image src={placeholder} onClick={() => {navigate('/userlistitem')}}/>
        <Image src={placeholder} onClick={() => {navigate('/userlistitem')}}/>
        <Image src={placeholder} onClick={() => {navigate('/userlistitem')}}/> 
        <Image src={placeholder} onClick={() => {navigate('/userlistitem')}}/>
        <Image src={placeholder} onClick={() => {navigate('/userlistitem')}}/>
        
 
      </Grid>
    </div>
  );
}
