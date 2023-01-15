const formidable = require('formidable');
//media streaming
import mongoose from 'mongoose'
let gridfs = null
mongoose.connection.on('connected', () => {
  gridfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db)
})

const uploadVideo=(req,res)=>{
        let form = new formidable.IncomingForm()
        form.keepExtensions = true
        form.parse(req, async (err, fields, files) => {
            if (err) {
              return res.status(400).json({
                error: "Video could not be uploaded"
              })
            }
            let media = new Media(fields)
            media.postedBy= req.profile
            if(files.video){
              let writestream = gridfs.openUploadStream(media._id, {
                contentType: files.video.type || 'binary/octet-stream'})
              fs.createReadStream(files.video.path).pipe(writestream)
            }
            try {
              let result = await media.save()
              res.status(200).json(result)
            }
            catch (err){
                return res.status(400).json({
                  error: errorHandler.getErrorMessage(err)
                }) 
            }
          })     

}
module.exports=uploadVideo