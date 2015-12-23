(function () {
    'use strict';

    angular
        .module('rw')
        .directive('olaMundo', olaMundo);


    /* @ngInject */
    function olaMundo() {
        var directive = {
            link: link,
            restrict: 'E',
            template: '<div><b>Olá mundo. Minha primeira diretiva</b></div>'
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }
})();

