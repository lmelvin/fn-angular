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