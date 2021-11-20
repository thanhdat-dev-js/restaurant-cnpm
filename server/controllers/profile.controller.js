const Profile = require('../models/user.model');
const shortId = require('shortid');

module.exports = {
    async getProfile(req, res) {
        try {
            // 
            const theProfile = await Profile.findOne({email: req.user.email});
            if (theProfile){
                return res.status(200).json({
                    success: 1,
                    theProfile,
                    message: "thanh cong"
                })
            }
            return res.status(404).json({
                success: 0,
                message: "that bai"
            })
        }
        catch (err){
            console.log(err);
        }
    },

    async postProfile(req,res){
        try{
            const profileEmail = req.user.email;
            const theProfile = await Profile.findOne({email : profileEmail});
            if (theProfile){
                theProfile.phone = req.query.phone || theProfile.username;
                theProfile.fname = req.query.fname || theProfile.fname;
                theProfile.lname = req.query.lname || theProfile.lname;
                // theProfile.push({
                //     'username': req.body.username,
                //     'fname': req.body.firstname,
                //     'lname': req.body.lastname
                // });
                if (await theProfile.save())
                {return res.status(200).json({
                    success: 1,
                    data : theProfile
                })}
            }
            else{
                return res.status(404).json({
                    success: 0
                })
            }

        }

        catch (error){
            console.log(error);
            return res.status(500).json({
                message: error
            });
        }
    }
}