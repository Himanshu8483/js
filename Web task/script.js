let fetchData = async()=>{
    let url='http://localhost:3000/Students'
    let res=await fetch(url, {method:"GET"})
    let data = await res.json()
    dataShow(data);
  console.log(data);
}

let dataShow=(data)=>{
  let show=document.querySelector("#studentTable")
  show.innerHTML=""
  data.map((e)=>{
      show.innerHTML = `
      <tr class="row">
          <td>${e.name}</td>
          <td>${e.number}</td>
          <td>${e.class}</td>
          <td>${e.section}</td>
          <td>${e.rollNo}</td>
          <td>${e.feesPaid}</td>
          <div onclick="paid('${e.id}')" id="pay">Pay</div>
      </tr> `
  })
}