angular.module('BubbleSorterAngularApp', [])
   .controller('SampleController', function($scope, $http) {

        $scope.submitInputString = function() {
            console.log("In submitInputString method in ng controller!");

            $http.get("/sort.json?inputString=" + $scope.inputString)
                .then(
                    function successCallback(response) {
                        console.log(response.data);
                        console.log("Adding data to scope");
                        $scope.sortedList = response.data;
                    },
                    function errorCallback(response) {
                        console.log("Unable to get data...");
                    });
        };

    });
