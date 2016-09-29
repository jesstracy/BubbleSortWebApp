angular.module('BubbleSorterAngularApp', [])
   .controller('SampleController', function($scope, $http) {

        $scope.submitInputString = function() {
            console.log("In submitInputString method in ng controller!");

            $http.get("/sort.json?inputString=" + $scope.inputString)
                .then(
                    function successCallback(response) {
                        console.log(response.data);
                        console.log("Adding data to scope");
                        $scope.listOfSteps = response.data;
                        $scope.currentArray = $scope.listOfSteps[currentOuterIndex];
                    },
                    function errorCallback(response) {
                        console.log("Unable to get data...");
                    });
        };


//        $scope.stepThroughButton = function() {
////            $scope.currentArray = $scope.listOfSteps[currentOuterIndex];
////            if (!(currentOuterIndex >= $scope.listOfSteps.length)) {
////                currentOuterIndex++;
////            }
//            console.log("In stepThrough Button method");
//            console.log("Current int: " + $scope.listOfSteps[currentOuterIndex][currentInnerIndex]);
//            $scope.currentIntInArray = $scope.listOfSteps[currentOuterIndex][currentInnerIndex];
//            if (!(currentInnerIndex >= $scope.listOfSteps[currentOuterIndex].length)) {
//                currentInnerIndex++;
//            }
//        }

//        $scope.stepThroughButton = function() {
//            if ($scope.listOfSteps[currentOuterIndex + 1] != null) {
//                if ($scope.listOfSteps[currentOuterIndex][currentInnerIndex] != $scope.listOfSteps[currentOuterIndex + 1][currentInnerIndex]) {
//                    $scope.listOfSteps[currentOuterIndex][currentInnerIndex] = $scope.listOfSteps[currentOuterIndex + 1][currentInnerIndex];
//                }
//                $scope.currentArray = $scope.listOfSteps[currentOuterIndex];
//                if (!(currentInnerIndex >= $scope.listOfSteps[currentOuterIndex].length)) {
//                    currentInnerIndex++;
//                } else {
//                    if (!(currentOuterIndex >= $scope.listOfSteps.length)) {
//                        currentOuterIndex++;
//                        $scope.currentArray = $scope.listOfSteps[currentOuterIndex];
//                    }
//                }
//            }
//        }

        $scope.stepThroughButton = function() {
            if ($scope.listOfSteps[currentOuterIndex] != undefined) {
                $scope.currentArray = $scope.listOfSteps[currentOuterIndex];
                if (!(currentInnerIndex >= $scope.listOfSteps[currentOuterIndex].length)) {
    //                var currentInt = $scope.listOfSteps[currentOuterIndex][currentInnerIndex];
                    if ($scope.listOfSteps[currentOuterIndex][currentInnerIndex] > $scope.listOfSteps[currentOuterIndex][currentInnerIndex + 1]) {
                        var holder = $scope.listOfSteps[currentOuterIndex][currentInnerIndex];
                        $scope.listOfSteps[currentOuterIndex][currentInnerIndex] = $scope.listOfSteps[currentOuterIndex][currentInnerIndex + 1];
                        $scope.listOfSteps[currentOuterIndex][currentInnerIndex + 1] = holder;
    //                    currentInnerIndex +=  2;
    //                } else {
    //                    currentInnerIndex += 1;
                    }
                    currentInnerIndex++;
                } else if (!(currentOuterIndex >= $scope.listOfSteps.length)) {
                    currentOuterIndex++;
                    currentInnerIndex = 0;
                }
            } else {
                console.log("Already done stepping through!");
            }
        }



        $scope.highlightedColor = true;
        var currentOuterIndex = 0;
        var currentInnerIndex = 0;

    });
