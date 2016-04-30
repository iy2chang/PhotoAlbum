var thisApp = angular.module("thisApp", []);	
	
	thisApp.controller('AlbumListController', function($scope){
		$scope.albums = [ {name:'Taiwan', title:'Home Town', date:'2011', desc:'I am from here!'}, 
		{name:'Hawaii', title:'My Favorite Place to live', date:'2012', desc:'Paradise!'}, 
		{name:'California', title:'My Current Location', date:'2013', desc:'my work place!'} 
		];

		$scope.addAlbum = function(new_album){
			$scope.albums.push(new_album);
			$scope.adding_album ={};
		};
	});

