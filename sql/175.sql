select FirstName, LastName, City, State from person 
left join address on person.personid = address.personid