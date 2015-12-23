(function () {
    'use strict';

    angular
        .module('rw')
        .controller('PesquisaPessoaController', PesquisaPessoaController);

    /* @ngInject */
    function PesquisaPessoaController($scope) {
        var vm = this;
        vm.title = 'PesquisaPessoaController';

        activate();


        function activate() {

        }
    }

})();

