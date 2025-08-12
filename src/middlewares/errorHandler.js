//Centralized error handling
const errorHandling = (err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).json({
        status: 500,
        message: "Server is down!",
        error: err.message,
    })
}

export default errorHandling;