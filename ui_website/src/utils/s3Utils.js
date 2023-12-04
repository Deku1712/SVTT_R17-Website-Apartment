// utils/s3Utils.js
const AWS = require('aws-sdk');
 

export const uploadFileToS3 = (file, s3Config) => {
  AWS.config.update({
    
    accessKeyId: s3Config.accessKeyId,
    secretAccessKey: s3Config.secretAccessKey,
    region: s3Config.region,
  });

  const s3 = new AWS.S3();

  return new Promise((resolve, reject) => {
    s3.upload({
      Bucket: s3Config.bucket,
      Key: file.name,
      Body: file,
      ACL: 'public-read',
      ContentType: file.type,
    }, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
