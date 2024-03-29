import React from "react";
import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom";
import {UserProvider} from "./contexts/UserContext";
import { TokenProvider } from "./contexts/TokenContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NailPolishes from "./pages/NailPolishes";
import Create from "./pages/Create";
import Shuffle from "./pages/Shuffle";

export default function App() {
  return (
    <UserProvider>
      <TokenProvider>
        <BrowserRouter>
          <Routes>
            <Route path = "/login" element={<Login />} />
            <Route path = "/signup" element={<SignUp/>}/>
            <Route path ="/nailpolishes" element ={<NailPolishes/>}/>
            <Route path = "/create" element= {<Create/>}/>
            <Route path="/random" element ={<Shuffle/>}/>
            <Route index path="*" element={<Navigate to="/nailpolishes" />} />
          </Routes>
        </BrowserRouter>
      </TokenProvider>
    </UserProvider>
  );
}
