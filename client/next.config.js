const withTypescript = require('@zeit/next-typescript');
module.exports = withTypescript();

// module.exports = {
//   serverRuntimeConfig: {
//     // Will only be available on the server side
//     mySecret: 'secret'
//   },
//   publicRuntimeConfig: {
//     // Will be available on both server and client
//     CLOUDINARY_URL: 'https://api.cloudinary.com/v1_1/dfook2y2y/image/upload'
//   }
// };
