const express = require("express")
const app = express()
let mongoose = require("./db/connection.js")
const bodyParser = require("body-parser")

// Models
let Comment = mongoose.model("Comment")
let VideoGame = mongoose.model("VideoGame")
let Favorite = mongoose.model("Favorite")

app.use(bodyParser.json()) //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions


app.get("/api/games",function(req,res){
	VideoGame.find({}).then(function(games){
		res.json(games)
	})
})

app.get("/api/games/:id",function(req,res){
	VideoGame.findOne({_id: req.params.id}).then(function(game){
		res.json(game)
	})
})

app.post("/api/games",function(req,res){
	VideoGame.create(req.body).then(function(game){
		res.json(game)
	})
})

app.delete("/api/games/:id",function(req,res){
	VideoGame.findOneAndRemove({_id: req.params.id}).then(function(){
		res.json({succes: true})
	})
})

app.put("/api/games/:id",function(req,res){
	VideoGame.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).then(function(game) {
			res.json(game)
		})
})


app.listen(3000, () => {
  console.log("app listening on port 3000")
})
