---
name: Canvas
menu: Notes
---

# Canvas

## canvas is not origin-clean

`canvas` 加载了远程图片后调用 `captureStream` 出错，提示 `canvas is not origin-clean`

具体原因：https://www.w3.org/TR/2011/WD-html5-20110405/the-canvas-element.html

解决方法：
1. 将图片数据获取到本地然后通过 `URL.createObjectURL`
2. 设置 Image crossOrigin 属性


### 1. URL.createObjectURL
```js
const loadImg = (src) => {
  return new Promise((resolve) => {
    fetch(src).then((response) => {
    const img = new Image();
    img.onload = () => {
      resolve(img);
    };
    img.src = URL.createObjectURL(response.blob());
    window.setTimeout(() => {
      resolve(null);
    }, 30 * 1000);
  }).catch(() => resolve(null)));
};
```

### 2. 设置 Image crossOrigin 属性

```js
const loadImg = (blob) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      resolve(img);
    };
    img.src = src;
    window.setTimeout(() => {
      resolve(null);
    }, 30 * 1000);
  });
};
```
参考资料：
1. [基于canvas生成图片](https://juejin.im/post/5aefc0456fb9a07abc29d36d)
2. [MDN: 启用了 CORS 的图片](https://developer.mozilla.org/zh-CN/docs/Web/HTML/CORS_enabled_image)

## captureStream 自动播放

`captureStream` 生成的 `stream` 无法自动播放。

`captureStream` 接口调用时入参是最大帧率，`canvas` 在变化的时候才会产生新的帧，所以一个静止的 `canvas` 只会产生一帧，导致 `stream` 无法自动播放。

启动一个定时器，刷新 `canvas` 的左上角可以解决这个问题。

```js
const ctx = document.getElementById('canvas').getContext('2d');

window.setInterval(()=>{
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, 1, 1);
}, 100);
```


## 性能优化

1. https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas
2. https://www.html5rocks.com/zh/tutorials/canvas/performance/#toc-clear-canvas
