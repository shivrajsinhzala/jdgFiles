const stringToArray = (string) => {
    return string.trim().split(' ').filter(word => word !== '');
}


console.log(stringToArray("Hello World"));
console.log(stringToArray("  Shivrajsinh   Zala  "));
console.log(stringToArray("  JustDigitalGurus  "));
console.log(stringToArray("   Just -  Digital Gurus  "));
console.log(stringToArray("  Hello    "));
