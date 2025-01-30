let searchStudent = () =>{
  let selectedClass = document.querySelector("#class").value;
  let selectedSection = document.querySelector("#section").value;
  let rollNo = document.querySelector("#section").value;
  let studentTable = document.querySelector("#section");

}

let fetchData= async()=>{
  let url= 'http://localhost:3000/Students';
  let res= await fetch(url, {method:"GET"})
  let data= await res.json()
  console.log(data);
  paginationn(data);
}
let searchh=async()=>{
let rollNo = document.querySelector('#rollNo').value.toLowerCase();
let url= 'http://localhost:3000/Students';
let res= await fetch(url,{ method:"GET"})
  let data = await res.json()
  let filterData=data.filter((e)=>{
    return e.Name.toLowerCase().includes(rollNo) || e.Treatment.toLowerCase().includes(rollNo)|| e.Age.toString().includes(rollNo)
  })
  paginationn(filterData)
}
let paginationn=(data)=>{
$('#pagin').pagination({
  dataSource: data,
  pageSize: 5,
  showSizeChanger: true,
  callback: function(data, pagination) {
    dataShow(data)
  }
})
}
let dataShow=(data)=>{
  let show=document.querySelector("#studentTable")
  show.innerHTML=""
  data.map((e)=>{
      show.innerHTML+= `
      <div class="row">
          <div>${e.name}</div>
          <div>${e.class}</div>
          <div>${e.section}</div>
          <div>${e.rollNo}</div>
          <div>${e.feesStatus}</div>
          <div>${e.Action}</div>
          <div onclick="condel('${e.id}')" class="cancel-button">Cancel</div>
          <div onclick="formFill('${e.id}')" class="cancel-button" id="edit">Edit</div>
      </div> `
  })
}
    
let del =(id)=>{
  let url = `http://localhost:3000/appointment/${id}`
  fetch(url, {method: "DELETE"})
}

// alert script library 
let condel=(id)=>{
Swal.fire({
  title: "Are you sure?",
  text: "This cannot be undone, proceed carefully!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!",
  
}).then((result) => {
  if (result.isConfirmed) {
    del(id)
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});
}