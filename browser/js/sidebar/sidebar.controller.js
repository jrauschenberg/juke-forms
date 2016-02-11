'use strict';

juke.controller('SidebarCtrl', function ($scope, $rootScope, $state, PlaylistFactory) {

  $scope.viewAlbums = function () {
    $state.go('albums');
  };

  $scope.viewAllArtists = function () {
    $state.go('artists');
  };

  PlaylistFactory.getAll()
  .then(function(result) {
    $scope.playlists = result;
  });

});
