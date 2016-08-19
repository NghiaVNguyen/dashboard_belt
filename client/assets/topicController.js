app.controller('topicController', function($scope, dashboardFactory, topicFactory, userFactory, $routeParams, $http, $location){
    console.log('FACTORY INDEX CONTROLLER')
    $scope.user = []
    $scope.session = []
    $scope.topics = []
    $scope.oneTopic = []
    console.log($routeParams.id, 'the iddddd')

    if(!userFactory.session){
        userFactory.getUser(function(friend){
            $scope.user = friend;
        });
    } else {
        userFactory.getUser(function(friend){
            $scope.user = friend;
        });
    }

    $scope.createTopic = function(data){
        console.log(data, 'is my data null?')
        if(data.topic){
            dashboardFactory.createTopic(data, $scope.user, function(user){
                dashboardFactory.getTopics(function(topics){
                    $scope.topics = topics
                })

                $location.url('/dashboard')
            })
        }
        else {
            return
        }
    }
    $scope.logout = function(){
        dashboardFactory.logout(function(){
            $location.url('/')
        })
    }
})
