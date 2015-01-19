'use strict';

angular.module('expensesManagerApp')
.controller('MainCtrl', function ($scope, $http, ngDialog) {
  // Initial set of values, we are not using data source.
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

  $scope.openDialog = function ($event) {
    var dialog = ngDialog.open({
      template: 'friendTemplate',
      scope: $scope,
      controller: 'MainCtrl',
      $event: $event,
    });
  };

  $scope.deleteExpense = function (expense) {
    console.log("Delete is clicked, to be deleted is " + expense);
  };

  $scope.editExpense = function (expense) {
    console.log("Edit is clicked, to be edited is " + expense);
  };

  // Add a friend to array, which is bind to select options
  $scope.addFriend = function (event) {
    if (event.which === 13) {
      console.log("Invoked via enter button");
    }
    var friend = {
      "id" : $scope.friends [ $scope.friends.length - 1 ].id + 1,
      "name" : $scope.newFriend
    };
    $scope.friends.push(friend);
  }
  // adds a expense to list
  $scope.addExpense = function () {
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
