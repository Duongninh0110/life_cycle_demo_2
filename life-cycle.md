## Lifecycle function
Component Lifecycle gồm 3 giai đoạn:
+ creating
+ updating
+ unmounting 

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops

## Creating cycle

Các methods được gọi khi một component dc tạo mới và insert vào DOM:
+ constructor()
+ static getDerivedStateFromProps()
+ render()
+ componentDidMount()

### constructor

### getDerivedStateFromProps

### render

### componentDidMount

## Update cycle

Một component được update khi props thay đổi hoặc state thay đổi. Các methods được gọi khi update component

+ static getDerivedStateFromProps()
+ shouldComponentUpdate()
+ render()
+ getSnapshotBeforeUpdate()
+ componentDidUpdate()

### getDerivedStateFromProps

### shouldComponentUpdate

### render

### getSnapshotBeforeUpdate

### componentDidUpdate

## Unmounting

Method được gọi khi một component được remove khỏi DOM

+ componentWillUnmount()

### componentWillUnmount

