angular.module("myApp.controllers", []).controller("songCtrl", function($scope, Song) {
    $scope.songs = Song.query();

    $scope.addSong = function(artist, title) {
        var song = new Song();
        song.artist = artist;
        song.title = title;
        song.score = 0;
        song.$save(function(response) {
            $scope.songs.push(response);
        });

        $scope.newSong.artist = "";
        $scope.newSong.title = "";
    };

    $scope.deleteSong = function(song) {
        var idx = $scope.songs.indexOf(song);
        if (idx >= 0) {
            $scope.songs.splice(idx, 1);
        }

        song.$remove();
    };

    $scope.updateSong = function(song) {
        song.$update();
    };

    $scope.isEmpty = function(str) {
        return _.isBlank(str);
    };
});