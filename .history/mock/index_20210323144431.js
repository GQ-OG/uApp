const fs = require("fs")

const mocks = (props) => {
    console.log(props, "props")
    return {
        'POST /test-api/hhhhhh': {
            aaa: "aaa"
        },
        'POST /test-api/aaaaaa': "hhhhhh.json"
    }
}

module.exports = mocks()