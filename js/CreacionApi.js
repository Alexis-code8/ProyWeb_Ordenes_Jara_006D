function verjson(){
    let url="http://localhost:3000/miApi";
    fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))
  
    const mostrarData=(data)=>{
      console.log(data)
      let body="";
      for(var i=0; i<data.length;i++){
        body+=`<tr>
        <td>${data[i].id}</td>
        <td>${data[i].Nombre}</td>
        <td><img src="${data[i].img}" ></td>
        <td><a href="${data[i].url}" target="_blank">${data[i].url}</a></td>
        </tr>`;
      }
      document.getElementById('proyects').innerHTML=body;
    }
  }