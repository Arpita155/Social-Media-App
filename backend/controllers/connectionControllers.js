import Connection from "../models/Connection.js"
import User from "../models/User.js"

export async function sendConnection(req,res) {

    try{
        const fromUserId = req.user._id
        const toUserId = req.body.toUserId

        // Check if you send request to yourself
        if(fromUserId == toUserId){
            return res.json({success : false, message : "can't send request to yourself !"});
        }
        
        // to check userId exist or not
        const destinationUser = await User.findById(toUserId);
        

        if(!destinationUser){
            return res.json({success : false, message : "Target user doesn't exist !",});
        }

        // already request sent
        const existConnection = await Connection.findOne({
            $or : [
                {fromUserId : fromUserId , toUserId : toUserId},
                {fromUserId : toUserId , toUserId : fromUserId},
            ],
        });

        if(existConnection){
            return res.json({success : false, message : " Connection request already exist !"});
        }


        const ConnectionObj = new Connection({
            fromUserId, toUserId, status :"pending"
        });

        await ConnectionObj.save()

        return res.json({success : true, message : " Connenction request sent !", obj : ConnectionObj})
        
    }catch(error){
        return res.json({success : false, message : "Internal server error"})
    }
}

export async function acceptConnection(req , res ) {
    
}


export async function rejectConnection(req , res ) {
    
}


export async function getAllConnection(req , res ) {
    
}