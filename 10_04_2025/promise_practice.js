const pageone = false;
const pageTwo = true;
const pageThree = true;

const oneWebpageCreated = new Promise((resolve, reject)=>{
  if (pageone) {
  setTimeout(()=>{
        const webpageOne = 'Webpage 1 created';
        resolve(webpageOne);
    }, 3000);
  } else {
    reject('Page 1 not created');
  }
})

const secondWebpageCreated = new Promise((resolve, reject) => {
  if (pageTwo) {
  setTimeout(() => {
    const webpageTwo = "Webpage 2 created";
    resolve(webpageTwo);
  }, 1000);
  } else {
    reject('Page 2 not created');
  }
});


const thirdWebpageCreated = new Promise((resolve, reject) => {
  if (pageThree) {
  setTimeout(() => {
    const webpageThree = "Webpage 3 created";
    resolve(webpageThree);
  }, 500);
  } else {
    reject('Page 3 not created');
  }
});


Promise.race([oneWebpageCreated, secondWebpageCreated, thirdWebpageCreated]).then((message)=>{
    console.log("\n\nfrom Promise.race: ", "\n\t ", message);
}).catch((error) => {
    console.error("\n\nfrom Promise.race: ", "\n\t ", error);
});


Promise.all([oneWebpageCreated, secondWebpageCreated, thirdWebpageCreated]).then((message) => {
    console.log("\n\nfrom Promise.all: ", "\n\t ", message);
}).catch((error) => {
    console.error("\n\nfrom Promise.all: ", "\n\t ", error);
});


async function checkWebpages() {
  try{

    const resultOne = await oneWebpageCreated;
    const resultTwo = await secondWebpageCreated;
    const resultThree = await thirdWebpageCreated;
    console.log("\n\nThis is the response from checkWebPages: ", "\n\t ",  resultOne, "\n\t ",  resultTwo, "\n\t ", resultThree);
    
  } catch (error) {
    console.error("\n\nError in checkWebpages: ", error);
  }
}
checkWebpages();