import React, { Component }  from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

import SignIn from "./screens/SignIn"
import SignOut from "./screens/SignOut";
import SignUp from "./screens/SignUp";
import Home from  "./screens/Home";
import Userlistitem from './components/userlistitem';

import { paths } from './constants/paths';

function App() {
  return (
    <ChakraProvider>
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path={paths.ROOT} element={<Home />} index />
        <Route path={paths.HOME} element={<Home />} index />
        <Route path={paths.SIGN_IN} element={<SignIn />} />
        <Route path={paths.SIGN_OUT} element={<SignOut />} />
        <Route path={paths.SIGN_UP} element={<SignUp />} />
        <Route path={paths.USER_DETAIL} element={<Userlistitem />} />
        <Route path={paths.USER_DETAIL_INDEX} element={<Userlistitem/>} />
      </Routes>
    </BrowserRouter>
    </div>
    </ChakraProvider>
  );
}

export default App;
