// module.exports = {
//   db: {
//     provider: "mongodb",
//     connection: process.env.MONGODB_URI || 'mongodb://heroku_d8xcswps:tli6vf3i1lm28kkhj9os7rsmtb@ds143231.mlab.com:43231/heroku_d8xcswps'
//   }
// };

module.exports = {
 db: {
   provider: "mongodb",
   // connection: process.env.MONGODB_URI || 'mongodb://heroku_d8xcswps:tli6vf3i1lm28kkhj9os7rsmtb@ds143231.mlab.com:43231/heroku_d8xcswps'
   // connection: process.env.MONGODB_URI || 'mongodb://heroku_ccjpm1fc:lbsoo34i6ej209k0ap381nil5j@ds053788.mlab.com:53788/heroku_ccjpm1fc'
   connection: process.env.MONGODB_URI || 'mongodb://tvcusrx364:m87&adke#89@ds053788.mlab.com:53788/tvcweb-01'
   // copied from heroku>trivalleycoders>settings>config variables> MONGODB_URI mongodb://heroku_ccjpm1fc:lbsoo34i6ej209k0ap381nil5j@ds133582.mlab.com:33582/heroku_ccjpm1fc
 }
};
