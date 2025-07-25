//Importing express module
const express = required( 'express');

const app = express();
const PORT = 5173;

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, "
            + "and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);