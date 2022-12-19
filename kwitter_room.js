
//ADD YOUR FIREBASE LINKS HERE
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
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = ".html";
}

