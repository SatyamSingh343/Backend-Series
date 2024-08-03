import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";



    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET ,// Click 'View Credentials' below to copy your API secret
    });


const uploadOnCloudinary=async(localFilePath)=>{
    try{
        if(!localFilePath)return null
        //upload the file on cloudinary
        const response =await cloudinary.uploader.upload(
            localFilePath,
            {
            resource_type:"auto"
        })
        //file has been uploaded succesfully
        //console.log("file is uploaded on cloudinary",response.url);
        fs.unlinkSync(localFilePath)
        return response


    }
    catch (error){
        fs.unlinkSync(localFilePath)// remove the localy saved temporary file as the upload opertaion got failed.
        return null;

    }
}   


const uploadResult = await cloudinary.uploader
.upload(
    'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
        public_id: 'shoes',
    }
)
.catch((error) => {
    console.log(error);

});

export {uploadOnCloudinary}