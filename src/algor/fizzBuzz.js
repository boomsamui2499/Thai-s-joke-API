let fizzBuzz = n => {
    let divisible3 = n % 3 === 0;
    let divisible5 = n % 5 === 0;
    return divisible3 && divisible5 ? "FizzBuzz" : divisible3 ? "Fizz" : "Buzz";
  };
  
  console.log(fizzBuzz(17));