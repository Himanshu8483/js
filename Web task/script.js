
let fetchData = async()=>{
    let url='http://localhost:3000/Students'
    let res=await fetch(url, {method:"GET"})
    let data = await res.json()
    dataShow(data);
    console.log(data);
}
let searchStudent = async()=>{
  let searchName=document.querySelector("#name").value.toLowerCase().trim();
  let searchRollNo=document.querySelector("#rollNo").value.trim()
  let searchClass = document.querySelector("#class").value;
  let searchSection = document.querySelector("#section").value;
  let table = document.querySelector("#studentTab");
  let action = document.querySelector("#action"); // Get Action Column Header
  let url='http://localhost:3000/Students'
  let res= await fetch(url, {method:"GET"})
  let data= await res.json();

  let filterData=data.filter((e)=>{
    return (
      (e.name.toLowerCase().includes(searchName)) &&
      (e.rollNo.toString() === searchRollNo) &&
      (e.class === searchClass) &&
      ( e.section === searchSection)
      // (searchSection === "Section" || e.section === searchSection)
    );
  })
  if (filterData.length > 0) {
    table.style.display = "block"; // Show table
    action.style.display = "block"; // Show Action Column
    dataShow(filterData);
  } else {
    table.style.display = "none"; // Hide table if no data found
    Swal.fire({
      title: "Invalid Data!",
      text: "This cannot be empty, Enter all Details.",
      icon: "warning",
      confirmButtonColor: "#0c5d69",
      confirmButtonText: "Understood",
    })
    // alert("No student found!"); 
  }
};

let dataShow=(data)=>{
  let show=document.querySelector("#studentTable")
  show.innerHTML=""
  data.map((e)=>{
      show.innerHTML +=`
      <tr class="row">
          <td>${e.name}</td>
          <td>${e.number}</td>
          <td>${e.class}</td>
          <td>${e.section}</td>
          <td>${e.rollNo}</td>
          <td>${e.feesPaid ? "Paid" : "Not Paid"}</td>
          <td class="payColumn" style="display: none;" onclick="payFees('${e.id}')">Pay</td>

      </tr> `
  })

  // Show "Pay" column after search
  document.querySelectorAll(".payColumn").forEach(col => col.style.display = "block");

};
let payFees = async (id) => {
  let url = `http://localhost:3000/Students/${id}`;
  let res = await fetch(url);
  let data = await res.json();
  data.feesPaid = true;
  
  await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data) 
  });
  // return false;
};
