app.factory('userFactory', function($http, $location){
    var factory = [];
    factory.customers = [];
    factory.session = null;

    factory.getUser = function(callback){
        console.log('getting users')
        $http.get('/logins').success(function(output){
            factory.session = output
            console.log(factory.session)
            callback(output)
        })
    };

    factory.checkUser = function(data, callback){
        console.log(data, 'factory data view');
        data2 = { 'name': data}
        $http.post('/login', data2).success(function(output){
            console.log(output, 'returned session user');
            factory.session = output.session;
            callback(output);
        })
    };

    return factory
})
//
