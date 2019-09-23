
---
name: React v16.6.0
menu: React
---

# React v16.6.0
原文地址：
https://reactjs.org/blog/2018/10/23/react-v-16-6.html

## 1. React.memo

```js
const const MyComponent = React.memo((props) => {
  /* only rerenders if props change */
});
```

## 2. React.lazy

```js
import React, {lazy, Suspense} from 'react';
const OtherComponent = lazy(() => import('./OtherComponent'));

const MyComponent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OtherComponent />
    </Suspense>
  );
}
```
