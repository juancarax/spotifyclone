import React from "react";
import "./SongRow.scss";
import { useStateProviderValue } from "../utils/StateProvider";

function SongRow({ track }) {
  const [{}, dispatch] = useStateProviderValue();

  function setCurrentSong() {
    dispatch({
      type: "SET_CURRENT_SONG",
      current_song: track,
    });
  }
  return (
    <div className="songrow" onClick={setCurrentSong}>
      <img className="songrow__album" src={track.album.images[0].url} alt="" />
      <div className="songrow__info">
        <h1>{track.name}</h1>
        <p>
          {track?.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
