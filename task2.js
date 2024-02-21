// number = prompt('Введите любое число:');
function numbertype(number)
{
    // number = prompt('Введите любое число:');
    if (number === 0 || number === 1)
    {
        alert('Данное число является либо 0 либо 1,поэтому не относится ни к простым,ни к составным');
    }
    else if( number <= 1000)
    {
        let number1 = true;
        for (let i = 2; i < number; i++)

        {
            if (number % i === 0)
            {
                number1 = false;
                break;
            }
        }
        alert( number1 ? 'Данное число простое' : 'Данное число является составным')

    }
    else
    {
        alert('Данные неверны');
    }
}
numbertype(3);