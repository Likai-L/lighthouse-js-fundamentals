for (let num = 100; num <= 200; num++) {
  if (num % 3 === 0) {
    if (num % 4 === 0) {
      console.log("LoopyLighthouse");
    } else {
      console.log("Loopy");
    }
  } else if (num % 4 === 0) {
    console.log("Lighthouse");
  } else {console.log(num)};
}