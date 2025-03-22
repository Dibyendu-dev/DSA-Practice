// "input"- my name    is dibyendu  das "output"-das dibyendu is name my

const reverseOrder = function (s){
    const splitStr = s.split(" ");
    const stack = []

    for(let i of splitStr){
        stack.push(i);
    }
    let finalS='';
    while(stack.length){
        let current= stack.pop()
        if(current){
            finalS +=" "+current
        }
    }
    return finalS.trim();
}

console.log(reverseOrder("my name   is dibyendu  das")) ;