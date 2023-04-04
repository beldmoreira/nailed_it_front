import React from "react";
import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom";
import { useContext } from "react";
import {UserProvider} from "./contexts/UserContext";
import { TokenContext } from "./contexts/TokenContext";
import { TokenProvider } from "./contexts/TokenContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NailPolishes from "./pages/Home/NailPolishes";
import Create from "./pages/Home/Create";
import Shuffle from "./pages/Home/Shuffle";
import Home from "./pages/Home";

export default function App() {
  return (
    <UserProvider>
      <TokenProvider>
        <BrowserRouter>
          <Routes>
            <Route path = "/login" element={<Login />} />
            <Route path = "/signup" element={<SignUp/>}/>
            <Route path="/"
                element={
                  <ProtectedRouteGuard>
                    <Home/>
                  </ProtectedRouteGuard>
                }
                >
              <Route path ="nailpolishes" element ={<NailPolishes/>}/>
              <Route path = "create" element= {<Create/>}/>
              <Route path="random" element ={<Shuffle/>}/>
              <Route index path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TokenProvider>
    </UserProvider>
  );
}

function ProtectedRouteGuard({ children }) {
  const { token } = useContext(TokenContext);

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}