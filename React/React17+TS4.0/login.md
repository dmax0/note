# 登录

1. 表单提交

```typescript
const handleSubmit = (event: FromEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value;
    login({username, password});
}

const login = (param: {username: string, password: string}) => {
    // 发送请求
    fetch(`${baseUrl}/login`,{
    	method: 'post',
    	headers:{
    		'Content-Type': 'application/json',
    	},
    	body:JSON.stringfy(param);
    }).then(async response => {
    	if (response.ok){}
    	else {}
    }).catch(error => console.log(error))
      .finally(() => {});
}
```

