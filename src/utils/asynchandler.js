 const asynchandler=(reqHnadler)=>{
    (req,res,next)=>{
        Promise.resolve(reqHnadler(req,res,next)).
        catch((err)=>next(err))
    }





 }

export{asynchandler}


//passing in two functions and moving on

// const asynchandler= (fn)=>async (req,res,next)=>{
//     try{
//         await fn(req,res,next)

//     }
//     catch(error){
//         res.error(err.code || 500).json({
//             success:false,
//             message:err.message
//         })
//     }









