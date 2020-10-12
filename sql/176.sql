// 不会输出null
select Salary as SecondHighestSalary from Employee 
order by Salary limit 1 offset 1


// 输出null
select (select distinct salary from Employee order by salary desc limit 1,1) as SecondHighestSalary 

