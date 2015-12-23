(function () {
    'use strict';

    angular
        .module('rw')
        .directive('keyEvent', keyEvent);


    /* @ngInject */
    function keyEvent() {
        var directive = {
            link: link,
            restrict: 'A',
        };
        return directive;

        function link(scope, element, attrs) {
            element.bind('keypress', function(event){
                console.log(event);
            });
        }
    }

})();

