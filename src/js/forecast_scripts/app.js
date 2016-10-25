/**
 * Created by h3rme on 30.09.2016.
 */
var app = angular.module('ForecastApp', []);
/*translate temperature from kelvin to cels*/
app.filter('Cel', function () {
    return function (temp) {
        return Math.ceil(parseFloat(temp) - 273.15);
    };
});