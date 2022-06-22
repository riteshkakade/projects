const express = require('express');
const router = express.Router();
const AuthorController= require("../controllers/authorController")
const BlogController= require("../controllers/blogController")

router.post('/authors',AuthorController.createAuthor)
router.post('/blogs',BlogController.createBlog)
router.put("blogs/:blogId",BlogController.updateBlog)



module.exports = router;
