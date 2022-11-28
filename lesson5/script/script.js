// 1)

// for(let i = 1 ; i <=10 ; i++) {
//     console.log(`i`, i);
// }

// for(let j = 20 ; j>= 10 ; j--) {
//     console.log(`j`, j);
// }


// let k = 1;
// while( k <= 10 ) {
//     console.log(`k`, k);
//     k++;
// }


// let l =20;
// while( l >=10) {
//     console.log(`l`, l);
//     l--;
// }


// let a = 1;
// do {
//     console.log(`a`, a);
//     a++;
// }while ( a  <= 10 );

// let b = 20;
// do {
//     console.log(`b`, b);
//     b--;
// }while( b >= 10 );




// 2)


// let naturalNumbers = (start, finish) => {
//     nextPrice:
//     for (let i = start ; i <= finish; i++){
//         for (let j = 2; j < i; j++){
//             if ( i % j == 0){
//                continue nextPrice;
//             }
//         }
//         console.log(i);
//     }
// }

// naturalNumbers(2, 30);


// 3)

 const LOGIN = "ADMIN";
 const PASSWORD = "1q2w3e";

 const authorise = () => {
    let userPassword;
    let userLogin;
    let isAuthSuccess = false;

            do {

                for (let i = 3 ; i >=1 ; i--){
                    alert("Колличество попыток авторизации:" + i );


                    userLogin = prompt("Логин: ");
                    if(!userLogin){
                        alert("Введите логин!");
                        continue;
                    }
    
                    userPassword = prompt("Пароль: ");
                    if(!userPassword){
                        alert("Введите пароль!");
                        continue;
                    }
    
                    if(userPassword === PASSWORD || userLogin === LOGIN){
                        isAuthSuccess = true;

                        break; 
                    }else {
                        alert("Данные не верны!");
                    } 

                    if( i === 1 || isAuthSuccess){
                        alert("Вы не прошли авторизацию!");
                        break;
                    }
                } 

            }while(!isAuthSuccess)
            alert("Welcome!");
        
 };

 authorise();