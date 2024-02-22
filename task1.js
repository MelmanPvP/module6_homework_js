let  massive=[1, 8, 'привет', 9 , 10, 112 , 87, 13, 0]
let odd = 0;
let even = 0;
let zero = 0;
let nullcount = 0;
function number_types()
{


    for (i = 0; i< massive.length; i++)
    {
        if (typeof (massive[i])!== 'number')
        {
            continue;
        }
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
        else
        {
            odd++
        }
    }
    console.log(`четных чисел:${even}, нечетных чисел:${odd},нулей:${zero}, null:${nullcount}`)
}
number_types()