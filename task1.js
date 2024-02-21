function number_types()
{
    massive=[1, 8, 11, 9 , 10, 112 , 87, 13, 0]
    let odd = 0;
    let even = 0;
    let zero = 0;
    let nullcount = 0;

    for (i = 0; i< massive.length; i++)
    {

        if (massive[i] === 0)
        {
            zero++
        }
        else if (massive[i] === null)
        {
            nullcount++
        }
        let number_type = massive[i] % 2;
        if( number_type === 0 )
        {
            even++
        }
        if ( number_type === 1 )
        {
            odd++
        }
    }
    console.log(`четных чисел:${even}, нечетных чисел:${odd},нулей:${zero}, null:${nullcount}`)
}
number_types()