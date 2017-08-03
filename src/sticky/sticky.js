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