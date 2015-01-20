'use strict';

angular.module('expensesManagerApp')
.factory('Convertor', function Convertor() {
  var expenses = [];
  return {

    convert : function (expenses, selectedCurrency) {
      var copyExpenses = [];

      if (selectedCurrency === "") {
        return;
      }
      angular.copy(expenses, copyExpenses);
      for (var i = 0; i < copyExpenses.length; i++) {
        if ( selectedCurrency === "INR" &&
            copyExpenses[i].selectedCurrency !== "INR" ) {
          if (copyExpenses[i].selectedCurrency  === "EURO") {
            copyExpenses[i].amount = copyExpenses[i].amount / 80;
          }
          if (copyExpenses[i].selectedCurrency  === "US-DOLLAR") {
            copyExpenses[i].amount = copyExpenses[i].amount / 65;
          }
        } else if ( selectedCurrency === "EURO" &&
                   copyExpenses[i].selectedCurrency !== "EURO" ) {
          if (copyExpenses[i].selectedCurrency  === "INR") {
            copyExpenses[i].amount = copyExpenses[i].amount * 60;
          }
          if (copyExpenses[i].selectedCurrency  === "US-DOLLAR") {
            copyExpenses[i].amount = copyExpenses[i].amount * 0.86;
          }
        } else if ( selectedCurrency === "US-DOLLAR" &&
                   copyExpenses[i].selectedCurrency !== "US-DOLLAR" ) {
          if (copyExpenses[i].selectedCurrency  === "INR") {
            copyExpenses[i].amount = copyExpenses[i].amount / 80;
          }
          if (copyExpenses[i].selectedCurrency  === "EURO") {
            copyExpenses[i].amount = copyExpenses[i].amount / 65;
          }
        }
      }
      return copyExpenses;
    }
  }
});
