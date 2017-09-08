var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,
    success: callback,
    error: (err)=> console.log(err)
  });
};

window.searchYouTube = searchYouTube;


/*
options = {
q:'searchterm',
max:5,
key: youtubekey,
embeddableVideos:true,
part:'snippet'
}
*/
