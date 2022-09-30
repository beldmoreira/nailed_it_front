import React from "react";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./contexts/AuthContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/login" element={<Login />} />
        <Route path = "/signup" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
