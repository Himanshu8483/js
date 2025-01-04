// Array of Object:
// We use this approach to dynamically add data to a webpage.
// This is the list of students with their details
let students = [
    { name: "Himanshu", age: 22, city: "Rewa" }, // First student's details
    { name: "Jatin", age: 23, city: "Sehore" },  // Second student's details
    { name: "Vijay", age: 24, city: "Dewas" },  // Third student's details
];

// This gets the empty part of the table (where rows will go)
let output = document.querySelector("#tablebox");

// This goes through each student in the list
students.forEach((e) => {
    // For each student, it adds a new row in the table
    output.innerHTML += `
        <tr>
            <td>${e.name}</td> <!-- This adds the student's name -->
            <td>${e.age}</td>  <!-- This adds the student's age -->
            <td>${e.city}</td> <!-- This adds the student's city -->
        </tr>
    `;
});
