# Hướng dẫn chạy code restaurant-cnpm
[Link clone dự án restaurant-cnpm](https://github.com/thanhdat4421/restaurant-cnpm).
### Thiết lập môi trường
* Cài đặt **Nodejs** 14.xx
* Sau khi cài đặt **Nodejs** mặc định sẽ có npm nhưng chúng ta phải cập nhật bằng lệnh
```
npm i -g npm
```
* Cài đặt package **Yarn**
```
npm i -g yarn
```
* Cài đặt [MongoDB Community Server](https://www.mongodb.com/try/download/community)
* Nếu bạn không sử dụng hệ điều hành window,thì phải cài thêm  [MongoDB Tool Compass](https://www.mongodb.com/try/download/compass)

## Thiết lập dữ liệu và install node_modules
* Mở **MongoDB Tool Compass**, connect tới địa chỉ `mongodb://localhost:27017`, kết nối với **MongoDB** tạo document **cnpm** với collection **categories**
* Nhập file dữ liệu từ file [category.json](https://drive.google.com/file/d/1V4iOMiBsC20SGzoDRMuPFAaRAEYphZpt/view?usp=sharing) vào collection **categories**
* Mở lại folder dự án đã clone về, vào folder client, chạy lệnh
```
npm install
```
* Tương tự vào, folder server, chạy lệnh
```
npm install
```

## Run code
* Vào folder server, chạy lệnh
```
npm start
```

<br>
<br>
* Tương tự vào, vào folder client, chạy lệnh

```
npm start
```
