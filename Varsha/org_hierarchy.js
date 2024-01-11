emp = [
	{
		"id": "01",
		"name": "Satish",
		"des": "Admin",
		"manager_id": -1
	},
	{
		"id": "02",
		"name": "Suresh",
		"des": "Accountant",
		"manager_id": 1
	},
	{
		"id": "03",
		"name": "Ganesh",
		"des": "HR",
		"manager_id": 1
	},
	{
		"id": "04",
		"name": "Mahesh",
		"des": "TL",
		"manager_id": 1
	},
	{
		"id": "05",
		"name": "Kamesh",
		"des": "Sr Programmer",
		"manager_id": 4
	},
	{
		"id": "06",
		"name": "Kamalesh",
		"des": "Sr Programmer",
		"manager_id": 4
	},
	{
		"id": "07",
		"name": "veeresh",
		"des": "Jr Programmer",
		"manager_id": 5
	},
	{
		"id": "08",
		"name": "Ramesh",
		"des": "Jr Programmer",
		"manager_id": 6
	},
	{
		"id": "09",
		"name": "Venkatesh",
		"des": "Jr Programmer",
		"manager_id": 6
	},
	{
		"id": "10",
		"name": "Mangesh",
		"des": "Jr Programmer",
		"manager_id": 6
	}

];

function get_ids()
{
    console.log(Math.min(data.map(emp=>emp.manager_id)));
}
//org_hierarchy=[];
//for(i=0;i<data.length;i++)
//{
//    
//}