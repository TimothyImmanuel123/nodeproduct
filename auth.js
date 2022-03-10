// ini kode untuk auth

//input json webtoken
const jwt = require("jsonwebtoken")
const SECRET_KEY = "BelajarNodeJSItuMenyengankan"

//enpoint authorization
auth = (req, res, next) => {
    //get authorization pada header
    let header = req.headers.authorization
    //get token
    let token = header && header.split(" ")[1]
 
    //setting header
    let jwtHeader = {
        algorithm: "HS256"
    }

    //token tidak ada
    if(token == null){
        res.status(401).json({ 
            message: "Unauthorized"})
    }
    //token ada
    else{
        jwt.verify(token, SECRET_KEY, jwtHeader, (error,user) => {
            if (error) {
                res
                .status(401)
                .json({
                    message: "Invalid token"
                })
            } else {
                console.log(user);
                next()
            }
        })
    }
}
 
module.exports = auth