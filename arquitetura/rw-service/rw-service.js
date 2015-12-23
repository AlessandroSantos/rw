(function () {
    'use strict';

    angular.module('rw').factory('RwService', RwService);

    /* @ngInject */
    function RwService(AlertService) {
        return function (controller) {
            var self = this;

            self.entidade = {};
            self.listaEntidade = [];
            self.salvar = salvar;
            self.excluir = excluir;
            self.limpar = limpar;
            self.pesquisar = pesquisar;
            self.onAntesSalvar = onAntesSalvar;
            self.onDepoisSalvar = onDepoisSalvar;
            self.parametroPesquisa = {};

            function salvar() {
                AlertService.showSuccess('Excluir: '+ controller +'/ '  + self.entidade);
            }

            function excluir() {
                AlertService.showWarning('Excluir: '+ controller +'/ '  + self.entidade);
            }

            function pesquisar() {
                AlertService.showInfo('Pesquisar: ' + self.entidade);
            }

            function limpar() {
                AlertService.showError('Excluir: '+ controller +'/ '  + self.entidade);
                self.entidade = {};
            }

            function onAntesSalvar() {
                AlertService.showInfo('Antes salvar: ' + self.entidade);
                return true;
            }

            function onDepoisSalvar() {
                AlertService.showInfo('Depois salvar');
                return true;
            }
        };
    }
})();