app.config(function($stateProvider) {
	$stateProvider.state('albums', {
		url: '/albums',
		templateUrl: '/views/albums.html',
		controller: 'AlbumsCtrl'
	})
	.state('artists', {
		url: '/artists',
		templateUrl: '/views/artists.html',
		controller: 'ArtistsCtrl'
	})
	.state('album', {
		url: '/album/:id',
		templateUrl: '/views/album.html',
		controller: 'AlbumCtrl'
	})
	.state('artist', {
		url: '/artist/:id',
		templateUrl: '/views/artist.html',
		controller: 'ArtistCtrl'
	})
	.state('artist.songs', {
		url: '/songs',
		templateUrl: '/views/artistSongs.html',
		controller: 'ArtistCtrl'
	})
	.state('artist.albums', {
	url: '/albums',
	templateUrl: '/views/artistAlbums.html',
	controller: 'ArtistCtrl'
	})
});