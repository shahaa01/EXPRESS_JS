//This will act as a server

const express = require("express"); //we will require it
const app = express(); //this returns some value which we store
//This app variable will help us create server side application
// console.log(app);

let port = 8080; 
/**
 * Port - Endpoints of a network connection that is used
 * to exchange
 */

//This sends same response for every urls
// app.use((req, res) => {
//     console.log("Request received !");
//     let resCode = "<h1>Fruits</h1> <ul><li>Apple</li><li>Orange</li></ul>"    
//     res.send(resCode);
// });

//routing - defining different responses for different URLs (paths)  
/**
 * Use Express routing if your site needs dynamic content, APIs, or data fetching 
 * from a database.
 */


// app.get('/apple', (req, res) => {
//     res.send("Welcome to apple!");
// });

// app.get('/mango', (req, res) => {
//     res.send("Welcome to mango!");
// });

// //this is a wildcard - doesn't show error if the other path is requested
// app.get('*', (req, res) => {
//     res.send('404, the page does not exist! Sorry for the inconvenience');
// });

// //lets use post
// app.post("/", (req, res) => {
//     res.send("You send a post request to a root!");
// });

// app.post("/apple", (req, res) => {
//     res.send("You send a post request to a apple!");
// });


/**
 * There's a problem with node that you need to restart the server to see the changes
 * you made, So to solve this we installed a package called:
 * Nodemon: It automatically restart server with code changes
 */
//Lets install Nodeman - it is better to install it globally so - npm install -g Nodemon
/**
 * Now to start the server we will write "nodemon filename.js" instead of 
 * "node filename.js"
 */

//Lets talk about path parameters now
/**
 * We can send 
 */
app.get('/', (req, res) => {
    res.send("Welcome to the root");
});

//This is path parameter -used for profiles, product pages cause you won't be mannually writing path for all the users
app.get("/:username/:id", (req, res) => { //so like in URL, after slash we write things so after slash use colon to define variables
    let obj = req.params; //req.params stores as a obj of all the parameters
    res.send(`Welcome to the account of @${obj.username} with id:${obj.id}`);
})

app.listen(port, () => {
    console.log(`App is listening on ${port}`); //server needs to be started first
});

//lets talk about query string/ query parameter now
//http://localhost:8080/search?q=apple -> here q is the query string or the extra info
//which will be stored here
app.get('/search', (req, res) => {
    let {q} = req.query; //destructuring of objects; equivalent to - let q = req.query.q
    //if query was not send
    if(!q) {
        res.send("Nothing was searched!")
    }
    else {
        console.log(q); //req.query has all the query of the request
        res.send(`Success for query: ${q}`);
    }
})

//its useful if you wanna pass additional data to the URL
//GET /search?keyword=nodejs&sort=popular -> this will help sort acc to popular

//Summary of Express Learning today:
/**
✅ What is Express.js? A framework that makes backend development easier.
✅ Setting Up Express: Installed Express and created a server.
✅ Ports: Express listens on a port (like 3000).
✅ Routing: Different routes handle different pages (/, /about, etc.).
✅ Path Parameters (:id) → Dynamic URLs like /user/5.
✅ Query Parameters (?key=value) → Search, filtering, etc.
✅ JSON Response (res.json()) → Used for APIs.
✅ 404 Error Handling → Custom error pages for unknown routes.
✅ Middleware (app.use()) → Run functions before routes.
 */
