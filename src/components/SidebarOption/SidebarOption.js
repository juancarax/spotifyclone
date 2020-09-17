import React from "react";
import "./SidebarOption.scss";
import { useStateProviderValue } from "../utils/StateProvider";
function SidebarOption({ title, Icon, id, spotify }) {
  const [dispatch] = useStateProviderValue();
  async function goToPlayList() {
    const playlist = await spotify.getPlaylist(id);
    await dispatch({
      type: "SET_CURRENT_PLAYLIST",
      current_playlist: playlist,
    });
  }
  return (
    <div className="sidebar__option" onClick={goToPlayList}>
      {Icon && <Icon className="sidebar__option__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SidebarOption;
