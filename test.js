function test() {
  console.log(x);
  const x;

  f1();
  function f1() {
    // var x = 6;
    console.log(x);
  }
  //   var x = 22;
}

test();
