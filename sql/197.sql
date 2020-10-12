select a.Id
from Weather as a, Weather as b
where a.Temperature > b.Temperature and dateDiff(a.RecordDate,b.RecordDate) = 1