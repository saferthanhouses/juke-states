app.config(function($stateProvider) {
	$stateProvider.state('albums', {
		url: '/albums',
		templateUrl: '/views/albums.html',
		controller: 'AlbumsCtrl'
	})
	$stateProvider.state('artists', {
		url: '/artists',
		templateUrl: '/views/artists.html',
		controller: 'ArtistsCtrl'
	})
	$stateProvider.state('album', {
		url: '/album/:id',
		templateUrl: '/views/album.html',
		controller: 'AlbumCtrl'
	})
	$stateProvider.state('artist', {
		url: '/artist/:id',
		templateUrl: '/views/artist.html',
		controller: 'ArtistCtrl'
	})
});