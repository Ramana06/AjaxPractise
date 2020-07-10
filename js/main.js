// var TheCat=[
//     {
//     "name" : "CatName1",
//     "species" : "cat",
//     "favfood" : "Food1",    
// },

// {
//     "name" : "CatName2",
//     "species" : "cat",
//     "favfood" : "Food2",    
// }
// ]



// TheCat[1].favfood;
// TheCat[1].name;
// TheCat[1].species;
var pageCounter=1;
var animalContainer = document.getElementById("animal-info");
var button= document.getElementById("btn");


button.addEventListener("click",function(){

var ourRequest = new XMLHttpRequest();    
    ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+pageCounter+'.json');
    ourRequest.onload = function(){
       var data = JSON.parse(ourRequest.responseText);
    //    console.log(data);   
       renderHtml(data);
    
    }

    ourRequest.onerror= function(){
        animalContainer.insertAdjacentElement("beforebegin","The page got lost connection");
    }
    ourRequest.send();
    pageCounter++;

    if(pageCounter>3){
        button.classList.add("hide-me")
    }
});

function renderHtml(ourData){

  var srtingHtml= "";

  for (i=0; i<ourData.length;i++){
      
      srtingHtml += "<p>" +ourData[i].name+" is a "+ourData[i].species+" likes ";

      for(ii=0 ; ii<ourData[i].foods.likes.length ; ii++){
            if(ii==0){

                srtingHtml += ourData[i].foods.likes[ii];
            }
            else{
                srtingHtml+= " and "+ourData[i].foods.likes[ii];
            }
      }

      srtingHtml += " and dislikes ";
      for(ii=0 ; ii<ourData[i].foods.dislikes.length ; ii++){
        if(ii==0){

            srtingHtml += ourData[i].foods.dislikes[ii];
        }
        else{
            srtingHtml+= " and "+ourData[i].foods.dislikes[ii];
        }
  }
        srtingHtml += "</p>";

  }

//   ourData.map((data)=>{
//       console.log(data.name);
//   })

  animalContainer.insertAdjacentHTML('beforeend', srtingHtml);
    
   

}

