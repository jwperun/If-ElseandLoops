var containerEle=document.body.querySelector(".container");
var animals = ["dog", "fish", "cat", "shark", "cat", "dog"];
var submitEle = document.querySelector(".submit");

//2=="2" will run true; 
//2==="2" will not run true; it is looking for same value type 

function Check(animals){
  for(var i=0; i<animals.length; i++){
    if(animals[i]==="cat"){
      var ele = document.createElement("div");
      ele.innerHTML= "I am a cat"
      containerEle.appendChild(ele);
  }
    else if(animals[i]==="dog"){
      var ele = document.createElement("div");
      ele.innerHTML= "borf borf"
      containerEle.appendChild(ele);
  }
    else{
      var ele = document.createElement("div");
      ele.innerHTML= "I'm an animal"
      containerEle.appendChild(ele);
    }
  
  }
  
}

function shuffle(animals) {
  containerEle.innerHTML = ""
  animals = animals.sort(() => Math.random() - 0.5)
  Check(animals);
}

Check(animals);

submitEle.addEventListener("click", function () {
   shuffle(animals);
  });