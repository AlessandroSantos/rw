angular.module('rw').controller('IndexController5', IndexController5);

/* @ngInject */
function IndexController5($scope, $timeout, AlertService) {

    $scope.listaDePessoas = [];
    $scope.entidade = {};
    $scope.gridOptions = {};
    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.editar = editar;
    $scope.excluir = excluir;
    $scope.gridItemClick = gridItemClick;
    $scope.getRowStyle = getRowStyle;

    iniciar();

    function iniciar() {
        $scope.gridOptions.data = 'listaDePessoas';
        $scope.gridOptions.rowTemplate = 'app/template/rowtemplate.html';
        $scope.gridOptions.columnDefs = [
            {displayName: 'Nome', field: 'nome'},
            {displayName: 'Data de nascimento', field: 'data'},
            {displayName: 'Sexo', field: 'sexo'},
            {displayName: 'Email', field: 'email', cellTemplate: 'app/template/celltemplate.html'},
            {displayName: 'Opções', field: 'opcoes', cellTemplate: 'app/template/celltemplatebuttonexcluir.html'}
        ];

    }

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

    function gridItemClick(entity, col, row) {
        AlertService.showInfo('Entidade: ' + entity.nome);
    }

    function getRowStyle(linhaSelecionada) {
        var myStyle = {};
        myStyle.backgroundColor = linhaSelecionada.cor;
        return myStyle;
    }
}