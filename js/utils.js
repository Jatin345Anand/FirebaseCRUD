// var config = {
//     apiKey: "AIzaSyDYVzINrJJ-UmVBPP52hmBPoZxR6Fu6niI",
//     authDomain: "jatinclassmarkertestengine.firebaseapp.com",
//     databaseURL: "https://jatinclassmarkertestengine.firebaseio.com",
//     projectId: "jatinclassmarkertestengine",
//     storageBucket: "jatinclassmarkertestengine.appspot.com",
//     messagingSenderId: "506095824487"
// };
// firebase.initializeApp(config);



var config = {
    apiKey: "AIzaSyA_WwIqoetiws8CJ8ML1yNBoXzWqfKcGs0",
    authDomain: "e-commercedbjatin.firebaseapp.com",
    databaseURL: "https://e-commercedbjatin.firebaseio.com",
    projectId: "e-commercedbjatin",
    storageBucket: "",
    messagingSenderId: "937522639175"
};
firebase.initializeApp(config);
console.log(`Firebase loaded.. `, firebase);
function* autoGen(){
    var counter =1;
    while(true){
     yield counter;
     counter++;
    }
}