app.controller('ArtistsCtrl', function ($scope, $rootScope, ArtistFactory) {
	ArtistFactory.fetchAll()
	.then(function (artists) {
		$scope.artists = artists;
	});

});