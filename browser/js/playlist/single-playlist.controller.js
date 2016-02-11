'use strict';

juke.controller('SinglePlaylistCtrl', function ($scope, SongFactory, $state, theID, PlayerFactory) {

  $scope.playlist = theID;

  SongFactory.getAllSongs()
  .then(function(result) {
    $scope.songs = result;
  });

  $scope.addSong = function(song) {
    SongFactory.addSong(song, $scope.playlist._id)
    .then(function(result) {
      $scope.playlist.songs.push(result);
    });
  };

  $scope.toggle = function (song) {
    if (song !== PlayerFactory.getCurrentSong()) {
      PlayerFactory.start(song, $scope.album.songs);
    } else if ( PlayerFactory.isPlaying() ) {
      PlayerFactory.pause();
    } else {
      PlayerFactory.resume();
    }
  };

  $scope.getCurrentSong = function () {
    return PlayerFactory.getCurrentSong();
  };

  $scope.isPlaying = function (song) {
    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  };

});
