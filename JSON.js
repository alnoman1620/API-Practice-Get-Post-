//JSON = JavaScript Object Notation
//convert normal object into a stringified version bye ===JSON.stringify()===
const user = {id:11,name:'Sourav',job:'Developer'};
const stringified = JSON.stringify(user);
console.log(stringified);

//convert stringified object into normal object by === JSON.parse() ===
const convertNormal = JSON.parse(stringified);
console.log(convertNormal) 