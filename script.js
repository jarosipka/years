for (let rok = 1980; rok <= 2030; rok++) {
    let vystup = "";
  
    if (rok % 4 == 0) {
      vystup += "P";
    }
  
    if (rok % 10 == 0) {
      vystup += "O";
    }
  
    if (rok == 1989) {
      vystup += "N";
    }
  
    console.log(rok + " " + vystup);
  }
