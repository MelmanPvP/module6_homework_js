// function numberline()
// {
//     a = prompt('Введите 1ое число:');
//     b = prompt('Введите 2ое число:');
//
//
// }
// numberline()
// let i = a;
// for (i ; i <= b; i++)
// {
//   interval =  setInterval(function ()
//   {
//       i++
//   }, 1000);
//   console.log(interval);
//     // setTimeout(function ()
//     // {
//     //     clearInterval(interval)
//     // },(b-a+1)*1000)
// }
// // (b-a+1)*1000)
function printNumbersInRange(first,second)
{
    first = prompt('Введите 1ое число:');
    second= prompt('Введите 2ое число:');
  let current = first;
    interval = setInterval(function ()
    {
        console.log(current);
        current++;
        if (current > second)
        {
            clearInterval(interval);
        }
    }, 1000)


}
printNumbersInRange()