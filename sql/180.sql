select  distinct l1.num as "ConsecutiveNums"
from logs l1
join logs l2 
on l1.num = l2.num 
join logs l3
on l2.num = l3.num
where l2.id+1 = l3.id
and l1.id+1 = l2.id
