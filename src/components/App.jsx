import { useState } from "react";

import { PopUpsLinks } from "./PopUpsLinks/PopUpsLinks";
import { LogOut } from "./LogOut/LogOut";
import { Setting } from "./Setting/Setting";

export const App = () => {
  const [setting, setSetting] = useState(false);
  const [logOut, setLogOut] = useState(false);

  const changeSetting = () => {
    setting ? setSetting(false) : setSetting(true)
  }

  const changeLogOut = () => {
    logOut ? setLogOut(false) : setLogOut(true)
  }

  const handleBackdropClickSetting = (evt) => {
    if (evt.target === evt.currentTarget) {
      setSetting(false)
    }
  }

  const closeSetting = () => {
    setSetting(false)
  }

  const handleBackdropClickLogOut = (evt) => {
    if (evt.target === evt.currentTarget) {
      setLogOut(false)
    }
  }

  const closeLogOut = () => {
      setLogOut(false)
  }

  return (
    <div>
      <PopUpsLinks showLogOut={changeLogOut} showSetting={changeSetting} />
      {setting && <Setting backdropClick={handleBackdropClickSetting} close={closeSetting} />}
      {logOut && <LogOut backdropClick={handleBackdropClickLogOut} close={closeLogOut} />}
    </div>
  );
};
