// Array Challenges:
/*
1.  Declare an array named `teaFlavours` that contains the strings `"green tea"` , `"black tea"`, and `"oolong tea"`.
  Access the first element of the array and store it in a variable named `firstTea`.
  */

let teaFlavours = ["green tea", "black tea", "oolong tea"];

const firstTea = teaFlavours[0];

/*
2. Declare an array named `cities` containing "London","Tokyo", "Paris", and "New York".
   Access the third element in the array and store it in a variable named `favoritecity`.
*/

let cities = ["London", "Tokyo", "Paris", "NEW york"];

const favoritecity = cities[2];
/*
3.You have an array named "teaTypes" containing "herbal tea", " white tea", and " masala chai".
  change the second element of the array to "jasmine tea".
  */
let teaTypes = ["herbal tea", "white tea", "masala chai"];

teaTypes[1] = "jasmine tea";

/*
4.Declare an array named "citiesVisited",containing "Mumbai" and "Sydney" .
      Add "Berlin" to the array using the push method.
      */
let citiesVisited = ["Mumbai", "Sydney"];
//citiesVisited[2]="Berlin"; we can do this only when we know the length of array


/*citiesVisited[citiesVisited.length] = "Berlin";
console.log(citiesVisited); we can do this also but push method is more easier
*/
citiesVisited.push("Berlin");
console.log(citiesVisited);

/*
5.You have an array named "teaorders" with "chai","iced tea","matcha" and "earl grey".
Remove the last element of the array using the  "pop" method and store it in a variable named "lastorder"
*/
let teaorders = ["chai", "iced tea", "matcha", "earl grey"]
const lastorder = teaorders.pop();// pop automatically removes the last element of the array
console.log(teaorders);
console.log(lastorder);

/*
6.
You have an array named "popularteas" containing "green tea", "oolong tea" and "chai".
Create a soft copy of this array named "softcopyteas".
*/
let popularteas = ["green tea", " oolong tea", " chai"];
let softcopyteas = popularteas;
console.log(softcopyteas);
// popularteas.pop();softcopy points to the address of the array so any changes made in array will also be done in its softcopy
// console.log(softcopyteas);
// console.log(popularteas);

/*
7. You  have an array named "topcities", containing "Berlin", "Singapore", and "New York" .
 Create a hard copy of this array named "hardcopycities"
 */
let topcities = ["Berlin", "Singapore", "New York"];
let hardcopycities = [...topcities];//using ...
//let hardcopycities = topcities.slice(); this method does the same
topcities.pop();
console.log(hardcopycities);
//although topcities is changed but it won't affect hardcopy of the array.


/*
8.You have two arrays: "europeancities" containing "Paris" and " Romeo" and "asiancities" containing "
"Tokyo" and "Bankok".
Merge these two arrays into a new array named "worldcities".*/
let europeancities = ["Paris", "Bankok"];
let asiancities = ["Tokyo", "Bankok"];
// let worldcities=[europeancities +  asiancities]; this method treats array as a string 
// let worldcities = [europeancities , asiancities]; this will merge the array but the array created will be a 2D array 
let worldcities = europeancities.concat(asiancities);// using concat we can achieve merging of arrays
console.log(worldcities);

/*
9. You have an array named "teamenu" containing "masala chai", "oolong tea" , "green tea" and "earl grey".
  Find the length of the array and store it in a variable named "menulength"  .
  */
let teamenu = ["masala chai", "oolong tea", "green tea", "earl grey"];
let menulength = teamenu.length;
console.log(menulength);

/*
10.You have an array named "citybucketlist" containing "Kyoto", "London", "Cape Town" and "Vancouver".
check if "London" is in the array and store the result in a variable named "islondoninlist".
*/
let citybucketlist = ["Kyoto", "London", "Cape Town", " Vancouver"];
let islondoninlist = citybucketlist.includes("London");// using .include() 
console.log(islondoninlist);









