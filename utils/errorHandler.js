function errorHandler(error,res){
   console.log(error);
   return res.status(500).json({
    message:"an error occured",
    error:error
   })
}
module.exports={
    errorHandler
}