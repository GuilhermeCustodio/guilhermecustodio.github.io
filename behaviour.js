function delay(milliseconds){
  return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
  });
}

async function init(){
  await delay(10000);
  document.getElementById("body").style.backgroundImage = "url(IMG_20220701_145621.jpg)";
  console.log("Sucesso");
}

window.addEventListener('load', (event) => { 
  console.log('page is fully loaded');
  init()   
});