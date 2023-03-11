const input = document.getElementById('input');
const button = document.getElementById('btn');


button.addEventListener ('click' ,  function() {
    // const color = input.value;
    if(input.value === "blue"){
        document.body.style.backgroundColor = "blue";
        return;
    }
    if(input.value ==="red"){
        document.body.style.backgroundColor = "red";
        return
    }
    if(input.value ==="green"){
        document.body.style.backgroundColor = "green";
        return
    }
    if(input.value ==="white"){
        document.body.style.backgroundColor = "white";
        return
    }
    if(input.value ==="black"){
        document.body.style.backgroundColor = "black";
        return
    }else{
        return alert("Wrong Color");
    }
});