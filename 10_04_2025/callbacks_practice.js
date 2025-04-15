const userleft = true;
const catmeme = false;

function watchCallback(callback, errorCallback){
  if(userleft){
    errorCallback({
      name: "userleft",
      message:"he wasnt watching cat meme"
    })
  }
  else if(catmeme){
    errorCallback({
      name:"user watching something",
      message:"he is watching catmeme"
    })
  }
  else{
    callback({
      name:"no one is here",
      message:"this looks like blackhole"
    })
  }
  
  
}

watchCallback((message)=>{
  console.log("success: " + message.message + " , " + message.name);
}, (error) =>{
  console.log("error: " + error.name + " , " + error.message)
})