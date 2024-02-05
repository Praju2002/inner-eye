const router=require('express').Router();
const{createBlog, getBlog, updateBlog, updateBlogImage, deleteBlog, deleteBlogImage}=require("../../controllers/blog.controller")
const upload=require('../../middlewares/multer.middleware')
const blogUpload=upload.fields([
    {name:'image',maxCount:1},
    {name:'authorImage',maxCount:1}
]
)
router.route("/").post(blogUpload,createBlog).get(getBlog);
router.route("/:blogId").patch(updateBlog).delete(deleteBlog);
router.route("/:blogId/image").patch(blogUpload,updateBlogImage).delete(blogUpload,deleteBlogImage);
module.exports=router;