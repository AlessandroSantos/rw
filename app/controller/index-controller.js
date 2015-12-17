/**
 * Created by algus on 14/12/2015.
 */

angular.module('rw')
    .controller('IndexController', IndexController);

function IndexController($scope) {
    $scope.nome = 'Alessandro';
    $scope.onClickTeste = onClickTeste;

    function onClickTeste(){
        $scope.nome = 'Alteração via click';
    }
}