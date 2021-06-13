var men = ["Jim", "James", "Jane", "Alex"];
var areAllMenMortal = true;

if (areAllMenMortal) {
  console.log("All men are mortal");

 
  for (i = 0; i < men.length; i++) {
    if (men[i] == "Socrates") {
      console.log("Socrates is a man");
      console.log("Therefore, Socrates is mortal");
    } else {
      console.log(men[i] + " is not Socrates but is mortal");
    }
  }
}

