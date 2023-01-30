# API (Application Programming Interface) 
là một tập các quy tắc và cơ chế mà theo đó, 
một ứng dụng hay một thành phần sẽ tương tác với một ứng dụng 
hay thành phần khác. 
API có thể trả về dữ liệu mà bạn cần cho ứng dụng của mình 
ở những kiểu dữ liệu phổ biến như JSON hay XML.

# REST (REpresentational State Transfer) 
là một dạng chuyển đổi cấu trúc dữ liệu, 
một kiểu kiến trúc để viết API. 
Nó sử dụng phương thức HTTP đơn giản để tạo cho giao tiếp giữa các máy. 
Vì vậy, thay vì sử dụng một URL cho việc xử lý một số thông tin người dùng, 
REST gửi một yêu cầu HTTP như GET, POST, DELETE, vv đến một URL để xử lý dữ liệu.

- REST hoạt động chủ yếu dựa vào giao thức HTTP. 
Các hoạt động cơ bản nêu trên sẽ sử dụng những phương thức HTTP riêng.

GET (SELECT): Trả về một Resource hoặc một danh sách Resource.
POST (CREATE): Tạo mới một Resource.
PUT (UPDATE): Cập nhật thông tin cho Resource.
DELETE (DELETE): Xoá một Resource.

Những phương thức hay hoạt động này thường được gọi là CRUD 
tương ứng với Create, Read, Update, Delete – Tạo, Đọc, Sửa, Xóa.

# RESTful API 
là một tiêu chuẩn dùng trong việc thiết kế các API cho các ứng dụng web 
để quản lý các resource. 
RESTful là một trong những kiểu thiết kế API được sử dụng phổ biến 
ngày nay để cho các ứng dụng (web, mobile…) khác nhau giao tiếp với nhau.
- Chức năng quan trọng nhất của REST 
+ quy định cách sử dụng các HTTP method (như GET, POST, PUT, DELETE…) 
+ cách định dạng các URL cho ứng dụng web để quản các resource. 
- RESTful không quy định logic code ứng dụng 
và không giới hạn bởi ngôn ngữ lập trình ứng dụng, 
bất kỳ ngôn ngữ hoặc framework nào cũng có thể sử dụng 
để thiết kế một RESTful API.

- RESTful API không sử dụng session và cookie, 
nó sử dụng một access_token với mỗi request. 
Dữ liệu trả về thường có cấu trúc như sau:

# Status code
Khi chúng ta request một API nào đó thường thì sẽ có vài status code để nhận biết sau:

200 OK – Trả về thành công cho những phương thức GET, PUT, PATCH hoặc DELETE.
201 Created – Trả về khi một Resouce vừa được tạo thành công.
204 No Content – Trả về khi Resource xoá thành công.
304 Not Modified – Client có thể sử dụng dữ liệu cache.
400 Bad Request – Request không hợp lệ
401 Unauthorized – Request cần có auth.
403 Forbidden – bị từ chối không cho phép.
404 Not Found – Không tìm thấy resource từ URI
405 Method Not Allowed – Phương thức không cho phép với user hiện tại.
410 Gone – Resource không còn tồn tại, Version cũ đã không còn hỗ trợ.
415 Unsupported Media Type – Không hỗ trợ kiểu Resource này.
422 Unprocessable Entity – Dữ liệu không được xác thực
429 Too Many Requests – Request bị từ chối do bị giới hạn

# HTTP Request
HTTP request có tất cả 9 loại method , 2 loại được sử dụng phổ biến nhất là GET và POST

GET: được sử dụng để lấy thông tin từ server theo URI đã cung cấp.
HEAD: giống với GET nhưng response trả về không có body, chỉ có header.
POST: gửi thông tin tới sever thông qua các biểu mẫu http.
PUT: ghi đè tất cả thông tin của đối tượng với những gì được gửi lên.
PATCH: ghi đè các thông tin được thay đổi của đối tượng.
DELETE: xóa tài nguyên trên server.
CONNECT: thiết lập một kết nối tới server theo URI.
OPTIONS: mô tả các tùy chọn giao tiếp cho resource.
TRACE: thực hiện một bài test loop – back theo đường dẫn đến resource.

# 
1. Promise API
- Trạng thái: 
+ Pending (đang xử lý)
+ Fulfilled (đã hoàn thành)
+ Rejected (đã bị từ chối)
- Một Promise chỉ có thể thành công hoặc thất bại một lần duy nhất
- Ngoài việc dùng để xử lý Promise bị lỗi, hàm callback trong catch() cũng được gọi khi có bất kỳ exception nào được bắn ra từ callback của hàm khởi tạo Promise. Vì thế bạn có thể dùng catch() cho việc lưu log.
- Promises vs Callbacks
2. asyn-await,
- Được xây dựng trên Promises và tương thích với tất cả các Promise dựa trên API.
- Async - khai báo một hàm bất đồng bộ (async function someName(){...}).
+ Tự động biến đổi một hàm thông thường thành một Promise.
+ Khi gọi tới hàm async nó sẽ xử lý mọi thứ và được trả về kết quả trong hàm của nó.
+ Async cho phép sử dụng Await.
- Await - tạm dừng việc thực hiện các hàm async. (Var result = await someAsyncCall ()😉.
+ Khi được đặt trước một Promise, nó sẽ đợi cho đến khi Promise kết thúc và trả về kết quả.
+ Await chỉ làm việc với Promises, nó không hoạt động với callbacks.
+ Await chỉ có thể được sử dụng bên trong các function async.