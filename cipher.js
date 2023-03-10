const array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']
const array2 = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const emptyArray = []


function decoder(str){
    for(let i = 0; i < str.length; i++){
        if(array1.indexOf(str[i]) !== -1){
            emptyArray.push(array2[array1.indexOf(str[i])])
        } else if(array2.indexOf(str[i]) !== -1){
            emptyArray.push(array1[array2.indexOf(str[i])])
        } 
    }
    return emptyArray.join('')
}

console.log(decoder('vybirpelcgbtencul!'))

// function encrpyt(str){
//     for(let i = 0; i < str.length; i++){
//         if(array2.indexOf(str[i]) !== -1){
//             emptyArray.push(array1[array2.indexOf(str[i])])
//         } else if (array1.indexOf(str[i]) !== -1){
//             emptyArray.push(array2[array1.indexOf(str[i])])
//         }
//     }
//     return emptyArray.join('')
// }

// console.log(encrpyt('ilovecryptography'))