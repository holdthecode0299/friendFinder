var friends = require("../data/friends")
var path = require("path");

module.exports = function (app) {

    // Routes 
    app.get("/api/friends", function(req,res){
    return res.json(friends);
    });


    // user input
    app.post("/api/friends", function(req,res){
    
		var best = 30;
		var matchScore = 0;

		for (var i = friends.length - 1; i >= 0; i--){
			console.log("Comparing with " + friends[i].name);

			var totalDifference = 0;

			for (var j = 0; j < 10; j++){
				totalDifference = totalDifference + Math.abs(friends[i].scores[j] - req.body.scores[j]);
			}
			if (totalDifference < best){
				best = totalDifference
				matchScore = i;
			}
      	console.log("Total difference: " + friends[i].name + " is " + totalDifference);
        }

        console.log("Best Match " + friends[matchScore].name + " Best Score " + bestDifferent);
       

        // user input 
        friends.push(req.body);

        // respond with best match
        res.json({name: friends[matchScore].name, photo: friends[matchScore].photo});
        });

        app.post("/api/results", function (req,res){
            res.json(best);
        })

        
    };

    
        // Logs back match results 
        // console.log("BEST MATCH " + match + "their name is " + bestMatch);
        // friends.push(req.body);
        // console.log(friends);
        // res.json(friends);
// ==================
        // var totalDifference = 0;
        // var bestMatch = {
        //     name:"",
        //     photo:"",
        //     friendDifference: 1000
        // };

        // var userData = req.body;
        // var userName = userData.name;
        // var userScores = userData.scores;

        // var b = userScores.map(function(item){
        //     return parseInt(item,10);
        // });
        // userData = {
        //     name: req.body.name,
        //     photo: req.body.photo,
        //     scores: b
        // };

        // console.log("Name: " + userName);
        // console.log("User score " + userScores);

        // var sum = b.reduce
        // console.log("Best Match")


// ===================


        // var friendMatch = req.body;
        // var difference = 0;
        // console.log(friendMatch);
        // friends.push(friendMatch);
        // res.json(friendMatch);
// ================

    // for(i = 0; i < friends.length; i++){
    //     var newMatch = friends[i].scores;
    //     var name = friends[i].name;

    //     for(let j = 0; j < 10; j++) {
    //         var scoreDifference = 0; 

    //         difference = Math.abs(friendMatch.scores[j] - match.score[j]);
    //         scoreDifference += difference;
    //     }

    //     if(match >= scoreDifference){
    //         match = scoreDifference; 
    //         match.scores
    //         friendMatch.push(match);
    //         console.log("Best Match " + match);
    //     }

    //     console.log(scoreDifference + "Name" + match.name);
    // }

// ================
    // Logs back match results 
    // console.log("BEST MATCH " + match + "their name is " + bestMatch);
    // friends.push(req.body);
    // console.log(friends);
    // res.json(friends);



