angular.module('rw').controller('IndexController5', IndexController4);

IndexController4.$inject = ['$scope', '$timeout', 'AlertService'];

function IndexController4($scope, $timeout, AlertService) {

    $scope.listaDePessoas = [];
    $scope.entidade = {};
    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.editar = editar;
    $scope.excluir = excluir;

    function salvar() {
        if ($scope.myForm.$invalid) {
            setTouched();
            AlertService.showError('Valide os campos.');
            return;
        }
        $scope.listaDePessoas.push($scope.entidade);
        AlertService.showSuccess('Dados salvos com sucesso.');
        limpar();
    }

    function setTouched() {
        angular.forEach($scope.myForm.$error, function (error) {
            angular.forEach(error, function (field) {
                field.$setTouched();
            });
        });
    }

    function setUntouched() {
        angular.forEach($scope.myForm.$error, function (error) {
            angular.forEach(error, function (field) {
                field.$setUntouched();
            });
        });
    }

    function limpar() {
        $scope.entidade = {};
        $timeout(function () {
            setUntouched();
        }, 100);

    }

    function excluir(item) {
        $scope.listaDePessoas.splice($scope.listaDePessoas.indexOf(item), 1);
    }

    function editar(item) {
        $scope.entidade = item;
    }
}