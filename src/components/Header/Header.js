import React from "react";
import "./Header.scss";
import { useStateProviderValue } from "../utils/StateProvider";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
function Header() {
  const [{ user }, dispatch] = useStateProviderValue();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search for Artists, Songs" type="text" />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
