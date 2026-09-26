import mongoose from "mongoose"


const connectionSchema  = mongoose.Schema({
     fromUserId : {
        type : mongoose.Schema.Types.ObjectId ,
        required : true ,
        ref :  'User'
     } ,
     toUserId : {
        type : mongoose.Schema.Types.ObjectId , 
        required : true ,
        ref : 'User'
     },
     status : {
          type : String ,
          enum : ["pending" , "accepted" ] ,
          required : true ,
          default : "pending"
     }
})


const connectionModel  = mongoose.model("Connections" , connectionSchema)
export default connectionModel