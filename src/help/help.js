
export const showNotification = (setter) => {
    setter(true)
    setTimeout(() => {
        setter(false)
    }, 1000)
}

export function checkWin(correct, wrong, word){
    let status = 'win'

    // check for win
    word.split("").forEach(letter => {
        if(!correct.includes(letter)) {
            status = '';
        }
})



// check for lose
if(wrong.length===10){
    status = 'lose'
}
return status;
}
