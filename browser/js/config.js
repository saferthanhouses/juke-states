app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.when('/', '/albums');

	$stateProvider.state('albums', {
		url: '/albums',
		templateUrl: '/views/albums.html',
		controller: 'AlbumsCtrl',
		resolve: {
			albums: function (AlbumFactory) {
				return AlbumFactory.fetchAll();
			}
		}
	})
  
	$stateProvider.state('artists', {
		url: '/artists',
		templateUrl: '/views/artists.html',
		controller: 'ArtistsCtrl',
		resolve: {
			artists: function (ArtistFactory) {
				return ArtistFactory.fetchAll();
			}
		}
	})

	$stateProvider.state('album', {
		url: '/album/:id',
		templateUrl: '/views/album.html',
		controller: 'AlbumCtrl',
		resolve: {
			album : function(AlbumFactory, $stateParams){
				return AlbumFactory.fetchById($stateParams.id);
			}
		}

	})

	$stateProvider.state('artist', {
		url: '/artist/:id',
		templateUrl: '/views/artist.html',
		controller: 'ArtistCtrl',
		resolve: {
			artist : function(ArtistFactory, $stateParams){
				return ArtistFactory.fetchById($stateParams.id);
			}
		}
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