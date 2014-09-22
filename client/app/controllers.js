angular.module("myApp.controllers", []).controller("songCtrl", function($scope, songService) {
    $scope.songs = songService.get();
                    
    $scope.newSong = { };

    $scope.addSong = function(artist, title) {
        $scope.songs.push({
            artist: artist,
            title: title,
            score: 0
        });
        $scope.newSong.artist = "";
        $scope.newSong.title = "";
    };

    $scope.deleteSong = function(song) {
        var idx = $scope.songs.indexOf(song);
        if (idx >= 0) {
            $scope.songs.splice(idx, 1);
        }
    };

    $scope.isEmpty = function(str) {
        return _.isBlank(str);
    };

    $scope.$watch('songs', function(newValue, oldValue) {
        if (newValue !== oldValue) {
            songService.put($scope.songs);
        }
    }, true);
});