const key = '1baccd9e3a7ea247683761d304404184'

const requests={
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    Trending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
    requestGetNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`,
    Popular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
  watchProvider:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  


}

export default requests