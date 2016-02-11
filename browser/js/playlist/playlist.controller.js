'use strict';

juke.controller('PlaylistCtrl', function ($scope, PlaylistFactory) {

  $scope.search = "";
  $scope.submit = function(data) {
    console.log("The new playlist: " + data);
    PlaylistFactory.create(data).then(function(result) {
      console.log(result);
    });
  };

});
