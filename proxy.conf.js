const PROXY_CONFIG = [
    {

        context: ['/api/'], 
        target: 'http://localhost:8765/', 
        secure: false, 
        pathRewrite: {"^/api/" : ""}

    }
]

module.exports = PROXY_CONFIG