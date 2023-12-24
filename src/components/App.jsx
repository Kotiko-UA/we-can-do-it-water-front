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

  return (
    <div>
      <PopUpsLinks showLogOut={changeLogOut} showSetting={changeSetting} />
    {setting && <Setting/>}
    {logOut && <LogOut />}
    </div>
  );
};
