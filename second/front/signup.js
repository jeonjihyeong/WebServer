function clickEvent(){
    const id =document.getElementById('id').value;
    const pw =document.getElementById('pw').value;
    const age = document.getElementById('age').value;
    const name = document.getElementById('name').value;

    axios.post("http://localhost:3000/signup",{
        id : id,
        pw : pw,
        age: age,
        name : name
    }).then((res)=>{
        console.log(res)
    })
    .catch((error)=>{
        console.log("에러 발생 :", error);
    });
}