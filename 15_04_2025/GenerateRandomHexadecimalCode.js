const vals = '0123456789abcdef';

const randomHex = () => {
    let code = '';
    arrVal = vals.split('')
    arrVal.map(v=>{
        code = code + vals[Math.floor(Math.random() * vals.length)];
    });
    return code.substring(0, 6);
}

console.log(randomHex());