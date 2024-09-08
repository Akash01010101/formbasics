document.getElementById("form1").addEventListener("submit",(e)=>{
    e.preventDefault()
    let form = document.getElementById("form1");
    const username = form.firstname.value;
    const password = form.lastname.value;

    fetch("http://localhost:5000/register", {
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({username,password}),
  
    }).catch(err =>{
      console.log(err)
    })
})


