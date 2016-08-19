app.factory('topicFactory', function($http, $location){
    var factory = [];
    factory.customers = [];
    factory.session = [];
    factory.oneTopic = []

    factory.createTopic = function(data, callback){
        console.log(data, 'factory data view');

        $http.post('/topic', data).success(function(output){
            console.log(output);
            callback(output);
        })
    };

    factory.getOneTopic = function(ID, callback){
        console.log(ID)
        console.log('attempting to get topics')
        $http.get('/oneTopic/' + ID).success(function(output){
            console.log('asdasdkaskjasdkjaslkj')
            factory.oneTopic = output.oneTopic;
            console.log(factory.oneTopic, 'sucesssfu created one topic')
            callback(output.oneTopic)
        })
    }

    factory.submitAnswer = function(id, data, callback){
        $http.post('/answer/' + id, data).success(function(output){

            callback()
        })

    }

    factory.likeButton = function(answerID, callback){
        console.log(answerID, "my answer ID")
        $http.get('/answers/' + answerID).success(function(output){

            callback()
        })
    }

    console.log(' topic factory working')
    return factory
})
//
