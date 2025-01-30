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
  dataShow(data);
} 

let searchh=async()=>{
let searchInp = document.querySelector('#searchInp').value.toLowerCase();
// let selectedClass = document.querySelector('#class').value;
let url= 'http://localhost:3000/Students';
let res= await fetch(url,{ method:"GET"})
  let data = await res.json()
  let filterData=data.filter((e)=>{
    return e.class.includes(searchInp)|| e.name.toLowerCase().toString().includes(searchInp)
  })
  dataShow(filterData)
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
    
let del =(id)=>{
  let url = `http://localhost:3000/Students/${id}`
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

let formFill= async(id)=> {
  let url = `http://localhost:3000/Students/${id}`

  let res = await fetch(url,{method:"GET"})
  let data = await res.json()
  let formData=`
  <div class="group">
    <label for="class">Class:</label>
    <select id="upclass">
      <option value="">Class</option>
      <option value="">Class 9th</option>
      <option value="">Class 10th</option>
      <option value="">Class 11th</option>
      <option value="">Class 12th</option>
    </select>
  </div>
  <div class="group">
    <label for="section">Section:</label>
    <select id="upsection">
      <option value="">Section</option>
      <option value="">Section A</option>
      <option value="">Section B</option>
    </select>
  </div>
  <div class="group">
    <label for="rollNo">Roll No:</label>
    <input value="${data.id} type="submit" placeholder="Search Here" id="uprollNo" oninput="searchh()">
  </div>
      <input type="submit" class="button" value="Pay Now" onclick="return FinalUpdate('${data.id}')">
  `
  document.querySelector("#studentTable").innerHTML=formData
}

let FinalUpdate=(id)=>{
  let nname = document.getElementById('upname').value;
  let cclass = document.getElementById('upclass').value;
  let ssection = document.getElementById('upsection').value;
  let rrollNo = document.getElementById('uprollNo').value;
  let ffeesPaid = document.getElementById('uptime').value;
  
  let url = `http://localhost:3000/Students/${id}`

  fetch(url,{
    method:"PUT",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(
      {
        name:nname,
        class:cclass,
        section:ssection,
        rollNo:rrollNo,
        feesPaid:ffeesPaid,
        Price:250
      }
    )
  })
  return false;
}


let fetchData = async () => {
  let url = 'http://localhost:3000/Students';
  let res = await fetch(url, { method: "GET" });
  let data = await res.json();
  dataShow(data);
};

let searchh = async () => {
  let searchInp = document.querySelector('#searchInp').value.toLowerCase();
  let selectedClass = document.querySelector('#class').value;
  let selectedSection = document.querySelector('#section').value;
  let url = 'http://localhost:3000/Students';
  let res = await fetch(url, { method: "GET" });
  let data = await res.json();

  let filteredData = data.filter((e) => {
    return (
      (selectedClass === "" || e.class === selectedClass) &&
      (selectedSection === "" || e.section === selectedSection) &&
      (e.name.toLowerCase().includes(searchInp) || e.rollNo.toString().includes(searchInp))
    );
  });
  dataShow(filteredData);
};

let dataShow = (data) => {
  let show = document.querySelector("#studentTable");
  show.innerHTML = "";
  data.map((e) => {
    show.innerHTML += `
      <tr>
          <td>${e.name}</td>
          <td>${e.number}</td>
          <td>${e.class}</td>
          <td>${e.section}</td>
          <td>${e.rollNo}</td>
          <td>${e.feesPaid ? "Paid" : "Not Paid"}</td>
          <td><button onclick="payFees('${e.id}')">Pay</button></td>
      </tr>`;
  });
};

let payFees = async (id) => {
  let url = `http://localhost:3000/Students/${id}`;
  await fetch(url, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ feesPaid: true })
  });
  fetchData();
};

document.addEventListener("DOMContentLoaded", fetchData);


let fetchData = async () => {
  let url = 'http://localhost:3000/Students';
  let res = await fetch(url, { method: "GET" });
  let data = await res.json();
  // dataShow(data);
  return data; // Return data instead of displaying it immediately
};

let searchh = async () => {
  let searchInp = document.querySelector('#searchInp').value.toLowerCase().trim();
  let selectedClass = document.querySelector('#class').value.trim();
  let selectedSection = document.querySelector('#section').value.trim();

  // Prevent fetching data when no input is provided
  if (searchInp === "" && selectedClass === "" && selectedSection === "") {
    document.querySelector("#studentTable").innerHTML = ""; // Clear table
    return false; // Prevents page reload
  }

  let data = await fetchData(); // Fetch data only when user searches

  let filteredData = data.filter((e) => {
    return (
      (selectedClass === "" || e.class.toString() === selectedClass) &&
      (selectedSection === "" || e.section.toString() === selectedSection) &&
      (e.name.toLowerCase().includes(searchInp) || e.rollNo.toString().includes(searchInp))
    );
  });

  dataShow(filteredData);
  return false; // Prevents page refresh
};

let dataShow = (data) => {
  let show = document.querySelector("#studentTable");
  show.innerHTML = "";
  if (data.length === 0) {
    show.innerHTML = "<tr><td colspan='6'>No students found</td></tr>";
    return;
  }

  data.forEach((e) => {
    show.innerHTML += `
      <tr>
          <td>${e.name}</td>
          <td>${e.number}</td>
          <td>${e.class}</td>
          <td>${e.section}</td>
          <td>${e.rollNo}</td>
          <td>${e.feesPaid ? "Paid" : "Not Paid"}</td>
      </tr>`;
  });
};



  // Show "Pay" column after search
  // document.querySelectorAll(".payColumn").forEach(col => col.style.display = "none");

  let payFees = async (id) => {
    let url = `http://localhost:3000/Students/${id}`;
    
    // Fetch the current student data
    let res = await fetch(url);
    let student = await res.json();
  
    // Update only the 'feesPaid' field
    student.feesPaid = true;
  
    await fetch(url, {
      method: "PUT",  // Using PUT to replace the entire resource
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student) // Send the updated student object
    });
  
    fetchData(); // Refresh the student data
  };
  