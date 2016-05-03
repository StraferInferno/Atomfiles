// function one(cb){
//   console.log("one");
//   setTimeout(cb, 1000);
// };
//
// function two(cb){
//   console.log("two");
//   setTimeout(cb, 1000);
// };
//
// function three(){
//   console.log("three");
// };
//
// one(function(){
//   two(three);
// });


function addAsync(x,y,cb) {
  setTimeout(function () {
    cb(x+y);
  },1000);
};

var thunk = makethunk(addAsync,10, 15);

function makethunk(fn,num1, num2) {
  return function(cb) {
      fn(num1,num2,cb);
    }
};

thunk(function(sum){
  console.log(sum);
 });
