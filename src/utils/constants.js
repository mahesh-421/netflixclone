export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const USER_AVATAR =
  "https://www.shutterstock.com/image-vector/profile-icon-isolated-white-on-600nw-211470211.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_MOVIES,
  },
};

// const getMovieVideos = async () => {
//   const data = await fetch(
//     "https://api.themoviedb.org/3/movie/" +
//       movieID +
//       "/videos?language=en-US",
//     API_OPTIONS
//   );

export const nowPlayingMovies_API =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

// const getNowPlayingMovies = async () => {
//   const data = await fetch(nowPlayingMovies_API, API_OPTIONS);
//   const json = await data?.json();
//   dispatch(addNOwPlayingMovies(json?.results));
//   // console.log("movie list fetched");
// };

export const image_API = "https://image.tmdb.org/t/p/original";

export const SupportedLang = [
  { identifier: "English", name: "English" },
  { identifier: "Hindi", name: "Hindi" },
  { identifier: "Spanish", name: "Spanish" },
];
