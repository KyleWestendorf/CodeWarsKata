// Note: Some assitance pulled from the following repository: https://github.com/Bachyla/CodeWars/blob/master/JavaScript/5%20kuy/using-closures-to-share-class-state.js

var Cat = (function (name, weight) {

 
 let numberCats = 0;
 let totalWeight = 0;
 let averageWeight = 0;
  
 function Cat(name, weight) {
 if (!(weight || name)){
  throw new Error();
 }
 
  numberCats++;
  this.name = name;
  
  Object.defineProperty(this, 'weight', {
    get: function() {
      return this._weight || 0;
    },
    set: function(val) { 
     totalWeight = totalWeight - this.weight + val;
     averageWeight = totalWeight / numberCats;
      return this._weight = val;
    }
  });
   this.weight = weight;
 }
 
Cat.averageWeight = () => {
  return averageWeight;
}

return Cat;
}());
