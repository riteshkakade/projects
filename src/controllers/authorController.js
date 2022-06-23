const AuthorModel = require('../models/authorModel')
 
const createAuthor = async function(req,res){
    let data = req.body
    
    let regex = new RegExp("([!#-'+/-9=?A-Z^-~-]+(\.[!#-'+/-9=?A-Z^-~-]+)|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'+/-9=?A-Z^-~-]+(\.[!#-'+/-9=?A-Z^-~-]+)|\[[\t -Z^-~]*])");
    let testmails=data.email
    let emailvalidation= regex.test(testmails)
    if(!emailvalidation){
        return res.status(400).send({status:false,msg: "enter a valid email id"})
    }

    const createData = await AuthorModel.create(data)
    res.status(201).send({msg:createData})
}

module.exports.createAuthor = createAuthor