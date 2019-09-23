---
name: 30 Seconds of Code
order: 0
menu: Books
---

# 30 Seconds of Code

> 收集有用的 Javascript 片段, 你可以在30秒或更少的时间里理解。

[原文地址](https://github.com/kujian/30-seconds-of-code#table-of-contents)

## 数组

### arrayMax

返回数组中的最大值。

将 `Math.max()` 与扩展符 `...` 结合使用以获取数组中的最大值。

```js
const arrayMax = arr => Math.max(...arr);
```

### chunk

将数组块划分为指定大小的较小数组。

使用 `Array.from` 创建新的数组，这符合将生成的区块数。使用 `Array.slice` 将新数组的每个元素映射到 `size` 长度的区块。如果原始数组不能均有拆分，则最终的块将包含剩余的元素。

```js
const chunk = (arr, size) =>
Array.from({ length: Math.ceil(arr.lenth / size) }, (v, i) => arr.slice(i * size, i * size + size  ))
```
