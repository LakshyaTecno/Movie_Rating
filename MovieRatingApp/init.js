const Movie = require("./models/movieSchema")
module.exports = async () => {
  try {
    await Movie.collection.drop();
    const movies = await Movie.insertMany([
      {
        movieId: "111",
        name:"Maniac",
        description:"Two strangers are drawn to a mysterious pharmaceutical trial for a drug that they're assured will, with no complications or side-effects whatsoever, permanently solve all of their problems. Things do not go as planned.",
        artists:["Emma Stone" , "Jonah Hill" ,"Sonaya Mizuno"],
        rating : "7.7",
        director:"Carefoy",
        time:"156"
      },
      {
        movieId: "112",
        name:"Resident Evil",
        description:"A special military unit fights a powerful, out-of-control supercomputer and hundreds of scientists who have mutated into flesh-eating creatures after a laboratory accident.",
        artists:["Milla  Jovovich", "Michelle Rodrig" ,"Ryan McCluskey"],
        rating : "6.6",
        director:"Paul Anderson",
        time:"100"
      },
      {
       
        movieId: "113",
        name:"Mohenjo Daro",
        description:"In 2016 BC, a kind farmer leads an uprising in the city of Mohenjo Daro.",
        artists:["Hrithik Roshan", "Pooja Hegde" ,"Kabir Bedi"],
        rating : "5.6",
        director:"Paul Carey",
        time:"153"
    },
    {
       
        movieId: "114",
        name:"Circle Of 8",
        description:"When a number one SWAT team known as the are killed during an  the number two team known as the Circle of 8 step up and vow to bring justice by any means necessary.",
        artists:["John Bishop", "Kirk Bovill"],
        rating : "3.7",
        director:"Stephen Cragg",
        time:"83"
    },
    ]);
    console.log(movies);
  } catch (err) {
    console.log("err in db initialization", err.message);
  }
};