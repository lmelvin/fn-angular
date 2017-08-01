(function () {
    var app = angular.module('app', ['fn-angular-toggler']);

    app.controller('ctrl', ctrl);

    function ctrl() {
        var vm = this;
        vm.toggleOn = true;
        vm.toggle = function () {
            vm.toggleOn = !vm.toggleOn;
            return vm.toggleOn;
        }
    }
})()