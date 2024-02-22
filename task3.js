function first_number(a)
{
   // a(1)
   return function second_number(b)
  {
      // b(3)
      // first_number(1)

      return a + b;

  }
  // return second_number(4)
}

console.log(first_number(7)(4))
// first_number(1)
