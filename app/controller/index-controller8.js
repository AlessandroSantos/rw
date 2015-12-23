(function () {
    'use strict';

    angular
        .module('rw')
        .controller('IndexController8', IndexController8);



    /* @ngInject */
    function IndexController8(AlertService, RwService) {
        var vm = this;
        vm.rwService = new RwService('usuarioController');
    }

})();

