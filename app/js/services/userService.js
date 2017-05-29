angular.module('instagram.services.userService', [])
    .factory('userFactory',function(){
		var data = {
			"id": "1574083",
			"username": "kevin",
			"full_name": "Kevin Einstein",
			"profile_picture": "https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-19/11850309_1674349799447611_206178162_a.jpg",
			"bio": "This is my bio",
			"website": "http://snoopdogg.com",
			"counts": {
				"media": 1320,
				"follows": 420,
				"followed_by": 3410
			}    
		}	
		return {
			getUserData: function(){
				return data;
			}
		}
	});