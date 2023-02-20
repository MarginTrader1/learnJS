const object = { mail: "poly@mail.com", isOnline: true, score: 500 } 
let propCount = 0;
  // Change code below this line
    for (const key in object) {
  
      if (object.hasOwnProperty(key)) {
       propCount += 1;
      }
      console.table(propCount)  
   }

   console.table(propCount)
  
   