select Department.name as `Department`, employee.name as Employee, Salary from employee
inner join Department on Department.id = Employee.DepartmentId
where (salary, DepartmentId) in (
    select max(salary), DepartmentId
    from Employee 
    group by DepartmentId
)