const mongoose= require('mongoose');
const Schema=mongoose.Schema;

const listingSchema= new Schema({
    title:{
      type:String,
      required:true,
    },
    description:String,
    // default:"https://images.unsplash.com/photo-1704714695191-a40c000ff64b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
    image:{
        
       type: String,
       set:(v) => v === ""?"https://images.unsplash.com/photo-1704714695191-a40c000ff64b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8" : v,
    },
    price:Number,
    location:String,
    country:String,



});

var listing = mongoose.model("Listing",listingSchema);
module.exports=listing;