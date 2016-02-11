'use strict';

juke.controller('PlaylistCtrl', function ($scope, $state, PlaylistFactory) {

  $scope.submit = function() {
    var resultID;
    PlaylistFactory.create($scope.playlist).then(function(result) {
      resultID = result._id;
      $state.go("singlePlaylist", {playlistID: resultID});
    });
    $scope.newPlaylist.$setPristine();

  };

});
