import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import { getTokenFromUrl } from "./components/utils/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player/Player";
import { useStateProviderValue } from "./components/utils/StateProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const spotify = new SpotifyWebApi();
  const [{ token }, dispatch] = useStateProviderValue();

  useEffect(() => {
    async function fetchData() {
      const hash = getTokenFromUrl(); /* Accesing the spotify API, and getting the user using spotify JS */
      window.location.hash = "";

      const _token = hash.access_token;
      if (_token) {
        console.log("Im being executed!");

        spotify.setAccessToken(_token);
        const user = await spotify.getMe();
        await dispatch({
          type: "SET_TOKEN",
          token: _token,
        });
        await dispatch({
          type: "SET_USER",
          user: user,
        });

        const playlists = await spotify.getUserPlaylists();
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });

        const playlist = await spotify.getPlaylist(playlists.items[0].id);
        await dispatch({
          type: "SET_CURRENT_PLAYLIST",
          current_playlist: playlist,
        });
      }
    }
    fetchData();
  }, [spotify, dispatch]);
  console.log(token);
  return (
    <div className="app">
      <Router>
        <Switch>
          {token ? (
            <Route exact path="/">
              <Player spotify={spotify} />
            </Route>
          ) : (
            <>
              <Login />
            </>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
