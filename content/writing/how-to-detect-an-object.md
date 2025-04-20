---
title: How to detect an object
description: How to detect an object.
date: 2025-04-06T16:00:00.006Z
modified: 2025-05-06T11:31:14-06:00
published: true
tags:
  - javascript
  - clean code
---
Có rất nhiều cách để check được 1 giá trị có là object hay không..

## Hãy xem ví dụ sau đây

```js
const bothObjects =
  Object.prototype.toString.call(valueA) === '[object Object]' &&
  Object.prototype.toString.call(valueB) === '[object Object]'
```

Đây là cách kiểm tra chính xác và tin cậy để xác định một giá trị có phải là object thuần túy (plain object) không, với nhiều ưu điểm so với các phương pháp khác:

## 1. Tại sao sử dụng `Object.prototype.toString.call()` thay vì `typeof`?

- typeof sẽ trả về "object" cho nhiều loại giá trị khác nhau như mảng, null, Date, RegExp, v.v.
- typeof null trả về "object" - đây là một lỗi nổi tiếng trong JavaScript
- Object.prototype.toString.call() trả về chuỗi chính xác chỉ rõ loại đối tượng

## 2. Ý nghĩa của kết quả [object Object]

- Chuỗi này chỉ được trả về cho các object thuần túy (plain objects) được tạo bằng `{}` hoặc new Object()
- Các loại object khác sẽ có kết quả khác: - Mảng: [object Array] - Date: [object Date] - RegExp: [object RegExp] - Map: [object Map] - Set: [object Set] - null: [object Null]

## 3. Tại sao phải sử dụng .call()

- toString là phương thức của Object.prototype
- Việc sử dụng .call() đảm bảo phương thức được thực thi với ngữ cảnh (this) là giá trị cần kiểm tra
- Điều này tránh được trường hợp đối tượng ghi đè phương thức toString của riêng nó

## 4. So sánh với các phương pháp kiểm tra object khác:

- typeof obj === 'object' && obj !== null - đơn giản nhưng không phân biệt được array và object
- obj instanceof Object - có thể cho kết quả sai với các đối tượng từ iframe khác hoặc các môi trường khác
- obj.constructor === Object - dễ bị phá vỡ nếu đối tượng không có thuộc tính constructor

Ưu điểm chính của phương pháp này:

- Chính xác cao, nhận biết được chính xác object thuần túy
- Không bị ảnh hưởng bởi việc ghi đè prototype
- Hoạt động nhất quán trên các môi trường JavaScript khác nhau
- Xử lý đúng các trường hợp đặc biệt như null, array, và các đối tượng tích hợp sẵn khác

Đây được coi là "cách chuẩn" để kiểm tra một giá trị có phải là object thuần túy trong JavaScript, đặc biệt quan trọng trong các hàm tiện ích như deepEqual nơi cần chính xác tuyệt đối.
