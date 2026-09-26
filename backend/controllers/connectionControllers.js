import Connection from "../models/Connection.js"

export async function sendConnection(req,res) {

    try{
        const fromUserId = req.user._id
        const toUserId = req.body.toUserId

        if(fromUserId == toUserId){
            return res.json({success : false, message : "can't send request to yourself !"})
        }

        // to check userId exist or not

        // already friend

        const ConnectionObj = new Connection({
            fromUserId, toUserId, status :"pending"
        })

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