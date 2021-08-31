function bill() {

  var a = document.getElementById("bill").value;
  var nu = document.getElementById("tip6").value;
  var testn;
  var b = a;
  var number;
  var ttl;



  document.getElementById("btn1").addEventListener("click", function() {
    var btn1 = 5 / 100;
    var tip = btn1 * b;

    testn = b - tip;


    var amount = document.getElementById("total").innerHTML = " $ " + testn;
    var number = testn;
    number = number.toLocaleString("en-US");
    document.getElementById("total").innerHTML = " $ " + number;


    var rest = document.getElementById("amount-tip").innerHTML = " $ " + tip;
    ttl = tip;
    ttl = ttl.toLocaleString("en-US");
    document.getElementById("amount-tip").innerHTML = " $ " + ttl;









  });

  document.getElementById("btn2").addEventListener("click", function() {
    var btn2 = 10 / 100;
    var tip2 = btn2 * b;
    testn = b - tip2;
    var amount = document.getElementById("total").innerHTML = " $ " + testn;

    var number = testn;
    number = number.toLocaleString("en-US");
    document.getElementById("total").innerHTML = " $ " + number;


    var rest = document.getElementById("amount-tip").innerHTML = " $ " + tip2;
    ttl = tip2;
    ttl = ttl.toLocaleString("en-US");
    document.getElementById("amount-tip").innerHTML = " $ " + ttl;


  });

  document.getElementById("btn3").addEventListener("click", function() {
    var btn3 = 15 / 100;
    var tip3 = btn3 * b;

    testn = b - tip3;
    var amount = document.getElementById("total").innerHTML = " $ " + testn;
    var number = testn;
    number = number.toLocaleString("en-US");
    document.getElementById("total").innerHTML = " $ " + number;


    var rest = document.getElementById("amount-tip").innerHTML = " $ " + tip3;
    ttl = tip3;
    ttl = ttl.toLocaleString("en-US");
    document.getElementById("amount-tip").innerHTML = " $ " + ttl;


  });
  document.getElementById("btn4").addEventListener("click", function() {
    var btn4 = 25 / 100;
    var tip4 = btn4 * b;
    testn = b - tip4;
    var amount = document.getElementById("total").innerHTML = " $ " + testn;
    var number = testn;
    number = number.toLocaleString("en-US");
    document.getElementById("total").innerHTML = " $ " + number;


    var rest = document.getElementById("amount-tip").innerHTML = " $ " + tip4;
    ttl = tip4;
    ttl = ttl.toLocaleString("en-US");
    document.getElementById("amount-tip").innerHTML = " $ " + ttl;

  });

  document.getElementById("btn5").addEventListener("click", function() {
    var btn5 = 50 / 100;
    var tip5 = btn5 * b;
    testn = b - tip5;
    var amount = document.getElementById("total").innerHTML = " $ " + testn;
    var number = testn;
    number = number.toLocaleString("en-US");
    document.getElementById("total").innerHTML = " $ " + number;


    var rest = document.getElementById("amount-tip").innerHTML = " $ " + tip5;
    ttl = tip5;
    ttl = ttl.toLocaleString("en-US");
    document.getElementById("amount-tip").innerHTML = " $ " + ttl;

  });




  document.getElementById("tip6").onkeyup = function() {

    myMethod()
  };



  function myMethod() {
    var nu = document.getElementById("tip6");
    var final = nu.value = nu.value;
    var sns = final / 100;
    var tip6 = sns * b;
    tes = b - tip6;
    
   document.getElementById("amount-tip").innerHTML = " $ " + tes ;
   var number = tes;
   number = number.toLocaleString("en-US");
   document.getElementById("total").innerHTML = " $ " + number;


  var rest = document.getElementById("amount-tip").innerHTML = " $ " + tip6;
   ttl = tip6;
   ttl = ttl.toLocaleString("en-US");
   document.getElementById("amount-tip").innerHTML = " $ " + ttl;


  };





};






// function handle() {
//
//   var a = document.getElementById("input").value;
//
//
//   var x = 10;
//   var b = x * a
//
//   var bust = document.getElementById("total").innerHTML = " $ " + b;
//
//   document.getElementById("btn1").addEventListener("click", function() {
//     var btn1 = 5 / 100;
//     var tip = btn1 * b;
//     document.getElementById("amount-tip").innerHTML = " $ " + tip;
//     document.getElementById("bill").innerHTML = tip + b;
//
//     document.getElementById("amount-tip").innerHTML = " $ " + num;
//
//
//
//   });
//
//   document.getElementById("btn2").addEventListener("click", function() {
//     var btn2 = 10 / 100;
//     var tip2 = btn2 * b;
//     document.getElementById("amount-tip").innerHTML = " $ " + tip2;
//     document.getElementById("bill").innerHTML = tip2 + b;
//   });
//
//   document.getElementById("btn3").addEventListener("click", function() {
//     var btn3 = 15 / 100;
//     var tip3 = btn3 * b;
//     document.getElementById("amount-tip").innerHTML = " $ " + tip3;
//     document.getElementById("bill").innerHTML = tip3 + b;
//   });
//
//   document.getElementById("btn4").addEventListener("click", function() {
//     var btn4 = 25 / 100;
//     var tip4 = btn4 * b;
//     document.getElementById("amount-tip").innerHTML = " $ " + tip4;
//     document.getElementById("bill").innerHTML = tip4 + b;
//   });
//
//   document.getElementById("btn5").addEventListener("click", function() {
//     var btn5 = 50 / 100;
//     var tip5 = btn5 * b;
//     document.getElementById("amount-tip").innerHTML = " $ " + tip5;
//     document.getElementById("bill").innerHTML = tip5 + b ;
//
//   });
//
//   document.getElementById("tip6").onkeyup = function() {
//
//     myMethod()
//   };
//
//
//
//
//
// };
//
//
//
// var reload = document.getElementById("reload");
// function reset(){
// reload= location.reload();
//
// }
