(function () {
    'use strict';

    angular
        .module('rw')
        .controller('CadastroPessoaController', CadastroPessoaController);

    /* @ngInject */
    function CadastroPessoaController($scope) {
        var vm = this;
        vm.title = 'CadastroPessoaController';

        activate();

        ////////////////

        function activate() {
            
        }
    }

})();

