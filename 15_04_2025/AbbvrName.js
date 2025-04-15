
const abbrName = (firstName, lastName) => {
    const lastNameInitial = lastName.charAt(0).toUpperCase();
    return `${firstName} ${lastNameInitial}.`;
}



console.log(abbrName("Shivrajsinh", "Zala" ));
console.log(abbrName('Manthan', 'sondagar' ));
console.log(abbrName('Raj', 'zinzuvadiya' ));
console.log(abbrName("Nishchay", "Pandya" ));