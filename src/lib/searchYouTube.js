var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: Object.assign({max: 5, key: YOUTUBE_API_KEY, videoEmbeddable: true, type: 'video', part: 'snippet'}, options),
    success: (data) => callback(data.items),
    error: (err)=> console.log(err)
  });
};

window.searchYouTube = searchYouTube;
