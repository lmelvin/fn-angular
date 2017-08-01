(function () {
    var app = angular.module('app', ['fn-angular-reveal']);

    app.controller('ctrl', ['$scope', ctrl]);

    function ctrl($scope) {
        var vm = this;
        vm.showModal = false;
        vm.toggleModal = function () {
            vm.showModal = !vm.showModal;
            return vm.showModal;
        }
        vm.revealOptions = {
            'resetOnClose': false,
            'closeOnClick': false,
            'closeOnEsc': false,
            'multipleOpened': false
        };

        // event listeners
        $scope.$on('open.fn.reveal', function () {
            // logic when reveal opens
            console.log('Reveal opened');
        });

        $scope.$on('closed.fn.reveal', function () {
            // logic when reveal closes
            console.log('Reveal closed');
        });
    }
})()