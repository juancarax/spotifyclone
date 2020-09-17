import React from "react";
import "./Body.scss";
import Header from "../Header/Header";
import { useStateProviderValue } from "../utils/StateProvider";
import {
  Favorite,
  MoreHorizOutlined,
  PlayCircleFilledOutlined,
} from "@material-ui/icons";
import SongRow from "../SongRow/SongRow";

function Body({ spotify }) {
  const [{ current_playlist }] = useStateProviderValue();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img
          src={
            current_playlist?.images[0]?.url ||
            "https://i.pinimg.com/originals/e5/06/16/e50616cd01a3b8cd37abf50b6bb38d5f.jpg"
          }
          alt="Discover weekly"
        />
        <div className="body__infotext">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{current_playlist?.description} </p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledOutlined className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHorizOutlined />
        </div>
        {current_playlist?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
