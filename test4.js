var myapp=angular.module("myapp",[]);
myapp.controller("myctrl", function($scope, $http)
{
    $http.get('http://127.0.0.1:5200/user')
    .success(function(response)
    {
        $scope.customer=response.customer;
    });
});
