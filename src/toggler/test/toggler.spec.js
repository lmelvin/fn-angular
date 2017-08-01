describe("toggler directive",
    function () {
        var $compile,
            scope,
            hiddenClassName = "hidden";

        beforeEach(module("fn-angular-toggler"));

        beforeEach(inject(function (_$compile_, _$rootScope_) {
            $compile = _$compile_;
            scope = _$rootScope_;
        }));

        function initElement() {
            return $compile("<div class='callout' fn-toggler='isCollapsed' data-toggler='." +
                hiddenClassName +
                "'><h4>Hello World</h4></div>")(scope);
        }

        it("should contain specified dataToggler attribute class value on initialization if fnToggler = true",
            function () {
                scope.isCollapsed = true;
                var element = initElement();
                expect(element.hasClass(hiddenClassName)).toBe(true);
            });

        it("should not contain specified dataToggler attribute class value on initialization if fnToggler = false",
            function () {
                scope.isCollapsed = false;
                var element = initElement();
                expect(element.hasClass(hiddenClassName)).toBe(false);
            });

        it("should remove the value of dataToggler attribute from class list when isCollapsed = false on subsequent calls",
            function () {
                // init with true
                scope.isCollapsed = true;
                var element = initElement();

                // change to false
                scope.isCollapsed = false;
                scope.$digest();
                expect(element.hasClass(hiddenClassName)).toBe(false);
            });

        it("should add the value of dataToggler attribute from class list when isCollapsed = true on subsequent calls",
            function () {
                // init with true
                scope.isCollapsed = false;
                var element = initElement();

                // change to true
                scope.isCollapsed = true;
                scope.$digest();
                expect(element.hasClass(hiddenClassName)).toBe(true);
            });
    });