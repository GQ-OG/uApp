const fs = require("fs")

const mocks = () => {
    return {
        'POST /test-api/hhhhhh': {
            aaa: "aaa"
        }
    }
}

module.exports = {
    'POST /test-api/hhhhhh': {
        aaa: "aaa"
    },
    'POST /test-api/aaaaaa': "hhhhhh.json"
}