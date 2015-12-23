(function () {
    'use strict';

    angular
        .module('rw')
        .directive('rwCrud', rwCrud);


    /* @ngInject */
    function rwCrud() {
        var directive = {
            link: link,
            templateUrl: 'arquitetura/rw-crud/rw-crud.html',
            restrict: 'E',
            transclude: true,
            required: '^form',
            scope: {
                service: '=',
                titulo: '@'
            }
        };
        return directive;

        function link(scope, element, attrs, formController) {
            scope.onSalvar = onSalvar;
            scope.onExcluir = onExcluir;
            scope.onLimpar = onLimpar;
            scope.form = formController;


            function onSalvar() {
                scope.service.salvar();
            }

            function onLimpar() {
                scope.service.limpar();
            }

            function onExcluir() {
                scope.service.excluir();
            }
        }
    }


})();

