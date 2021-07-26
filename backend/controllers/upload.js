const fs = require('fs');
const path = require('path');
const successResponse = require('../lib/responses/successResponse');
const errorResponse = require('../lib/responses/errorResponse');

module.exports = {
    uploadRecipeImage: (req, res) => {
        try {
            const allowedTypes = [
                'image/jpeg',
                'image/gif',
                'image/png',
                'image/jpg'
            ];
            const maxFileSize = 5 * 1024 * 1024;
    
            const file = req.files.image;
    
            if (!allowedTypes.includes(file.mimetype)) {
                return errorResponse(res, 400, new Error('File type is not allowed!'));
            }
    
            if (file.size > maxFileSize) {
                return errorResponse(res, 400, new Error('File size exceeds the allowed size limit!'));
            }
    
            const uploadsRootDirectory = path.join(__dirname, '..', 'uploads');
            const uploadDirectory = path.join(_dirname, '..', 'uploads', 'recipes')
            if(!fs.existsSync(uploadsRootDirectory)) {
                fs.mkdirSync(uploadsRootDirectory);
            }
            if(!fs.existsSync(uploadDirectory)) {
                fs.mkdirSync(uploadDirectory);
            }
    
            const fileName = `${req.user.id}_${file.name}`;
            file.mv(`${uploadDirectory}/${fileName}`);
    
            successResponse(res, `File with name ${fileName} is uploaded successfully` ); 
        } catch (error) {
            errorResponse(res, 500, error);
        }
       

    },
    uploadUserAvatar: (req, res) => {
        try {
            const allowedTypes = [
                'image/jpeg',
                'image/gif',
                'image/png',
                'image/jpg'
            ];
            const maxFileSize = 5  * 1024 * 1024;
            const file = req.files.image;
    
            if(!allowedTypes.includes(file.mimetype)) {
                return errorResponse(res, 400, new Error('File type is not allowed!'));
            }
            if(file.size > maxFileSize) {
                return errorResponse(res, 400, new Error('File size exceeds the allowed size limit!'));
            }
    
            const uploadsRootDirectory = path.join(_dirname, '..', 'uploads');
            const uploadDirectory = path.join(_dirname, '..', 'uploads', 'avatar');
    
            if(!fs.existsSync(uploadsRootDirectory)) {
                fs.mkdirSync(uploadsRootDirectory);
            }
            if(!fs.existsSync(uploadDirectory)) {
                fs.mkdirSync(uploadDirectory);
            }
    
            const fileName = `${req.user.id}_${file.name}`;
            file.mv(`${uploadDirectory}/${fileName}`);
    
            successResponse(res, `file with name ${fileName} is uploaded successfully`);
        } catch (error) {
            errorResponse(res, 500, error);
        }
    }
}