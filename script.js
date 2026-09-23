function addStudent() {
    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;
    let semester = document.getElementById("semester").value;

    if (name === "" || course === "" || semester === "") {
        alert("Please fill all fields!");
        return;
    }

    let table = document.getElementById("studentList");

    let row = table.insertRow();

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = course;
    cell3.innerHTML = semester;

    document.getElementById("name").value = "";
    document.getElementById("course").value = "";
    document.getElementById("semester").value = "";
}
