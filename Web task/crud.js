
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
    show.innerHTML +=`
    <tr class="row">
        <td>${e.name}</td>
        <td>${e.class}</td>
        <td>${e.section}</td>
        <td>${e.rollNo}</td>
        <td>${e.feesPaid ? "Paid" : "Not Paid"}</td>
        <td class="payColumn" onclick="return formFill('${e.id}')">Pay</td>
    </tr> `
})
};

let formFill= async(id)=> {
let url = `http://localhost:3000/Students/${id}`

let res = await fetch(url,{method:"GET"})
let data = await res.json()
let formData=`

  <div class="group">
    <label for="class">Select Class:</label>
    <select id="class">
      <option value="">Select Class</option>
      <option value="9">Class 9th</option>
      <option value="10">Class 10th</option>
      <option value="11">Class 11th</option>
      <option value="12">Class 12th</option>
    </select>
  </div>
  <div class="group">
    <label for="section">Select Section:</label>
    <select id="section">
      <option value="">Section</option>
      <option value="A">Section A</option>
      <option value="B">Section B</option>
    </select>
  </div>
  <div class="group">
    <label for="name">Student's Name:</label>
    <input type="text"  placeholder="Name" id="name">
  </div>
  <div class="group">
    <label for="number">Mobile Number:</label>
    <input type="number"   placeholder="number" id="number">
  </div>
  <div class="group">
    <label for="inpId">Enter Unique Id:</label>
    <input type="text"  placeholder="User Id" id="inpId">
    <!-- <input type="text" placeholder="Enroll No" id="rollNo" oninput="return searchh()"> -->
  </div>
    <button onclick="searchStudent('${data.id}')">Search</button>

`
document.querySelector("#content").innerHTML=formData
}

let searchStudent=(id)=>{
  console.log("Student ID:", id);  // Debugging line

let searchName=document.querySelector("#name").value.toLowerCase().trim();
let searchId=document.querySelector("#inpId").value.toLowerCase().toString().trim()
let searchClass = document.querySelector("#class").value;
let searchSection = document.querySelector("#section").value;
let searchNumber = document.querySelector("#number").value;

let url = `http://localhost:3000/Students/${id}`

fetch(url,{
  method:"PUT",
  headers:{
    "Content-Type":"application/json",
  },
  body:JSON.stringify(
    {
      name:searchName,
      id:searchId,
      class:searchClass,
      section:searchSection,
      number:searchNumber,
    }
  )
})
return false;
}
