var a = 1, b = 8, c = 6;

(function firstFunction(){
  var b = 5, c = 6;

  (function secondFunction(){
    var b = 8;

    (function thirdFunction(){
      var a = 7, c = 9;

      (function fourthFunction(){
        var a = 1, c = 6;

      })();
    })();
  })();
})();

console.log("a: "+a+", b: "+b+", c: "+c);
