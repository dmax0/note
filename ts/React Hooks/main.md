## useState

`useState`只会在组件首次渲染时执行，后续组件更新时不会再进行初始化操作，而是使用已存在的状态值。

```typescript
// 显示指定arr为number[]类型
const [arr, setArr] = useState<number[]>([])
```

`useState`的状态修改函数也可以接收一个函数

```typescript
const [count, setCount] = useState(0);
// 使用函数参数，复用以前的值
setCount(pre => pre + 1);
```

## useEffect 

在依赖发生改变时才执行useEffect:

```typescript
useEffect(()=>{
    console.log('count:',count)
},[count])
//依赖项以数组的形式传递
```

## 
