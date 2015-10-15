app.controller('AlbumCtrl', function ($scope, PlayerFactory, AlbumFactory, $stateParams) {

	console.log("id param", $stateParams.id);
	AlbumFactory.fetchById($stateParams.id)
		.then(function(album){
			console.log("fetched album:", album)
			$scope.album = album;
		})
		.catch(function(error){
			console.error(error);
		})
	
	$scope.isCurrent = function (song) {
		var current = PlayerFactory.getCurrentSong();
		return current && current._id == song._id;
	};
	$scope.start = function (song) {
		PlayerFactory.start(song, $scope.album.songs);
	};
});