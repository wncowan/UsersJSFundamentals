var users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },
    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },
    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
  ]

  function userLanguages(arr){
    var result = "";
    arr.forEach(function(value){
        result += value["fname"] + " " + value["lname"] + " knows ";
        for(var i = 0; i < value["languages"].length - 1; i++){
            result += value["languages"][i] + ", ";
        }
        result += "and " + value["languages"][value["languages"].length-1] + "\n"
    });
    return result;
}
console.log(userLanguages(users));