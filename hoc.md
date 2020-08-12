## Higher Order Component (HOC)
Một HOC là một hàm nhận vào một component và trả về một component mới

### Lợi ích của HOC

### Cách dùng HOC

### Lưu ý khi dùng HOC 

#### Không thay đổi component gốc

Không thay đôi component gốc trong bắng bất cứ cách gì (prototype hay bất cứ gì)

```
function logProps(InputComponent) {
  InputComponent.prototype.componentDidUpdate = function(prevProps) {
    console.log('Current props: ', this.props);
    console.log('Previous props: ', prevProps);
  };
  // The fact that we're returning the original input is a hint that it has
  // been mutated.
  return InputComponent;
}

// EnhancedComponent will log whenever props are received
const EnhancedComponent = logProps(InputComponent);
```

Vấn đề sảy ra: 

+ input component không thể được sử dụng tách biệt khỏi separately enhanced component
+ nếu một HOC khác cũng gọi tới component EnhancedComponent và cũng thay đổi function componentDidUpdate, các function tion của HOC đầu tiên sẽ bị overwrite
+ EnhancedComponent không làm việc được với function components, không có lifecycle methods.

#### Truyền các props không liên quan tới HOC vào các thẻ được bao bọc

dùng spread object: 

```
render() {
  // Filter out extra props that are specific to this HOC and shouldn't be
  // passed through
  const { extraProp, ...passThroughProps } = this.props;

  // Inject props into the wrapped component. These are usually state values or
  // instance methods.
  const injectedProp = someStateOrInstanceMethod;

  // Pass props to wrapped component
  return (
    <WrappedComponent
      injectedProp={injectedProp}
      {...passThroughProps}
    />
  );
}
```

#### Tối đa hóa khả năng kết hợp

HOC có thể nhận một hoặc nhiều tham số đầu vào

Không phải tất cả các HOCs đều nhìn giống nhau. Thỉnh thoảng chúng chấp nhận đối số duy nhất là thẻ được bọc

```
const NavbarWithRouter = withRouter(Navbar);

```

HOCs cũng thường xuyên chấp nhận thêm các đối số

```
const CommentWithRelay = Relay.createContainer(Comment, config);
```

HOC thường có dang:

```
// React Redux's `connect`
const ConnectedComment = connect(commentSelector, commentActions)(CommentList);
```

cách viết trên có thể viết lại như sau

```
// connect is a function that returns another function
const enhance = connect(commentListSelector, commentListActions);
// The returned function is a HOC, which returns a component that is connected
// to the Redux store
const ConnectedComment = enhance(CommentList);
```

Nói một cách khác connect là 1 hàm higher-order cái và nó trả về 1 HOC
#### Không dùng HOC trong render method

#### Phải copy lại static method

#### Ref không được truyền qua HOC