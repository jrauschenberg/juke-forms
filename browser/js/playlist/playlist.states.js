'use strict';

juke.config(function ($stateProvider) {

  $stateProvider.state('newPlaylist', {
    url: '/playlists',
    templateUrl: '/js/playlist/templates/playlist.html',
    controller: 'PlaylistCtrl',
  })
  .state('singlePlaylist', {
    url: '/playlist/:playlistID',
    templateUrl: '/js/playlist/templates/single-playlist.html',
    controller: 'SinglePlaylistCtrl',
    resolve: {
      theID: function (PlaylistFactory, $stateParams) {
        return PlaylistFactory.getOne($stateParams.playlistID);
      }
    }
  });


});
