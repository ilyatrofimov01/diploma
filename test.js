
// const input = document.querySelector('.search');
// console.log(input.part.value);
// input.onsearch = () => {
//     console.log ('it was');
// }
const searchBar = document.getElementById("searchBar");
const searchButton = document.getElementById("searchButton");
searchButton.onclick = function() {
   
   // alert(searchBar.value);
    if (searchBar.value == "1"){
    //     document.location.replace("http://127.0.0.1:5500/Visit.html");
    //   window.open('http://127.0.0.1:5500/Visit.html',"_self");
    //   window.location.href ="http://127.0.0.1:5500/Visit.html"; 
      alert(searchBar.value);
      window.open("http://127.0.0.1:5500/Visit.html","_self");
    }


}



// searchBar.onclick = function() {
//     console.log('Click!')

// }
