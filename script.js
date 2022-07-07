let user = [1, 2323, 2, 54, 5, 4, 12, 4, -3, 55, 7, 74, 55, 43, 7, 90, 8, 354, 3223, 9, 1000, 898, 5657, 10]

bubbleSort(user)
function bubbleSort(arg) {
    for (let i = 0, endI = arg.length - 1; i < endI; (i++)) {
        for (let k = 0, endJ = endI - i; k < endJ; k++) {
            if (arg[k] > arg[k + 1]) {
                let bubbl = arg[k];
                arg[k] = arg[k + 1];
                arg[k + 1] = bubbl;
            }
        }
    }
}
console.log(user);



function prosent(...arg) {
    arg_1 = arg[0]
    arg_2 = arg[1]

    otv = arg_2 / arg_1 * 100

    console.log(`
    Отправили: ${arg_1} 
    Бракованых: ${arg_2} 
    Процент от бракованых : ${otv}%`)
}

prosent(101, 2)






