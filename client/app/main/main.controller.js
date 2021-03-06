'use strict';

angular.module('expensesManagerApp')
.controller('MainCtrl', function ($scope, $http, $rootScope, ngDialog, Convertor)  {
  // Initial set of values, we are not using data source.
  // TODO: Use a data source in the form of json files.
  $scope.expenses = [];
  $scope.masterExpensesCopy = [];
  // Default values for the form
  $scope.form = {
    name :"",
    selectedPaymentType:"Cash",
    selectedFriend:"Oggy",
    tDate:"",
    selectedCurrency:"INR",
    amount:0
  };

  $scope.newFriend = $scope.newFriend || '';

  $scope.paymentTypes = [
    {id:0, type:"Cash"},
    {id:1, type:"Card"}
  ];

  $scope.friends = [
    {id:0, name:"Oggy"},
    {id:1, name:"Piggy"}
  ];

  $scope.currencies = [
    {id:0, value:"INR"},
    {id:1, value:"EURO"},
    {id:2, value:"US-DOLLAR"}
  ];

  // Open dialog box 
  $scope.openDialog = function ($event) {
    $rootScope.dialogBox = ngDialog.open({
      template: 'friendTemplate',
      scope: $scope,
      controller: 'MainCtrl',
      $event: $event,
    });
  };

  // Add a friend to array, which is bind to select options
  $scope.addFriend = function () {
    var friend = {
      id : $scope.friends[ $scope.friends.length - 1 ].id + 1,
      name : $scope.newFriend
    };
    $scope.friends.push(friend);
    $rootScope.dialogBox.close();
  }

  // Shows currency in selected format
  $scope.updateAmount = function () {
    $scope.expenses = Convertor.convert($scope.expenses, $scope.currencyValue.value);
  }


  // delete an expense from the array
  $scope.deleteExpense = function (expense) {
    var index = $scope.expenses.indexOf(expense)
    $scope.expenses.splice(index, 1);
  };

  // edit an expense and update back UI
  $scope.editExpense = function (expense) {
    console.log("Edit is clicked, to be edited is " + expense);
  };

  // adds a expense to list
  $scope.addExpense = function () {
    $scope.uid = $scope.uid + 1;
    var value = {
      uid : $scope.uid,
      name : $scope.form.name,
      selectedPaymentType : $scope.form.selectedPaymentType.type,
      selectedFriend : $scope.form.selectedFriend.name,
      selectedCurrency : $scope.form.selectedCurrency.value,
      tDate : $scope.form.tDate,
      amount : $scope.form.amount
    }
    $scope.expenses.push(value);
    angular.copy($scope.expenses, $scope.masterExpensesCopy);
  }
});
