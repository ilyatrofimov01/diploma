const searchBar = document.getElementById("searchBar");
const searchButton = document.getElementById("searchButton");
searchButton.onclick = function() {

    switch (searchBar.value){
        case "Egypt":window.open("http://127.0.0.1:5500/Egypt.html");
        break;
        case "egypt":window.open("http://127.0.0.1:5500/Egypt.html");
        break;
        case "eg":window.open("http://127.0.0.1:5500/Egypt.html");
        break;
        case "Египет":window.open("http://127.0.0.1:5500/Egypt.html");
        break;
        case "египет":window.open("http://127.0.0.1:5500/Egypt.html");
        break;
        case "tubgtn":window.open("http://127.0.0.1:5500/Egypt.html");
        break;
        case "Tubgtn":window.open("http://127.0.0.1:5500/Egypt.html");
        break;

    }
    // if (searchBar.value == "1"){
    //      document.location.replace("http://127.0.0.1:5500/Visit.html");
    //    window.open('http://127.0.0.1:5500/Visit.html',"_self");
    //    window.location.href ="http://127.0.0.1:5500/Visit.html"; 
    //   alert(searchBar.value);
    //    window.open("http://127.0.0.1:5500/Egypt.html","_self");
    // window.open("http://127.0.0.1:5500/Egypt.html");
    // }
    
}

   var firebaseConfig = {
    apiKey: "AIzaSyD1ZmTnhN_w1yjjVYl-n11B2NWDp_dCYp8",
    authDomain: "way-for-travel.firebaseapp.com",
    databaseURL: "https://way-for-travel.firebaseio.com",
    projectId: "way-for-travel",
    storageBucket: "way-for-travel.appspot.com",
    messagingSenderId: "845786934694",
    appId: "1:845786934694:web:004c436b11f3fc2bba3367"
  };
  firebase.initializeApp(firebaseConfig);

 