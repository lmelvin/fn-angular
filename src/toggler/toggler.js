(function () {

    angular.module("fn-angular-toggler", [])
        .directive("fnToggler", fnToggler);

    function fnToggler() {
        return {
            restrict: "A",
            link: link
        };

        function link(scope, element, attrs) {

            if (!angular.isDefined(attrs.fnToggler)) return;

            var options = {
                'animate': false
            };

            var toggler = new Foundation.Toggler($(element), options);

            // init toggle depending on state of bool
            if (scope.$eval(attrs.fnToggler)) {
                toggler.toggle();
            }

            scope.$watch(attrs.fnToggler,
                function (shouldCollapse) {
                    if (angular.isDefined(shouldCollapse)) {
                        toggler.toggle();
                    }
                });
        }
    }
})()