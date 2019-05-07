var path = require("path")

module.exports = function(app){
    app.get("/survey", function (req, res) { 
    res.sendFile(path.join(__dirname, "../public/survey.html"));
    
    });

// no match brings to home page default catch-all 
    app.get("/", function (req, res) { 
        res.sendFile(path.join(__dirname, "../public/home.html"));
    
    });

    app.get("/friendResults", function (req, res) { 
        res.sendFile(path.join(__dirname, "../public/friendResults.html"));
    
    });
};
