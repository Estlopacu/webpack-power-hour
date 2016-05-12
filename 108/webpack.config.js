module.exports = {
 entry: ["./app.js"],
 output: {
   filename: "bundle.js"
 },
 module: {
   loaders: [
     {
       test: [/\.js$/, /\.es6$/],
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
         presets: ['react', 'es2015']
       }
     },
     {
       test: /\.scss$/,
       exclude: /node_modules/,
       loader: 'style!css!sass'
     },
     {
       test: /\.(jpg|png|gif)$/,
       include: /images/,
       loader: 'url'
     }
   ]
 },
 resolve: {
   extensions: ['', '.js', '.es6']
 },
 devServer: {
     inline:true,
     port: 8888
 }
}
