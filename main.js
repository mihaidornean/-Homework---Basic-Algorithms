//  Basic JavaScript: Stand in Line
console.log("Basic JavaScript: Stand in Line");

function nextInLine(arr, item) {
    
    arr.push(item);
    return arr.shift();
    
  
  }
  
  // Setup
  var testArr = [1,2,3,4,5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

// Basic JavaScript: Golf Code
console.log("Basic JavaScript: Golf Code");

let names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
    function golfScore(par, strokes) {
        // Only change code below this line
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2	) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    }
    else if (strokes == par + 1) {
        return names[4];
    }
    else if (strokes == par + 2) {
        return names[5];
    }
    else if (strokes >= par + 3) {
        return names[6];
    }

}

console.log(golfScore(4, 1));

// Basic JavaScript: Counting Cards
console.log("Basic JavaScript: Counting Cards");

let count = 0;
function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5: 
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    let holdbet = 'Hold';
    if (count > 0) {
    holdbet = 'Bet';
    }
    return count + " " + holdbet;
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

// Basic JavaScript: Profile Lookup
console.log("Basic JavaScript: Profile Lookup");

const contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop){
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property"

        }
    }
    return "No such contact";
// Only change code above this line
}

lookUpProfile("Akira", "likes");

// Basic JavaScript: Record Collection
/// Setup
// const collection = {
//     2548: {
//       albumTitle: 'Slippery When Wet',
//       artist: 'Bon Jovi',
//       tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//       albumTitle: '1999',
//       artist: 'Prince',
//       tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//       artist: 'Robert Palmer',
//       tracks: []
//     },
//     5439: {
//       albumTitle: 'ABBA Gold'
//     }
//   };
//   const collectionCopy = JSON.parse(JSON.stringify(collection));
//   // Only change code below this line
//   function updateRecords(id, prop, value) {
//     if (value === "") {
//       delete collection[id][prop]; 
//   } else if (prop === "tracks") {
//     collection[id][prop] = collection[id][prop] || [];
//     collection[id][prop].push(value);
//   } else {
//     collection[id][prop] = value;
//   }
//   return collection;
//   }
  
//   updateRecords(2468, "tracks", "test");
//   console.log(updateRecords(5439, "ABBA", "Take a Chance on Me"));
  
// Basic Algorithm Scripting: Convert Celsius to Fahrenheit
console.log("Basic Algorithm Scripting: Convert Celsius to Fahrenheit");


function convertToF(celsius) {
  let fahrenheit = celsius * (9/5) + 32;
  if (typeof fahrenheit !== "undefined") {
    return fahrenheit;
  } else {
    return "fahrenheit not defined";
  }

  return fahrenheit ;
}
console.log(convertToF(-30));
console.log(convertToF(-10));
console.log(convertToF(0));
console.log(convertToF(20));
console.log(convertToF(30));

// Basic Algorithm Scripting: Convert Celsius to Fahrenheit
console.log("Basic Algorithm Scripting: Convert Celsius to Fahrenheit");

function reverseString(str) {
  str = str.split("");
  str = str.reverse("");
  str = str.join("");
  return str;
  }
  
  console.log(reverseString("hello"));
  console.log(reverseString("Howdy"));
  console.log(reverseString("Greetings from Earth"));

  // Basic Algorithm Scripting: Factorialize a NumberPassed
  console.log("Basic Algorithm Scripting: Factorialize a NumberPassed");
  
  function factorialize(num) {
    for (var product = 1; num > 0; num--) {
      product *= num;
    }
    return product;
  }
  
  console.log(factorialize(5));
  console.log(factorialize(10));
  console.log(factorialize(20));
  console.log(factorialize(0));

  // Basic Algorithm Scripting: Find the Longest Word in a String
  console.log("Basic Algorithm Scripting: Find the Longest Word in a String");

  function findLongestWordLength(str) {
    var words = str.split(' ');
    var maxLength = 0;
  
    for (var i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
  
    return maxLength;
  }
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
  console.log(findLongestWordLength("May the force be with you"));
  console.log(findLongestWordLength("Google do a barrel roll"));
  console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));
  console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));

  // Basic Algorithm Scripting: Return Largest Numbers in Arrays
  console.log("Basic Algorithm Scripting: Return Largest Numbers in Arrays"); 
  
  function largestOfFour(arr) { 
    var results = [];
    for (var n = 0; n < arr.length; n++) {
      var largestNumber = arr[n][0];
      for (var sb = 1; sb < arr[n].length; sb++) {
        if (arr[n][sb] > largestNumber) {
          largestNumber = arr[n][sb];
        }
      }
  
      results[n] = largestNumber;
    }
  
    return results;
  }
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//   Basic Algorithm Scripting: Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
    var repeatedStr = "";
  
    while (num > 0) {
      repeatedStr += str;
      num--;
    }
  
    return repeatedStr;
  }
  
  repeatStringNumTimes("abc", 3);
  repeatStringNumTimes("abc", 4);
  repeatStringNumTimes("abc", 4);
  repeatStringNumTimes("*", 8);
  repeatStringNumTimes("abc", -2);
  repeatStringNumTimes("abc", 0);

//   Basic Algorithm Scripting: Title Case a Sentence
function titleCase(str) {
    const convertToArray = str.toLowerCase().split(" ");
    const result = convertToArray.map(function(val) {
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(" ");
  } 
titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
  
// Basic Algorithm Scripting: Slice and Splice

function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
      localArray.splice(n, 0, arr1[i]);
      n++;
    }
    return localArray;
  }
frankenSplice([1, 2, 3], [4, 5, 6], 1);
frankenSplice([1, 2], ["a", "b"], 1);
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);

// Basic Algorithm Scripting: Where do I Belong
function getIndexToIns(arr, num) {
    return arr.filter(val => num > val).length;
  }
  getIndexToIns([40, 60], 50);
  
// function steamrollArray(arr) {
 
function steamrollArray(arr) {
    return arr.reduce(function(a, b) {
        return a.concat(Array.isArray(b) ? steamrollArray(b) : b );
    }, []);
}  
steamrollArray([1, [2], [3, [[4]]]]);








