// /////////////////////   1   ///////////////////////

// const http = require("http");
// const url = require("url");
// const { Read } = require("./utils");
// const Html = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Random HTML</title>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             background-color: #f0f0f0;
//             margin: 0;
//             padding: 0;
//         }
//         .container {
//             width: 80%;
//             margin: 20px auto;
//             background-color: #fff;
//             padding: 20px;
//             border-radius: 8px;
//             box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//         }
//         h1 {
//             color: #333;
//         }
//         p {
//             color: #666;
//             line-height: 1.6;
//         }
//     </style>
// </head>
// <body>
//     <div class="container">
//         <h1>Welcome to Random HTML!</h1>
//         <p>This is just a random HTML code snippet generated for you. Feel free to modify it as you like!</p>
//         <p>Have fun coding!</p>
//     </div>
// </body>
// </html>

// `;

// const server = http.createServer(async (req, res) => {
//   try {
//     const path = url.parse(req.url);
//     const object = await Read("data.json");

//       if (path.pathname === "/HTML") {
//           res.end(Html);
//       }

//       else if (path.pathname === "/API") {
//           res.end(object);
//       }

//       else if (path.pathname === "/TIME") {
//           res.end(new Date().toISOString());
//       } else {
//           res.end("Error Page")
//       }
//   } catch (er) {
//     console.log(er);
//   }
// });

// server.listen("3000", () => {
//   console.log("Server Started Succsesfully");
// });

/////////////////////   2   ///////////////////////

const http = require("http");
const url = require("url");
const { Read } = require("./utils");

const server = http.createServer(async (req, res) => {
  try {
    const path = url.parse(req.url);
    const data = await Read("movies.json");
    const Movies = JSON.parse(data)

    if (path.pathname === "/Movies") {
      res.end(JSON.stringify(Movies[Math.floor(Math.random() * 20)]) + ` ${Math.floor(Math.random() * 20)}th movie`)
    }

    if (path.pathname === "/Jackpot") {
      const number = Math.floor(Math.random() * 1000);
      const paddedNumber = String(number).padStart(3, '0');
      if (number % 10 === Math.floor(number / 10) % 10 && number % 10 === Math.floor(number / 100)) {
        res.end("YOU WON JACKPOT LEZZ GOOOOOOOOO " + paddedNumber);
      } else {
        res.end("Try Your Luck You Might Win Next One " + paddedNumber );
      }
    }
    
    

  } catch (er) {
    console.log(er);
  }
});

server.listen("3000", () => {
  console.log("Server Started Succsesfully");
});

