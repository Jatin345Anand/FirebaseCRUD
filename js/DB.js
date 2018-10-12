var productOperations={
    addProduct:function(productObj){
        firebase.database().ref('products/'+productObj.id).set(productObj);
        console.log('Record added....');
    },
    searchbyID:function(id){
        var productRef = firebase.database().ref('products/'+id);
        productRef.on('value',(snapshot)=>{
            var object = snapshot.val();
            console.log("Object is ",object);
        })
    },
    searchALL:function(){
        var productRef = firebase.database().ref('products/');
        productRef.on('value',(snapshot)=>{
            var object = snapshot.val();
            console.log("Object is ",object);
            
            for(let k in object){
                var obj = object[k];
                console.log("obje ",obj);
            }
        })
    },
    deletebyID:function(id){
        var productRef = firebase.database().ref('products/'+id);
        productRef.remove();
        console.log('Product deleted...');
    }
    // function:alert("Record added...")
    // alert("Record added..");
    // alert("Record added...");
}