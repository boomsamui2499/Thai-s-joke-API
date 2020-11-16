const fizzBuzz = n => {
    const divisible3 = n % 3 === 0;
    const divisible5 = n % 5 === 0;
    return divisible3 && divisible5 ? "FizzBuzz" : divisible3 ? "Fizz" : "Buzz";
  };
  
  console.log(fizzBuzz(25));