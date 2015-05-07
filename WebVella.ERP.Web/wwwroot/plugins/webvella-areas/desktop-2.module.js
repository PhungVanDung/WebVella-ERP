﻿/* entities.module.js */

/**
* @desc this module manages the application home desktop screen
*/

(function () {
    'use strict';

    angular
        .module('webvellaAreas') //only gets the module, already initialized in the base.module of the plugin. The lack of dependency [] makes the difference.
        .run(run)
        .config(config)
        .controller('WebVellaAreasDesktop2Controller', controller);

    // Configuration ///////////////////////////////////
    config.$inject = ['$stateProvider'];

    /* @ngInject */
    function config($stateProvider) {
        $stateProvider.state('webvella-areas-desktop-2', {
            parent: "webvella-desktop-base", // the state is defined in the webvella-desktop-plugin
            url: '/browse-2', //  /desktop/browse after the parent state is prepended
            views: {
                "contentView": {
                    controller: 'WebVellaAreasDesktop2Controller',
                    templateUrl: '/plugins/webvella-areas/desktop-2.view.html',
                    controllerAs: 'contentData'
                }
            },
            resolve: {

            },
            data: {

            }
        });
    };


    // Run //////////////////////////////////////
    run.$inject = ['$rootScope'];

    /* @ngInject */
    function run($rootScope) {
        
    };


    // Controller ///////////////////////////////
    controller.$inject = ['$rootScope', '$state', 'pageTitle'];

    /* @ngInject */
    function controller($rootScope, $state, pageTitle) {
        /* jshint validthis:true */
        var contentData = this;
        contentData.pageTitle = "Browse Areas | " + pageTitle;


        contentData.goHome = function () {
            $state.go("webvella-root-home");
        }

        activate();

        function activate() { }
    }

})();