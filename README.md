# friendFinder

Friend Finder - Node and Express Servers

Build a compatibility-based "Friend Finder" application.

Create a folder called FriendFinder. Inside the folder, organize your directories so it matches the following:
    FriendFinder
        - .gitignore
        - app
        - data
            - friends.js
        - public
            - home.html
            - survey.html
        - routing
            - apiRoutes.js
            - htmlRoutes.js
        - node_modules
        - package.json
        - server.js

<!-- Assisgnment Instructions -->
1. Survey with 10 questions. 

2. Your server.js file should require the basic npm packages we've used in class: express and path.
3. Your htmlRoutes.js file should include two routes:

-A GET Route to "/survey" which should display the survey page.
-A default, catch-all route that leads to "home.html" which displays the home page.

4. Your "apiRoutes.js" file should contain two routes:

-A GET route with the url "/api/friends". This will be used to display a JSON of all possible friends.
-A POST routes "/api/friends". This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

5. Save your application's data inside of "app/data/friends.js" as an array of objects. 