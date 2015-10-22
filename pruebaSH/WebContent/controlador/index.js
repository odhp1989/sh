var sh = angular.module("sh",['ui.bootstrap']);

	sh.controller("index", function($scope){
		
		$scope.tabs = [];
		
		var cargarAtributos = function(){
			$scope.tabs.push({
				titulo	: 'Cursos', 
				url		: 'gestionarcurso.html'
			});
			$scope.tabs.push({
				titulo	: 'Secciones', 
				url		: 'gestionarseccion.html',
				activo	: true
			});
		};
		
		cargarAtributos();
		
	});
	
	sh.config(function($controllerProvider, $httpProvider) {
		sh.registerCtrl = $controllerProvider.register;
		//$httpProvider.interceptors.push('templateInterceptor');
	});