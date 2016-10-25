/**
 * Created by h3rme on 30.09.2016.
 */
app.controller('ForecastController',['$scope','forecast', function ($scope, forecast) {
    $scope.text='';
    $scope.weather;
    $scope.view = false;
    $scope.submit = function () {
        if($scope.text){
            forecast.getData(this.text).success(function (data) {
                $scope.weather = data;
                console.log($scope.weather);
            });
            $scope.view = true;
            $scope.text = '';
        }
    }
}]);

/*API that i used: http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=03d17efcc1443561cd0b9ad3b5effe36*/
