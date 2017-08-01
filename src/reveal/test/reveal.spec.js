describe("reveal directive",
    function () {
        var $compile,
            scope;

        beforeEach(module("fn-angular-reveal"));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $compile = _$compile_;
            scope = _$rootScope_;
        }));

        function initElement() {
            return $compile(
                "<div class='reveal' fn-reveal='showModal' fn-reveal-options='revealOptions'><h4>Transcluded Content</h4></div>")(
                scope);
        }

        it("should show when fnReveal attribute = true on intiialize",
            function () {
                scope.showModal = true;
                scope.revealOptions = null;

                var element = initElement();

                scope.$digest();
                expect(element[0].style.display).toBe("block");
            });

        it("should be hidden when fnReveal attribute = false on intiialize",
            function () {
                scope.showModal = false;
                scope.revealOptions = null;

                var element = initElement();

                scope.$digest();
                expect(element[0].style.display).toBe("");
            });

        it("should hide after subsequent changes to fnReveal attribute expression",
            function () {
                scope.showModal = false;
                scope.revealOptions = null;

                var element = initElement();
                scope.$digest();
                expect(element[0].style.display).toBe("");

                scope.showModal = true;
                scope.$digest();
                expect(element[0].style.display).toBe("block");
            });
    });