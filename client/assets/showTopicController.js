app.controller('showTopicController', function($scope, dashboardFactory, topicFactory, userFactory, $routeParams, $http, $location){
    console.log('FACTORY INDEX CONTROLLER')
    $scope.user = []
    $scope.session = []
    $scope.topics = []
    $scope.oneTopic = []
    console.log($routeParams.id, 'the iddddd')

    if(!userFactory.session){
        console.log('not in there', $scope.session, $scope.user)
        userFactory.getUser(function(friend){
            $scope.user = friend;
        });
    } else {
        userFactory.getUser(function(friend){
            $scope.user = friend;
        });
    }



    topicFactory.getOneTopic($routeParams.id, function(topic){
        console.log($routeParams.id, 'route iddddd')
        $scope.oneTopic = topic
        console.log('one topic is mineee', $scope.oneTopic)
    })

    $scope.logout = function(){
        dashboardFactory.logout(function(){
            $location.url('/')
        })
    }

    $scope.like = function(answerID){
        topicFactory.likeButton(answerID,function(likes){
            topicFactory.getOneTopic($routeParams.id, function(topic){
                console.log($routeParams.id)
                $scope.oneTopic = topic
                console.log('likes update', $scope.oneTopic)
            })
        })
    }
})
