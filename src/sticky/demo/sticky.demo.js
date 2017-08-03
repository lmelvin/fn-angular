(function () {

    var app = angular.module("app", ["fn-angular-sticky"]);

    app.controller("ctrl", ["$scope", ctrl]);

    function ctrl($scope) {
        var vm = this;

        vm.stickyOptions = {
            anchor: "bigcol",
            marginTop: 0,
            stickTo: "top"
        };

        // event listeners
        $scope.$on("stuckto.fn.sticky:top",
            function () {
                // logic when stuck to top
                console.log("Stuck to top");
            });

        $scope.$on("stuckto.fn.sticky:bottom",
            function () {
                // logic when stuck to bottom
                console.log("Stuck to bottom");
            });

        $scope.$on("unstuckfrom.fn.sticky:top",
            function () {
                // logic when unstuck from top
                console.log("Unstuck from top");
            });

        $scope.$on("unstuckfrom.fn.sticky:bottom",
            function () {
                // logic when unstuck from bottom
                console.log("Unstuck from bottom");
            });
    }
})();