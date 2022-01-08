`Coersion - Truthy & Falsy
1.
a = 10;
b = 10;
c = 10;
type coercion của phép chuyển dữ liệu từ a=>b là explicit, từ a=>c là implicit
đây là trường hợp so sánh string với number`

2.
`Khi một giá trị không phải là boolean chuyển sang boolean:
- output ra false nếu giá trị là 0, 0n, các string có giá trị rỗng ("", '', ``), null, undefinded, NaN 
- output ra true với đa số các function còn lại
Ở ví dụ, a sẽ log ra thành truthy, còn b là chuỗi rỗng nên là giá trị falsy => không ra`

`Logical Operators & Conditional
1.
a là string=> true, b là empty string=> false, nhưng do có dấu logical or || nên kết quả trả về là true*/

 2.
/* a là string=> true, b là empty string=> false => kết quả trả về là false`

 3.
let a = -1;
let b = 1;
if (a < b); 
console.log (a < 0 && b > 0); //true
