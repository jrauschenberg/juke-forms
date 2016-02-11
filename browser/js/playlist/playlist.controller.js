'use strict';

juke.controller('PlaylistCtrl', function ($scope, $state, PlaylistFactory) {

  $scope.submit = function() {
    var resultID;
    PlaylistFactory.create($scope.playlist).then(function(result) {
      console.log(result._id);
      resultID = result._id;
    });
    $scope.newPlaylist.$setPristine();
    $state.go("singlePlaylist", {playlistID: resultID});
  };

});
