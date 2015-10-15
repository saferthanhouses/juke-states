app.controller('ArtistCtrl', function ($scope, PlayerFactory, ArtistFactory, $stateParams) {
	
	
	ArtistFactory.fetchById($stateParams.id)
		.then(function (artist) {
			$scope.artist = artist;
		})
		.catch(function(err) {
			console.error(err);
		})

	$scope.isCurrent = function (song) {
		var current = PlayerFactory.getCurrentSong();
		return current && current._id == song._id;
	};
	$scope.start = function (song) {
		PlayerFactory.start(song, $scope.artist.songs);
	};

});