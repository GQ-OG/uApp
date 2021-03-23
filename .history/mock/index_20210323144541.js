const fs = require("fs")

const files = {
    'POST /test-api/hhhhhh': "hhhhhh.json"
}

const mocks = (props) => {
    return {
        'POST /test-api/hhhhhh': {
            aaa: "aaa"
        },
        'POST /test-api/aaaaaa': "hhhhhh.json"
    }
}

module.exports = mocks()