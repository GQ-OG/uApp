const fs = require("fs")
const path = require("path")

const files = {
    'POST /test-api/hhhhhh': "hhhhhh.json"
}

const mocks = (props) => {
    let returnObj = {}
    Object.keys(files).map(item => {
        let file = path.join(__dirname, `./${files[item]}`)
        fs.readFile(file, 'utf-8', (err, data) => {
            console.log(err, "item==============>")
            if(err) {
                returnObj[item] = {
                    code: 404
                }
            }
            else {
                returnObj[item] = data
            }
        })
    })
    console.log(returnObj, "returnObj")
    return returnObj
    // {
    //     'POST /test-api/hhhhhh': {
    //         aaa: "aaa"
    //     },
    //     'POST /test-api/aaaaaa': "hhhhhh.json"
    // }
}

module.exports = mocks()