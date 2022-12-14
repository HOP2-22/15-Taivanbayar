const fs = require('fs');

const content = "Some content!, hehehehehehehehehehehehehehehehehehehe";

fs.writeFileSync("notes.txt", content, (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log(content)
    }
})