var testCtrls = angular.module('TestModule', []);

testCtrls.controller('TestController',

    function userController($scope) {
        var vm = this;

        vm.fName = '';
        vm.lName = '';
        vm.passw1 = '';
        vm.passw2 = '';
        vm.users = [
            {id: 1, fName: 'Hege', lName: "Pege"},
            {id: 2, fName: 'Kim', lName: "Pim"},
            {id: 3, fName: 'Sal', lName: "Smith"},
            {id: 4, fName: 'Jack', lName: "Jones"},
            {id: 5, fName: 'John', lName: "Doe"},
            {id: 6, fName: 'Peter', lName: "Pan"}
        ];
        vm.edit = true;
        vm.error = false;
        vm.incomplete = false;

        vm.editUser = function (id) {
            if (id == 'new') {
                vm.edit = true;
                vm.incomplete = true;
                vm.fName = '';
                vm.lName = '';
            } else {
                vm.edit = false;
                vm.fName = vm.users[id - 1].fName;
                vm.lName = vm.users[id - 1].lName;
            }
        };

        vm.saveUser = function (){
            vm.users.push({
                id: vm.users.length+1,
                fName: vm.fName,
                lName: vm.lName
            });

        }
        $scope.$watch(angular.bind(this, function(){
            return this.passw1;
        }), function () {
            vm.test();
        });
        $scope.$watch(angular.bind(this, function(){
            return this.passw2;
        }), function () {
            vm.test();
        });
        $scope.$watch(angular.bind(this, function(){
            return this.fName;
        }), function () {
            vm.test();
        });
        $scope.$watch(angular.bind(this, function(){
            return this.lName;
        }), function () {
            vm.test();
        });

        vm.test = function () {
            if (vm.passw1 !== vm.passw2) {
                vm.error = true;
            } else {
                vm.error = false;
            }
            vm.incomplete = false;
            if (vm.edit && (!vm.fName.length || !vm.lName.length || !vm.passw1.length || !vm.passw2.length)) {
                vm.incomplete = true;
            }
        };

    });