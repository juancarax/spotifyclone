export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  current_playlist: null,
  current_song: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_CURRENT_PLAYLIST":
      return {
        ...state,
        current_playlist: action.current_playlist,
      };
    case "SET_CURRENT_SONG":
      return {
        ...state,
        current_song: action.current_song,
      };
    default:
      return state;
  }
};
export default reducer;
