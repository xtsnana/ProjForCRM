/**
 * Created by lenovo on 2017/4/6.
 */
var chenna = angular.module("chenna",[]);
chenna.controller("MineController",function($scope,$http) {
    $http({
        method: "GET",
        url: "chenna.txt"
    }).success(function (data, status, headers, config) {
        $scope.arr = data;
    }).error(function (data, status, headers, config) {
        console.log("error");
    });
    $scope.show = {};
    $scope.pClick = function (arg) {
        if ($scope.show[arg]) {
            $scope.show[arg] = false;
        } else {
            $scope.show = {};
            $scope.show[arg] = true;
        }
    }
})

