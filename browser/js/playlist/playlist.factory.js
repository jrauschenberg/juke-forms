'use strict';

juke.factory('PlaylistFactory', function ($rootScope, $http) {

  var playlist = {};

  playlist.create = function(playlistData) {
    return $http.post('api/playlists/', playlistData)
    .then(function(result) {
      return result.data;
    });
  };

  return playlist;

});
