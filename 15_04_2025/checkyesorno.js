let userinput = "yEs"

let choice = null;


function checkYesOrNo(userinput){


if(userinput.trim().toLowerCase() === "yes" || userinput.trim().toLowerCase() === "y"){
    choice = true;

}
else if(userinput.trim().toLowerCase() === "no" || userinput.trim().toLowerCase() === "n"){
    choice = false;

}
else{
   
    choice = null;
}

return choice;
}

console.log(checkYesOrNo(userinput));