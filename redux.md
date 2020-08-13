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

## Cài đặt redux

### Step1: install Redux, React-Redux dependencies

```
npm install --save redux react-redux
```

### Step1: Tạo store,  action, reducer

#### actions:

actions.js chứa các action (nó sẽ export ra cho các class có thể gọi tới các function bên trong nó)

#### reducer:

#### Store:
Trong file index.js import thư viện redux và tạo một store

```
import {createStore} from 'redux';

const store = createStore(
    reducers   
);

```

### Step 3: connect React component với store của Redux

Thư viện react-redux đã cung cấp 1 thằng có tên Provider để làm cầu nối cho React và Redux, chúng ta chỉ việc bọc nó bao ngoài root component của React và truyền 1 tham số duy nhất là store vào

```
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```
### Step 4: Map data từ store ra View và gọi 1 action từ 1 component

Nhiệm vụ quan trọng này được thực hiện bởi hàm connect() trong react-redux.

Hàm connect() có 2 tham số:
+ mapDispatchToProps(dispatch) nhiệm vụ map hàm dispatch() của store trở thành 1 thuộc tính của props của component đó
, cụ thể ở code bên dưới thì actions chính là 1 props của component đó và giờ muốn phát đi 1 action ta chỉ việc gọi this.props.actions.tên_action_

+ mapStateToProps(state) nhiệm vụ hết sức đơn giản giống như cái tên của nó, biến các state từ store thành props của component và sau đó show ra View
```
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch(actionTypes.increment()),
    onDecrementCounter: () => dispatch(actionTypes.decrement()),
    onAddCounter: () => dispatch(actionTypes.add(5)),
    onSubtractCounter: () => dispatch(actionTypes.subtract(5)),
    onStoreResult: (result) => dispatch(actionTypes.storeResult(result)),
    onDeleteResult: (id) => dispatch(actionTypes.deleteResult(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```


### Middleware là gì?

### Asyncronous action
