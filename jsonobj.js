const json1 = '{"name": "Person1", "age": 5 }';
const json2 = '{"age": 5, "name": "Person1"}';

const obj1 = JSON.parse(json1);
const obj2 = JSON.parse(json2);

const sortedObj1 = {};
Object.keys(obj1).sort().forEach(key => {
  sortedObj1[key] = obj1[key];
});

const sortedObj2 = {};
Object.keys(obj2).sort().forEach(key => {
  sortedObj2[key] = obj2[key];
});

const sortedJson1 = JSON.stringify(sortedObj1);
const sortedJson2 = JSON.stringify(sortedObj2);

console.log(sortedJson1 === sortedJson2); 
