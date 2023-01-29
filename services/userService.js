const fs = require('fs');

const userServiceObj = {
    trimWhiteSpace: (value) => {
        return value.trim();
    },
    readUserFile: () => {
        fs.readFile("./detail.json", "utf-8", (err, jsonString) => {
            if (err) {
                return { "Error Message": err }
            }
            const detailJSON = JSON.parse(jsonString)
            return detailJSON;
        })
    }
}

module.exports = userServiceObj