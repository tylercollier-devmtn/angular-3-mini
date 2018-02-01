angular.module('fourWheels').directive('showTime', function() {
  return {
    restrict: 'EA',
    template: '<div>The current time is {{time}}</div>',
    link(scope, element, attrs) {
      scope.time = (new Date()).toString();
      console.log('attrs', attrs);
      element.css({
        color: 'red'
      })
    }
  }
})