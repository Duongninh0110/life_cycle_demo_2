# Redux

Nếu không có redux data được truyền giữa các component thông qua props lần lượt từ 
component cha đến component con, từ component con đến component cháu. Nếu trong một dự án phức tạp có nhiều lớp. việc truyền data sẽ rất khó khăn

redux lưu trữ tất cả state ở trong store. Các component tương tác trực tiếp với store để cập nhật state cũng như lấy data để render ra view

## Khái niệm cốt lõi 

### State của app của bạn được mô tả như 1 object thuần 

```
{
  todos: [{
    text: 'Eat food',
    completed: true
  }, {
    text: 'Exercise',
    completed: false
  }],
  visibilityFilter: 'SHOW_COMPLETED'
}
```

Để thay đổi state, chỉ có 1 cách duy nhất là dispatch 1 action 

## 3 nguyên tắc của Redux

+ Single source of truth: State của toàn bộ ứng dụng được lưu trong trong 1 store duy nhất là 1 Object mô hình tree.
+ State is read-only: Chỉ có 1 cách duy nhất để thay đổi state đó là tạo ra một action (là 1 object mô tả những gì xảy ra)
+ Changes are made with pure functions: Để chỉ rõ state tree được thay đổi bởi 1 action bạn phải viết pure reducers

## Nguyên lý vận hành

### Actions

Trong Redux action là 1 pure object định nghĩa 2 thuộc tính là : type: kiểu mô tả action, và payload: giá trị tham số truyền lên

```
{
  type: "KIEU_ACTION",
  payload: //tham số
}
```

### Reducers

Phụ trách việc thay đổi state, Reducer nhận 2 tham số vào: 1 state cũ và action được gửi lên sau đó trả ra một state mới, ko làm thay đổi state cũ.

```
(previousState, action) => newState
```

### Store

Store là 1 object lưu trữ state của toàn bộ ứng dụng có 3 phương thức sau:

+ getState(): Giúp lấy ra state hiện tại
+ dispatch(action): Thực hiện gọi 1 action
+ subscrible(listener):Nó có vai trò cực quan trọng, luôn luôn lắng nghe xem có thay đổi gì ko rồi ngay lập tức cập nhật ra View

