(function () {
    var app = angular.module('app', ['fn.angular.toggler']);

    app.controller('ctrl', ctrl);

    function ctrl() {
        var vm = this;
        vm.toggled = true;
        vm.toggle = function () {
            vm.toggled = !vm.toggled;
            return vm.toggled;
        }
    }
})()