import React from "react";
import "./Sidebar.scss";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateProviderValue } from "../utils/StateProvider";
import SidebarOption from "../SidebarOption/SidebarOption";
function Sidebar({ spotify }) {
  const [{ playlists }, dispatch] = useStateProviderValue();
  console.log(playlists);
  return (
    <div className="sidebar">
      <img
        alt="Spotify Logo"
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption
          title={playlist.name}
          id={playlist.id}
          spotify={spotify}
        />
      ))}
    </div>
  );
}

export default Sidebar;
