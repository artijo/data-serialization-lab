const employee = [
    {empname:"Robert", department: "Accountance", salary: 25000},
    {empname:"Mary", department: "Computer", salary: 25000},
    {empname:"John", department: "Sales", salary: 15000},
    {empname:"Smith", department: "Computer", salary: 30000},
    ]
    const result = employee.filter((val) => val.salary >= 25000).filter((val) => val.department==="Computer")
    console.log(result)