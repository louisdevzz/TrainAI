const fs = require('fs/promises');

fs.readFile("./components/all-components.json")
.then((data) => {
    for(let i = 0;i<JSON.parse(data).length;i++){
        console.log("data: ",JSON.parse(data)[i].js) 
    }  
})
.catch((error) => {
    console.log("error",error)
});