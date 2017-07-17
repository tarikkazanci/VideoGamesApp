let mongoose = require("./connection.js")
let gameData = require("./games.json")


let Comment = mongoose.model("Comment")
let VideoGame = mongoose.model("VideoGame")
let Favorite = mongoose.model("Favorite")

Comment.remove({}).then(()=>{
	Comment.collection.insert().then(()=>{
		console.log("seeds function fired")
		process.exit();
	})
})

VideoGame.remove({}).then(()=>{
	VideoGame.collection.insert(gameData).then(()=>{
		console.log("seeds function fired")
		process.exit();
	})
})

Favorite.remove({}).then(()=>{
	Favorite.collection.insert().then(()=>{
		console.log("seeds function fired")
		process.exit();
	})
})
