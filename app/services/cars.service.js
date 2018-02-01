angular.module('fourWheels').service('carsSrvc', function( $http ) {
  this.cars = [
    {
      id: '0',
      make: 'Ford',
      model: 'Mustang',
      color: 'Black',
      year: '2013'
    },
    {
      id: '1',
      make: 'Ford',
      model: 'F-150',
      color: 'White',
      year: '1993'
    },
    {
      id: '2',
      make: 'Dodge',
      model: 'Viper',
      color: 'Green',
      year: '2017'
    },
  ];

  this.getCars = function() {
    return this.cars.slice();
  }

  this.buyCar = function( id ) {
    const carIndex = this.cars.findIndex( car => car.id === id );

    if ( carIndex !== -1 ) {
      this.cars.splice( carIndex, 1 );
    }
    console.log('this.cars service', this.cars);
  };
});