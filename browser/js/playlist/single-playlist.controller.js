'use strict';

juke.controller('SinglePlaylistCtrl', function ($scope, SongFactory, $state, theID, PlayerFactory) {

  $scope.playlist = theID;

  SongFactory.getAllSongs()
  .then(function(result) {
    $scope.songs = result;
  });

  $scope.addCurrentSong = function() {
    console.log('addSong runs', $scope.selection);
    $scope.songs.forEach(function(song){
      if(song.name == $scope.selection) $scope.selection = song;
    });
    SongFactory.addSong($scope.selection, $scope.playlist._id)
    .then(function(result) {
      $scope.playlist.songs.push(result);
    });
    $scope.selection = "";
  };

  $scope.toggle = function (song) {
    SongFactory.convert(song);
    console.log('song', song);
    if (song !== PlayerFactory.getCurrentSong()) {
      PlayerFactory.start(song, $scope.playlist.songs);
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
