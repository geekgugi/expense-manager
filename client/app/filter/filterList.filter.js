
'use strict';

angular.module('expensesManagerApp')
.filter('listFilter', function ()   {
  return function(input, filter) {
    console.log("Initializing the filter");
    var list = [];
    if (filter === "" ||  typeof filter === 'undefined') {
      return input;
    } else {
      for ( var i = 0; i < input.length; i++) {
        if (filter === input[i].selectedFriend) {
          list.push(input[i]); 
        }
      }
      return list;
    }
  }
});
