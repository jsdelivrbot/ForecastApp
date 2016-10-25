/**
 * Created by h3rme on 21.10.2016.
 */
app.factory('forecast', ['$http', function($http) {
    return {
        getData: function (city) {
           return  $http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=03d17efcc1443561cd0b9ad3b5effe36')
               .success(function (data) {
                   return data;
               })
               .error(function (err) {
                   return err;
               });
        }
    }
}]);
