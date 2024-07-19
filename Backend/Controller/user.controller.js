import User from "../Modal/user.modal.js";
import bcryptjs from "bcryptjs";


export const signup= async(req,res)=>{
    try {
        const{fullname,email,password}= req.body;
        const user =await User.findOne({email});
        if (user) {
            return res.status(400).send({message:"user already exists....!"})
        }
        const hashPassword =await bcryptjs.hash(password, 10);
        const createdUser=new User({
            fullname,
            email,
            password:hashPassword,
        });
        await createdUser.save()
        res.status(201).send({message:"User created successfully...!",user:{
            _id:createdUser._id,
            fullname:createdUser.fullname,
            email:createdUser.email,
        },
    })
    } catch (error) {
        console.log("error:"+error.message)
        res.status(501).send({message:"Internal server error..."})
    }
};

export const login =async (req,res)=>{
    try {
        const {email,password}=req.body;
        const user = await User.findOne({email});
        const validUser = await bcryptjs.compare(password,user.password);
        if (!user || !validUser) {
            return res.status(400).send({message:"Invaild user name or password....!"})
        }else{
            res.status(200).send({message:"Successfully Logged In",user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email
            }})
        }
    } catch (error) {
        console.log("error :"+error.message)
        res.status(500).send({message:"Internal server error"})
        
    }
}