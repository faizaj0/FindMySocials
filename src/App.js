import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

import Signin from "./screens/signin"
import SignOut from "./screens/signout";
import SignUp from "./screens/signup";
import Home from  "./screens/home";
import UserDetail from './screens/userdetail';
import Userlistitem from './components/userlistitem';


function App() {
  return (
    <ChakraProvider>
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}index />
        <Route path="home" element={<Home />} index />
        <Route path="signin" element={<Signin />} />
        <Route path="signout" element={<SignOut />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="userdetail" element={<UserDetail />} />
        <Route path="userlistitem" element={<Userlistitem />} />
        <Route path='userlistitem/:id' element={<Userlistitem/>} />
       
      </Routes>
    </BrowserRouter>
    </div>
    </ChakraProvider>
  );
}

export default App;
