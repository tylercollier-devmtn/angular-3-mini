angular.module('fourWheels').component('cars', {
  templateUrl: 'app/cars/cars.template.html',
  controllerAs: 'carsCtrl',
  controller: function(carsSrvc) {
    this.cars = carsSrvc.getCars();
    this.buyCar = function(id) {
      carsSrvc.buyCar(id);
      this.cars = carsSrvc.getCars();
    };
  }
})