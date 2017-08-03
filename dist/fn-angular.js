(function() {
    angular.module("fn-angular", ["fn-angular-reveal", "fn-angular-toggler"]);
})();
(function () {

    angular.module("fn-angular-sticky", [])
        .directive("fnSticky", fnSticky);

    function fnSticky() {
        return {
            restrict: "A",
            link: link
        };

        function link(scope, element, attrs) {

            var options = angular.isDefined(attrs.fnStickyOptions) ? scope.$eval(attrs.fnStickyOptions) : null;

            var elem = new Foundation.Sticky(element, options);

            $(element).on("sticky.zf.stuckto:top",
                function () {
                    scope.$emit("stuckto.fn.sticky:top");
                });

            $(element).on("sticky.zf.stuckto:bottom",
                function () {
                    scope.$emit("stuckto.fn.sticky:bottom");
                });

            $(element).on("sticky.zf.unstuckfrom:top",
                function () {
                    scope.$emit("unstuckfrom.fn.sticky:top");
                });

            $(element).on("sticky.zf.unstuckfrom:bottom",
                function () {
                    scope.$emit("unstuckfrom.fn.sticky:bottom");
                });
        }
    }
})();
(function() {

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
                function(shouldCollapse) {
                    if (angular.isDefined(shouldCollapse)) {
                        toggler.toggle();
                    }
                });
        }
    }
})();
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

            $element.on("open.zf.reveal",
                function () {
                    scope.$emit("open.fn.reveal");
                });

            $element.on("closed.zf.reveal",
                function () {
                    scope.$emit("closed.fn.reveal");
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
})();