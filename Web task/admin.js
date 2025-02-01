// for students comple data
let fetchAdmin = async()=>{
    let url='http://localhost:3000/Students'
    let res=await fetch(url, {method:"GET"})
    let data = await res.json()
    console.log(data);
    paginationn(data)
}
// for search by details 
let searchh=async()=>{
    let searchInp=document.querySelector("#searchInp").value.toLowerCase().trim();
    let url= 'http://localhost:3000/Students';
    let res= await fetch(url,{ method:"GET"})
      let data = await res.json()
      let filterData=data.filter((e)=>{
      return e.name.toLowerCase().includes(searchInp) || e.number.toLowerCase().includes(searchInp)|| e.class.toString().includes(searchInp)
    })
      paginationn(filterData)
  }
  let paginationn=(data)=>{
    $('#pagin').pagination({
      dataSource: data,
      pageSize: 5,
      showSizeChanger: true,
      callback: function(data, pagination) {
        dataSo(data)
      }
  })
  }
let dataSo=(data)=>{
  let show=document.querySelector("#studentData")
  show.innerHTML=""
  data.map((e)=>{
      show.innerHTML +=`
      <tr class="row">
          <td>${e.name}</td>
          <td>${e.class}</td>
          <td>${e.section}</td>
          <td>${e.number}</td>
          <td>${e.rollNo}</td>
          <td>${e.id}</td>
          <td>${e.tution+e.library+e.exam}</td>
          <td>${e.feesPaid ? "✅ Paid" : "❌ Not Paid"}</td>
      </tr> `
  })
};