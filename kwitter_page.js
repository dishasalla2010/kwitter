//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCXyLLnIfdG9FJ7gkMC1haw9B8gP2Ft4vg",
      authDomain: "kwitter-by-disha.firebaseapp.com",
      databaseURL: "https://kwitter-by-disha-default-rtdb.firebaseio.com",
      projectId: "kwitter-by-disha",
      storageBucket: "kwitter-by-disha.appspot.com",
      messagingSenderId: "778316280710",
      appId: "1:778316280710:web:5243aee35f26f6add27207",
      measurementId: "G-XC5S2YDRH4"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig); 

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function send() {
      msg = document.getElementById("msg").ariaValueMax;
      firebase.database().ref(room_name).push({
            name:user_name,
            massage:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}