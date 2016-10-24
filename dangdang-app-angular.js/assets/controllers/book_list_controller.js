app.controller('ListController', ['$scope', 'commonService', '$routeParams',
function($scope, c_s, $routeParams) {
  $scope.data = [];
  c_s.getData($routeParams.id, function(res) {
    console.dir(res);
    $scope.data = res.data;
  })
}])
