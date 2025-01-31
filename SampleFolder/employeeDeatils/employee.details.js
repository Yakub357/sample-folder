const employees = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    department: "IT",
    salary: 50000,
    specialization: "Javascript",
  },
  {
    id: 2,
    name: "Alice Smith",
    age: 28,
    department: "HR",
    salary: 45000,
    specialization: "Python",
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 35,
    department: "Finance",
    salary: 60000,
    specialization: "Java",
  },
  {
    id: 4,
    name: "Memphis Vinegar",
    age: 29,
    department: "HR",
    salary: 45000,
    specialization: "C++",
  },
  {
    id: 5,
    name: "Random User 5",
    age: 33,
    department: "IT",
    salary: 65000,
    specialization: "DJango",
  },
  {
    id: 6,
    name: "Random User 6",
    age: 32,
    department: "Finance",
    salary: 33000,
    specialization: "Javascript",
  },
  //... More employee records can be added here
];

// Function to display all employees
function displayEmployees() {
  const totalEmployees = employees
    .map(
      (employee, index) =>
        `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`
    )
    .join("");

  document.getElementById("employeesDetails").innerHTML = totalEmployees;
}

// displayEmployees();

// ==== ==== ====
// Function to calculate total salaries
function calculateTotalSalaries() {
  const totalSalaries = employees.reduce(
    (acc, employee) => acc + employee.salary,
    0
  );
  alert(`Total Salaries: $${totalSalaries}`);
}

// ==== ==== ====
// Function to display HR employees
function displayHREmployees() {
  const hrEmployees = employees.filter(
    (employee) => employee.department === "HR"
  );

  const hrEmployeesDisplay = hrEmployees
    .map(
      (employee, index) =>
        `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`
    )
    .join("");

  document.getElementById("employeesDetails").innerHTML = hrEmployeesDisplay;
}

// ==== ==== ====
// Function to find an employee by ID
function findEmployeeById(employeeId) {
  const foundEmployee = employees.find(
    (employee) => employee.id === employeeId
  );

  if (foundEmployee) {
    document.getElementById(
      "employeesDetails"
    ).innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.specialization}</p`;
  } else {
    document.getElementById("employeesDetails").innerHTML =
      "no employee has been found with this ID";
  }
}

// ==== ==== ====
// Function to find an employee by specialization
function findEmployeeBySpec(specialization) {
  const foundEmployee = employees.find(
    (employee) => employee.specialization === specialization
  );

  if (foundEmployee) {
    document.getElementById(
      "employeesDetails"
    ).innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.specialization}</p`;
  } else {
    document.getElementById("employeesDetails").innerHTML =
      "no employee has been found with this specialization";
  }
}
