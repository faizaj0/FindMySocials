import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

import SignIn from "./screens/signin"
import SignOut from "./screens/signout";
import SignUp from "./screens/signup";
import Home from  "./screens/home"
import UserDetail from './screens/userdetail';


function App() {
  return (
    <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}index />
        <Route path="home" element={<Home />} index />
        <Route path="signin" element={<SignIn />} />
        <Route path="signout" element={<SignOut />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="userdetail" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
