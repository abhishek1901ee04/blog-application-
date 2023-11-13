import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url: `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-ccn1iwq-shard-00-00.qfhbybs.mongodb.net:27017,ac-ccn1iwq-shard-00-01.qfhbybs.mongodb.net:27017,ac-ccn1iwq-shard-00-02.qfhbybs.mongodb.net:27017/?ssl=true&replicaSet=atlas-rs4o6g-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    
    file: (request, file) => {
        const match = ["image/png", "image/jpg","image/jpeg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 