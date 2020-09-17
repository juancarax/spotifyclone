import React from "react";
import "./Footer.scss";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import SkipPreviousOutlinedIcon from "@material-ui/icons/SkipPreviousOutlined";
import SkipNextOutlinedIcon from "@material-ui/icons/SkipNextOutlined";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Slider } from "@material-ui/core";
import { PlaylistPlay, VolumeDown } from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";
import { useStateProviderValue } from "../utils/StateProvider";
function Footer() {
  const [
    { current_song, current_playlist },
    dispatch,
  ] = useStateProviderValue();

  const currentSongIndex = current_playlist?.tracks.items.findIndex(
    (item) => item?.track?.id === current_song?.id
  );

  const changeSong = (next) => {
    let changeArrayIndex = currentSongIndex;
    if (next) {
      changeArrayIndex += 1;
    } else {
      changeArrayIndex -= 1;
    }
    const nextSong = current_playlist?.tracks.items[changeArrayIndex];

    dispatch({
      type: "SET_CURRENT_SONG",
      current_song: nextSong?.track,
    });
  };
  return (
    <div className="footer">
      <div className="footer__left">
        .
        <img
          src={
            current_song?.album?.images[0]?.url ||
            "https://www.scdn.co/i/_global/twitter_card-default.jpg"
          }
          alt="Album"
          className="footer__albumlogo"
        />
        <div className="footer__songinfo">
          <h4>{current_song?.name} </h4>
          <p>{current_song?.album.name}</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousOutlinedIcon
          className="footer__icon"
          onClick={() => changeSong(false)}
        />
        <PlayCircleOutlineOutlinedIcon
          fontSize="large"
          className="footer__icon"
        />
        <SkipNextOutlinedIcon
          className="footer__icon"
          onClick={() => changeSong(true)}
        />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
