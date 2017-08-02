(function () {
    angular.module("fn-angular-reveal", [])
        .directive("fnReveal", fnReveal);

    function fnReveal() {
        return {
            restrict: "A",
            link: link
        };

        function link(scope, element, attrs) {

            if (!angular.isDefined(attrs.fnReveal)) return;

            var revealOptions = angular.isDefined(attrs.fnRevealOptions) ? scope.$eval(attrs.fnRevealOptions) : null;

            var $element = $(element);

            var reveal = new Foundation.Reveal($element, revealOptions);

            $element.on('open.zf.reveal', function () {
                scope.$emit('open.fn.reveal');
            });

            $element.on('closed.zf.reveal', function () {
                scope.$emit('closed.fn.reveal');
            });

            scope.$watch(attrs.fnReveal,
                function (showReveal) {
                    if (angular.isDefined(showReveal)) {

                        if (showReveal) {
                            reveal.open();
                        } else {
                            reveal.close();
                        }
                    }
                });
        }
    }
})()
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