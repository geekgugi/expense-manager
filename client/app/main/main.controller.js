'use strict';

angular.module('expensesManagerApp')
.controller('MainCtrl', function ($scope, $http, ngDialog) {
  $scope.value = {};
  $scope.expenses = [];
  $scope.form = {
    "name" : "",
    "selectedPaymentType":"Cash",
    "selectedFriend":"Oggy",
    "tDate":"",
    "selectedCurrency":"INR",
    "amount":0
  };
  $scope.newFriend = $scope.newFriend || '';
  $scope.awesomeThings = [];
  $scope.paymentTypes = [
    {"id":0, "type":"Cash"},
    {"id":1, "type":"Card"}
  ];
  $scope.friends = [
    {"id":0, "name":"Oggy"},
    {"id":1, "name":"Piggy"}
  ];
  $scope.currencies = [
    {"id":0, "value":"INR"},
    {"id":1, "value":"EURO"},
    {"id":2, "value":"US-DOLLAR"}
  ];

  $scope.openDialog = function($event) {
    var dialog = ngDialog.open({
      template: 'friendTemplate',
      scope: $scope,
      controller: 'MainCtrl',
      $event: $event,
    });
  };

  $scope.addFriend = function (event) {
    if (event.which === 13) {
      console.log("Invoked via enter button");
    }
    var friend = {
      "id":$scope.friends[$scope.friends.length - 1].id + 1,
      "name":$scope.newFriend
    };
    console.log(friend);
    $scope.friends.push(friend);
  }

  $scope.addExpense = function () {
    debugger;
    var value = {
      "name": $scope.form.name,
      "selectedPaymentType": $scope.form.selectedPaymentType.type,
      "selectedFriend":$scope.form.selectedFriend.name,
      "selectedCurrency": $scope.form.selectedCurrency.value,
      "date": $scope.form.tDate,
      "amount": $scope.form.amount
    }
    $scope.expenses.push(value);
  }
});
