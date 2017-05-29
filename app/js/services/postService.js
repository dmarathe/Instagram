angular.module('instagram.services.postService', [])
    .factory('postFactory', function(){
		// mock data
		var data = [
					{
					"comments": [
						{
							"created_time": "1280780324",
							"text": "Really amazing photo!",
							"from": {
								"username": "snoopdogg",
								"profile_picture": "https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-19/11850309_1674349799447611_206178162_a.jpg",
								"id": "1574083",
								"full_name": "Snoop Dogg"
							},
							"id": "420"
						},
						{
							"created_time": "1280799327",
							"text": "wowwwww!",
							"from": {
								"username": "sachinrocks",
								"profile_picture": "https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-19/11187099_1097612520254770_734161381_a.jpg",
								"id": "1574084",
								"full_name": "Sachin Tendulkar"
							},
							"id": "421"
						},
						{
							"created_time": "1280799327",
							"text": "Nice....!",
							"from": {
								"username": "yourocks",
								"profile_picture": "https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-19/11187099_1097612520254770_734161381_a.jpg",
								"id": "1574084",
								"full_name": "Sachin Tendulkar"
							},
							"id": "422"
						},
						{
							"created_time": "1289799327",
							"text": "jump up high!!!",
							"from": {
								"username": "rocky_123",
								"profile_picture": "https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-19/11187099_1097612520254770_734161381_a.jpg",
								"id": "1574084",
								"full_name": "Sachin Tendulkar"
							},
							"id": "423"
						}

					],
					"caption": {
						"created_time": "1296710352",
						"text": "Inside le truc #foodtruck",
						"from": {
							"username": "kevin",
							"full_name": "Kevin Systrom",
							"type": "user",
							"id": "3"
						},
						"id": "26621408"
					},
					"user_has_liked":false,
					"likes": {
						"count": 15
					},
					"link": "http://instagr.am/p/BWrVZ/",
					"user": {
						"username": "kevin",
						"profile_picture": "https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-19/11850309_1674349799447611_206178162_a.jpg",
						"id": "3"
					},
					"created_time": "1296710327",
					"image_url": "https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-15/e35/18645644_116339328947518_4312762208795754496_n.jpg",
					"type": "image",
					
					"tags": ["foodtruck"],
					"id": "22721881"
				},

				{
					"comments": [
						{
							"created_time": "1280780324",
							"text": "Really amazing photo!",
							"from": {
								"username": "snoopdogg",
								"profile_picture": "https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-19/11850309_1674349799447611_206178162_a.jpg",
								"id": "1574083",
								"full_name": "Snoop Dogg"
							},
							"id": "420"
						},
						{
							"created_time": "1280780327",
							"text": "wowwwww!",
							"from": {
								"username": "sachinrocks",
								"profile_picture": "https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-19/11187099_1097612520254770_734161381_a.jpg",
								"id": "1574084",
								"full_name": "Sachin Tendulkar"
							},
							"id": "421"
						}

					],
					"caption": {
						"created_time": "1296710352",
						"text": "Inside le truc #foodtruck",
						"from": {
							"username": "kevin",
							"full_name": "Kevin Systrom",
							"type": "user",
							"id": "3"
						},
						"id": "26621408"
					},
					"user_has_liked":true,
					"likes": {
						"count": 15
					},
					"link": "http://instagr.am/p/BWrVZ/",
					"user": {
						"username": "kevin",
						"profile_picture": "https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-19/11850309_1674349799447611_206178162_a.jpg",
						"id": "3",
					
					},
					"created_time": "1296710387",
					"image_url": "https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-15/e35/18646362_1323805481070881_8225226769750294528_n.jpg",
					"type": "image",
					
					"tags": ["foodtruck"],
					"id": "22721881"
				},
				{
					"comments": [
						{
							"created_time": "1280780324",
							"text": "Really amazing photo!",
							"from": {
								"username": "snoopdogg",
								"profile_picture": "https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-19/11850309_1674349799447611_206178162_a.jpg",
								"id": "1574083",
								"full_name": "Snoop Dogg"
							},
							"id": "420"
						},
						{
							"created_time": "1280780327",
							"text": "wowwwww!",
							"from": {
								"username": "sachinrocks",
								"profile_picture": "https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-19/11187099_1097612520254770_734161381_a.jpg",
								"id": "1574084",
								"full_name": "Sachin Tendulkar"
							},
							"id": "421"
						}

					],
					"caption": {
						"created_time": "1296710352",
						"text": "Inside le truc #foodtruck",
						"from": {
							"username": "kevin",
							"full_name": "Kevin Systrom",
							"type": "user",
							"id": "3"
						},
						"id": "26621408"
					},
					"user_has_liked":true,
					"likes": {
						"count": 15
					},
					"link": "http://instagr.am/p/BWrVZ/",
					"user": {
						"username": "kevin",
						"profile_picture": "https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-19/11850309_1674349799447611_206178162_a.jpg",
						"id": "3"
					},
					"created_time": "12967103567",
					"image_url": "https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-15/e35/18809448_1870156786584891_1253461324592054272_n.jpg",
					"type": "image",
					
					"tags": ["foodtruck"],
					"id": "22721881"
				},
				{
					"comments": [
						{
							"created_time": "1280780324",
							"text": "Really amazing photo!",
							"from": {
								"username": "snoopdogg",
								"profile_picture": "https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-19/11850309_1674349799447611_206178162_a.jpg",
								"id": "1574083",
								"full_name": "Snoop Dogg"
							},
							"id": "420"
						},
						{
							"created_time": "1280780327",
							"text": "wowwwww!",
							"from": {
								"username": "sachinrocks",
								"profile_picture": "https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-19/11187099_1097612520254770_734161381_a.jpg",
								"id": "1574084",
								"full_name": "Sachin Tendulkar"
							},
							"id": "421"
						}

					],
					"caption": {
						"created_time": "1296710352",
						"text": "Inside le truc #foodtruck",
						"from": {
							"username": "kevin",
							"full_name": "Kevin Systrom",
							"type": "user",
							"id": "3"
						},
						"id": "26621408"
					},
					"user_has_liked":true,
					"likes": {
						"count": 15
					},
					"link": "http://instagr.am/p/BWrVZ/",
					"user": {
						"username": "kevin",
						"profile_picture": "https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-19/11850309_1674349799447611_206178162_a.jpg",
						"id": "3"
					},
					"created_time": "12967103899",
					"image_url": "https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-15/e35/18721875_431683667192805_1418746878916296704_n.jpg",
					"type": "image",
					
					"tags": ["foodtruck"],
					"id": "22721881"
				}
				]
				return {
					getNoOfPosts:function(){
						return data.length;
					},

					getData: function(){
						return data;
					},
					
					getTimeSince: function(date){
						
						  var d = new Date(Date.now() - parseInt(date));
						  var seconds = Math.floor((new Date() - d) / 1000);

							interval = Math.floor(seconds/(86400*7));
							if(interval > 1){
								return interval + "W";
							}
							interval = Math.floor(seconds / 86400);
							if (interval > 1) {
								return interval + "D";
							}
						
							interval = Math.floor(seconds / 3600);
							if (interval > 1) {
								return interval + "H";
							}
							interval = Math.floor(seconds / 60);
							if (interval > 1) {
								return interval + "M";
							}
							return Math.floor(seconds) + "S";
						},

						addComment: function(id, msg){
							console.log(data);
							var dataItem = data.find(function(data){
								return data.id === id;
							});
							if(dataItem){
								dataItem.comments.push({
										
									'created_time': Date.now(),
									'text': msg,
									'from': dataItem.caption.from,
									'id': this.randomId()
								})
							}
						},

						randomId: function(){
							return Math.floor(Math.random()*1000);
						}
				};
				
				
	})