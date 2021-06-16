//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDMAllTYf2wLyPToDje4atZ0Cx3mshYrYU",
      authDomain: "kwitter-e8855.firebaseapp.com",
      databaseURL: "https://kwitter-e8855-default-rtdb.firebaseio.com",
      projectId: "kwitter-e8855",
      storageBucket: "kwitter-e8855.appspot.com",
      messagingSenderId: "952954387501",
      appId: "1:952954387501:web:29c5028e159ffcb1864ca4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            text:msg,
            name:user_name,
            like:0
      });
      document.getElementById("msg").value="";     
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();