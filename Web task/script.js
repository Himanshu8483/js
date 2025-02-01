// for students 
let fetchData = async()=>{
    let url='http://localhost:3000/Students'
    let res=await fetch(url, {method:"GET"})
    let data = await res.json()
    dataShow(data);
    console.log(data);
}
// for search by details 
let searchStudent = async()=>{
  let searchName=document.querySelector("#name").value.toLowerCase().trim();
  let searchRoll=document.querySelector("#rollNo").value.toString().trim();
  let searchId=document.querySelector("#inpId").value.toLowerCase().toString().trim()
  let searchClass = document.querySelector("#class").value;
  let searchSection = document.querySelector("#section").value;
  let table = document.querySelector("#studentTab");
  let url='http://localhost:3000/Students'
  let res= await fetch(url, {method:"GET"})
  let data= await res.json();

  let filterData=data.filter((e)=>{
    return (
      (e.name.toLowerCase().includes(searchName)) &&
      (e.id.toString().toLowerCase().trim() === searchId) &&
      (e.rollNo.toString().trim() == searchRoll) &&
      (e.class === searchClass) &&
      ( e.section === searchSection)
      // (searchSection === "Section" || e.section === searchSection)
    );
  })
  if (filterData.length > 0) {
    table.style.display = "table"; // Show table
    dataShow(filterData);
  } else {
    table.style.display = "none"; // Hide table if no data found
    Swal.fire({
      title: "Invalid Data!",
      text: "This cannot be wrong/empty, Enter Correct Details.",
      icon: "warning",
      confirmButtonColor: "#0c5d69",
      confirmButtonText: "Understood",
    })
  }
};

let dataShow=(data)=>{
  let show=document.querySelector("#studentTable")
  show.innerHTML=""
  data.map((e)=>{
      show.innerHTML +=`
      <tr class="row">
          <td>${e.name}</td>
          <td>${e.class}</td>
          <td>${e.section}</td>
          <td>${e.id}</td>
          <td>${e.tution}</td>
          <td>${e.library+e.exam}</td>
          <td>${e.tution+e.library+e.exam}</td>
          <td>${e.feesPaid ? "✅ Paid" : "❌ Not Paid"}</td>
          <td>
            <button class="payColumn" ${e.feesPaid ? 'disabled' : ''} onclick="payFees('${e.id}')">
              ${e.feesPaid ? 'Done' : 'Pay'}</button>
          </td>
      </tr> `
      // <td class="payColumn" onclick="return payFees('${e.id}')">Pay</td>
  })
};
let payFees = async (id) => {
  Swal.fire({
    title: "Invalid Data!",
    text: "This cannot be wrong/empty, Enter Correct Details.",
    icon: "warning",
    confirmButtonColor: "#0c5d69",
    confirmButtonText: "Understood",
  })
  let url = `http://localhost:3000/Students/${id}`;
  let res = await fetch(url);
  let data = await res.json();
  data.feesPaid = true;
  
  await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data) 
  });
  location.href="index.html";
};
