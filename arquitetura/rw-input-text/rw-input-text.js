(function () {
    'use strict';

    /**
     *  @ngdoc directive
     *  @name rwDirectives.directive:rwInputText
     *  @element rw-input-text
     *  @scope
     *  @restrict E
     *
     *  @description
     *  Componente de inputText padrão da arquitetura Rw.
     *  Este input já possui a validação do campo com suas respectivas mensagens.
     *
     *  @param {string} label Texto a ser exibido na parte superior do input
     *  @param {string} placeholder Texto a ser exibido dentro do input
     *  @param {string} restrict Informa o tipo da diretiva (atributo, elemento, classe ...)
     *  @param {string} ngModel Objeto do controller que será passado para a diretiva
     *  @param {string} ngRequired Informa se o input será obrigatório ou não
     *  @param {string} ngMinlenght Tamanho mínimo de caracteres do input
     *  @param {string} ngMaxlenght Tamanho máximo de caracteres do input
     *
     **/

    angular
        .module('rw')
        .directive('rwInputText', rwInputText);

    /* @ngInject */
    function rwInputText() {
        var directive = {
            require: '^form',
            restrict: 'E',
            templateUrl: 'arquitetura/rw-input-text/rw-input-text.html',
            scope: {
                label: '@',
                placeholder: '@',
                ngModel: '=',
                ngRequired: '=?',
                ngMinlength: '@',
                ngMaxlength: '@'
            },

            link: link
        };
        return directive;

        function link(scope, element, attrs, formController) {
            scope.inputName = scope.$id + 'inputText';
            scope.form = formController;

            if (!scope.ngRequired) {
                scope.ngRequired = false;
            }
        }
    }
})();

