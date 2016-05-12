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
       test: /\.css$/,
       exclude: /node_modules/,
       loader: 'style!css'
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
