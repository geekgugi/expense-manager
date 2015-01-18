'use strict';

angular.module('expensesManagerApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngDialog',
  'ui.bootstrap'
])
.config(function ($routeProvider, $locationProvider, ngDialogProvider) {

  // for  ngDialog throught the app
  ngDialogProvider.setDefaults({
    className: 'ngdialog-theme-default',
    plain: false,
    showClose: true,
    closeByDocument: true,
    closeByEscape: true,
    appendTo: false
  });
  $routeProvider
  .otherwise({
    redirectTo: '/'
  });

  $locationProvider.html5Mode(true);
});
