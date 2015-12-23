/**
 * Created by algus on 14/12/2015.
 */
(function () {
    'use strict';

    angular.module('rw', ['ngMessages', 'toastr', 'ui.grid', 'ui.router', 'oc.lazyLoad']).config(config);

    /* @ngInject */
    function config($stateProvider, $urlRouterProvider) {
        var home = {
            url: '/',
            templateUrl: 'app/views/home/home.html'
        };
        var pessoa = {
            abstract: true,
            url: '/pessoa',
            template: '<ui-view/>'
        };
        var cadastroPessoa = {
            url: '/cadastro',
            templateUrl: 'app/views/pessoa/cadastro-pessoa.html',
            resolve: resolveDeps('app/views/pessoa/cadastro-pessoa-controller.js')
        };
        var pesquisaPessoa = {
            url: '/pesquisa',
            templateUrl: 'app/views/pessoa/pesquisa-pessoa.html',
            resolve: resolveDeps('app/views/pessoa/pesquisa-pessoa-controller.js')
        };

        $stateProvider
            .state('home', home)
            .state('pessoa', pessoa)
            .state('pessoa.cadastro', cadastroPessoa)
            .state('pessoa.pesquisa', pesquisaPessoa);

        $urlRouterProvider.otherwise('/');

        function resolveDeps(file) {
            return {
                dependencies: /* @ngInject */ function ($ocLazyLoad) {
                    return $ocLazyLoad.load(file);
                }
            };
        }
    }
})();
