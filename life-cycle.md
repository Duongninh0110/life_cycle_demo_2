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
where the state depends on changes in props over time
It should return an object to update the state, or null to update nothing

### render

### componentDidMount
componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.


## Update cycle

Một component được update khi props thay đổi hoặc state thay đổi. Các methods được gọi khi update component

+ static getDerivedStateFromProps()
+ shouldComponentUpdate()
+ render()
+ getSnapshotBeforeUpdate()
+ componentDidUpdate()

### getDerivedStateFromProps
where the state depends on changes in props over time
It should return an object to update the state, or null to update nothing

### shouldComponentUpdate
component chỉ được render khi shouldComponentUpdate return true

### render

### getSnapshotBeforeUpdate
It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed. Any value returned by this lifecycle will be passed as a parameter to componentDidUpdate()

### componentDidUpdate

componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.

Use this as an opportunity to operate on the DOM when the component has been updated.

This is also a good place to do network requests as long as you compare the current props to previous props 

You may call setState() immediately in componentDidUpdate() but note that it must be wrapped in a condition like in the example above, or you’ll cause an infinite loop. 



## Unmounting

Method được gọi khi một component được remove khỏi DOM

+ componentWillUnmount()

### componentWillUnmount

