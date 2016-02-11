'use strict';

juke.factory('SongFactory', function ($http) {

  return {
    getAllSongs: function() {
      return $http.get('/api/songs')
      .then(function(result) {
        return result.data;
      });
    },
    addSong: function(song, playlistID) {
      return $http.post('api/' + playlistID + '/songs', {song: song})
      .then(function(result) {
        return result.data;
      });
    },
    convert: function (song) {
      song.audioUrl = '/api/songs/' + song._id + '.audio';
      return song;
    }
  };

});
