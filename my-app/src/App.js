import "./App.css";
import Navbar from "./components/Navbar/Navbar";
//import ProfileContainer from "./components/Profile/ProfileContainer";
import {Route, Routes } from "react-router-dom";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/login/Login";
import { Suspense, lazy } from 'react';
import Preloader from "./components/common/Preloader/Preloader";

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));



function App() {

 
  return (
  
      <div className="App">
        <HeaderContainer />
        <Navbar />
        <div className="app_content">
          <Routes>
            <Route path="/dialogs" element={<Suspense fallback={<Preloader />}>
            <DialogsContainer/></Suspense>} />
            <Route path="/profile/:userId?" element={<Suspense fallback={<Preloader />}><ProfileContainer/></Suspense>} />
            <Route path="/users" element={<UsersContainer/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </div>
      </div>

  );
}

export default App;
