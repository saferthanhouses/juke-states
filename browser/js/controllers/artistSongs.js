app.controller('ArtistSongCtrl', function ($scope, $stateParams) {
	$scope.artist = $stateParams.artist;
	$scope.color = "blue"
	console.log($scope.artist)
})