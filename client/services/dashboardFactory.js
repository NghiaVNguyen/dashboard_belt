app.factory('dashboardFactory', function($http, $location){
    var factory = [];
    factory.customers = [];
    factory.session = [];
    factory.topic = []

    factory.logout = function(callback){
        $http.get('/logout').success(function(output){
            console.log(output);
            callback()
        })
    }

    factory.createTopic = function(data, ID, callback){
        console.log(data, ID.session._id, 'factory data view');

        $http.post('/topic/' + ID.session._id, data).success(function(output){
            console.log(output, 'newtopic');
            factory.topic.push(output.newTopic)
            callback(output.newTopic);
        })
    };

    factory.getTopics = function(callback){
        console.log('attempting to get topics')
        $http.get('/topic').success(function(output){
            console.log(output.allTopics)
            factory.topic = output.allTopics
            callback(output.allTopics)
        })
    }


    console.log('factory working')
    return factory
})
//
