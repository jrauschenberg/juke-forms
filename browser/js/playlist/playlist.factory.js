'use strict';

juke.factory('PlaylistFactory', function ($rootScope, $http) {

  var playlist = {};

  var cachedPlaylists = [];

  playlist.create = function(playlistData) {
    return $http.post('api/playlists/', playlistData)
    .then(function(result) {
     var data = result.data
     cachedPlaylists.push(data);
      return data;
    });
  };

  playlist.getAll = function() {
    return $http.get('api/playlists/')
    .then(function(result) {
      angular.copy(result.data, cachedPlaylists);
      return cachedPlaylists;
    });
  };

  playlist.getOne = function(id) {
    return $http.get('api/playlists/' + id)
    .then(function(result) {
      return result.data;
    });
  };

  return playlist;

});
