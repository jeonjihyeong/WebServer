function enterkey() {
	if (window.event.keyCode == 13) {
    	clickEvent();
    }
}


function clickEvent(){
    const id =document.getElementById('id').value;
    const pw =document.getElementById('pw').value;

    axios.post("http://localhost:3000/login",{
        id : id,
        pw : pw
    }).then((res)=>{
        console.log(res.data);
    })
    .catch((error)=>{
        console.log("에러 발생 :", error);
    });
}

const clearValue = ()=> {
    document.getElementById("id").value='';
    document.getElementById("pw").value='';
}