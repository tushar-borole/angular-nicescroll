(function () {
    'use strict';
//change
    
    //test
    angular
        .module('angular-nicescroll', [])
        .directive('ngNicescroll', ngNicescroll);

    ngNicescroll.$inject = ['$rootScope','$parse'];

    /* @ngInject */
    function ngNicescroll($rootScope,$parse) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link
        };
        return directive;


        //Gandu  


        function link(scope, element, attrs, controller) {

            var niceOption = scope.$eval(attrs.niceOption)

            var niceScroll = $(element).niceScroll(niceOption);
            var nice = $(element).getNiceScroll();

            if (attrs.niceScrollObject)  $parse(attrs.niceScrollObject).assign(scope, nice);

            // on scroll end
            niceScroll.onscrollend = function (data) {
                if (this.newscrolly >= this.page.maxh) {
                    if (attrs.niceScrollEnd) scope.$evalAsync(attrs.niceScrollEnd);

                }
                if (data.end.y <= 0) {
                    // at top
                    if (attrs.niceScrollTopEnd) scope.$evalAsync(attrs.niceScrollTopEnd);
                }
            };


            scope.$on('$destroy', function () {
                if (angular.isDefined(niceScroll.version)) {
                    niceScroll.remove();
                }
            })


        }
    }


})();
