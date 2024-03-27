import React from "react";
import auth0 from "auth0-js";
import Ath0Config from "../Auth0Config";
import { urlFrontend } from "../config";
import { useDispatch, useSelector } from "react-redux";
import { saveDataUser } from "../redux/userSlice";

const webAuth = new auth0.WebAuth(Ath0Config);

const Home = () => {


  const handleSignOut = () => {
    webAuth.logout({
      returnTo: `${urlFrontend}Login`, // URL a la que redirigir después de cerrar sesión
      clientID: Ath0Config.clientID,
    });
  };
  
  
  const userMetadata = useSelector((state) => state.userLoginInfo.MetadataUser); // Accede a MetadataUser
  console.log(userMetadata)
  return (
    <>
      <h1>Juan</h1>

      <button onClick={handleSignOut}>Cerrar Sesion</button>
    </>
  );
};

export default Home;
