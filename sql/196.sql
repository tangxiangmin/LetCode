# 注意in条件的子查询中需要添加别名，如t
delete from person where Id not in (
	select id from (
		select min(id) as id from person group by email) t
)