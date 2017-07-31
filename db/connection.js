let mongoose = require("mongoose")

const database = process.env.MONGODB || "mongodb://localhost/videogamesdb"
console.log("connecting to",database);
let VideoGameSchema = new mongoose.Schema ({
  name: String,
  img_url: String,
  genre: String,
  platforms: Array,
  description: String,
  video_url: String,
  comments: Array
})

let FavoriteSchema = new mongoose.Schema ({
  games: [VideoGameSchema]
})


// mongoose.model("Comment", CommentSchema)
mongoose.model("VideoGame", VideoGameSchema)
mongoose.model("Favorite", FavoriteSchema)
mongoose.connect(database)

module.exports = mongoose





// let mongoose = require("mongoose")
//
// let VideoGameSchema = new mongoose.Schema ({
//   name: String,
//   img_url: String,
//   genre: String,
//   platforms: Array,
//   description: String,
//   video_url: String,
//   comments: Array
// })
//
// let FavoriteSchema = new mongoose.Schema ({
//   games: [VideoGameSchema]
// })
//
//
// // mongoose.model("Comment", CommentSchema)
// mongoose.model("VideoGame", VideoGameSchema)
// mongoose.model("Favorite", FavoriteSchema)
// mongoose.connect("mongodb://localhost/videogamesdb")
//
// module.exports = mongoose
//
//
//
