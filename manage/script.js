// Check if students exist in LocalStorage, otherwise initialize an empty array
let students = JSON.parse(localStorage.getItem("students")) || [];

// Function to add a new student
document.getElementById("studentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    let newStudent = { id: Date.now(), name, email, phone, feesPaid: false };
    students.push(newStudent);
    localStorage.setItem("students", JSON.stringify(students));

    document.getElementById("studentForm").reset();
    displayStudents();
});

// Function to display students in the table
function displayStudents() {
    let table = document.getElementById("studentTable");
    table.innerHTML = "";

    students.map((student, index) => {
        let row = `
            <tr>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.phone}</td>
                <td>${student.feesPaid ? "✅ Paid" : "❌ Not Paid"}</td>
                <td>
                    <button onclick="deleteStudent(${index})">Delete</button>
                    <button onclick="markAsPaid(${index})">Mark Paid</button>
                </td>
            </tr>
        `;
        table.innerHTML += row;
    });
}

// Function to delete a student
function deleteStudent(index) {
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

// Function to mark a student as "Fees Paid"
function markAsPaid(index) {
    students[index].feesPaid = true;
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

// Load students on page load
displayStudents();
