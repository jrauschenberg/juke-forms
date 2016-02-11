'use strict';

juke.config(function ($stateProvider) {

  $stateProvider.state('newPlaylist', {
    url: '/playlist',
    templateUrl: '/js/playlist/templates/playlist.html',
    controller: 'PlaylistCtrl'
  });


});
