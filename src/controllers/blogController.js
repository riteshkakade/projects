const blogModel = require('../models/blogModel')
const BlogModel = require('../models/blogModel')

const createBlog = async function(req,res){
    let data = req.body
    const auth = data.authorId
    if(!auth){
        res.status(400).send({status:false, msg:"author is required"})
    }
    const createData = await BlogModel.create(data)
}

const updateBlog = async function(req, res){
    blogModel.findById(blogId)
    let blogData = req.body;

    try{

    if(!blogModel){
         res.status(400).send({status:false, msg:"No such Blog exist"})
     }

    if (!Object.keys(data).length) 
    return 
    res.status(400).send({ status: false, msg: "input can't be empty" })
    
    if (!isValidString(data.title))
    return 
    res.status(400).send({ status: false, msg: "tags is Required" })

    if (!isValidString(data.body)) 
    return
     res.status(400).send({ status: false, msg: "body is Required" })

    if (!isValidString(data.subcategory)) 
    return
     res.status(400).send({ status: false, msg: "SubCategory is Required" })



    if(data.subcategory){
      let subcategory=data.subcategory.split(",").map((x)=>(x.trim()))
    data.subcategory=subcategory
    }

    if (!isValidString(data.tags)) 
    return 
    res.status(400).send({ status: false, msg: "tags is Required" })

    if(data.tags){
      let tags=data.tags.split(",").map((x)=>(x.trim()))
    data.tags=tags
    }

    // let checkBlog = await blogModel.findById(blog_Id)  

    // if(!checkBlog)return res.status(404).send({ status: false, msg: "Blog Not Found" })

    // if (checkBlog.isDeleted == true) return res.status(400).send({ status: false, msg: "This blog is already Deleted" })
    

    // let update = await blogModel.findByIdAndUpdate(blog_Id,

    //   { $push:{tags:data.tags,subcategory:data.subcategory},title:data.title,body:data.body,isPublished: true, publishedAt: new Date()  },
      
    //   { new: true })
   
    // res.status(200).send({ status: true, data: update })





    // let updatedData = await BlogModel.findOneAndUpdate({_id:blogId}, blogData);
    // res.status(201).send({msg:updateData})

}
catch (err) {

    res.status(500).send({ error: err.message })

  }
}


module.exports.createBlog = createBlog
