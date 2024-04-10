const fs = require('fs/promises');

fs.readFile("./social.json")
.then((data) => {
    console.log("data: ",JSON.parse(data)[0].name)   
})
.catch((error) => {
    console.log("error",error)
});