window.addEventListener("load", init);
var object = {};
var counter;

var id;
const increment = () => {
    id = counter.next().value;
    document.querySelector("#pid").innerHTML = id;

}

function init() {
    document.querySelector("#add").addEventListener("click", ADD);
    document.querySelector("#delete").addEventListener("click", DELETE);
    document.querySelector("#search").addEventListener("click",SEARCH);
    document.querySelector("#searchall").addEventListener("click",SEARCHALL);
    counter = autoGen();
    increment();
}
function SEARCHALL(){
    productOperations.searchALL();
}
function SEARCH(){
   var ID = document.querySelector("#id").value;
   productOperations.searchbyID(ID);   
//    var pr = productOperations.searchbyID(ID);
   
   document.querySelector("#showhide").className = 'show';
}
function ADD() {
    var price = document.querySelector("#price").value;
    var url = document.querySelector("#url").value;
    
    console.log("Data is " + id + " " + price + " " + url);
    var productObj = new Product(id, price, url);
    productOperations.addProduct(productObj);
    increment();
    // document.querySelector("#showhide").className = 'hide';
}

function DELETE() {
    var ID = document.getElementById('id').value;
    productOperations.deletebyID(ID);
    console.log("Record deleted...");
}