var app = angular.module('mainApp', []);

app.controller('controlCenter', function($scope, $http, $location) {

    $scope.top_links = [

        {
            "link_icon": "icon-user",
            "title": "About",
            "link": "#about"
        },
        {
            "link_icon": "icon-file",
            "title": "Resume",
            "link": "#resume"
        },
        {
            "link_icon": "icon-briefcase",
            "title": "Work",
            "link": "#work"
        },
        {
            "link_icon": "icon-envelope",
            "title": "Contact",
            "link": "#contact"
        },

    ];

    $http.get('db/info.json')
        .success(function(response) {
            $scope.info = response;
        });

    $scope.makeOver = function() {
        window.location = 'assets/resume/resume.pdf'
    };

});
