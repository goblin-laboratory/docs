---
name: DOM 元素高度
menu: Notes
---
# DOM 元素高度

## clientHeight

[原文地址](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/clientHeight)

这个属性是只读属性，对于没有定义CSS或者内联布局盒子的元素为0，否则，它是元素内部的高度(单位像素)，包含内边距，但不包括水平滚动条、边框和外边距。

`clientHeight` 可以通过 CSS height + CSS padding - 水平滚动条高度 (如果存在)来计算.

<!-- ![](../images/Dimensions-client.png) -->
![](https://raw.githubusercontent.com/goblin-laboratory/docs/docz/images/Dimensions-client.png)


## scrollHeight

[原文地址](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollHeight)

`Element.scrollHeight` 这个只读属性是一个元素内容高度的度量，包括由于溢出导致的视图中不可见内容。

`scrollHeight` 的值等于该元素在不使用滚动条的情况下为了适应视口中所用内容所需的最小高度。

没有垂直滚动条的情况下，`scrollHeight` 值与元素视图填充所有内容所需要的最小值 `clientHeight` 相同。包括元素的 `padding`，但不包括元素的 `border` 和 `margin`。`scrollHeight` 也包括 `::before` 和 `::after` 这样的伪元素。

<!-- ![](../images/scrollHeight.png) -->
![](https://raw.githubusercontent.com/goblin-laboratory/docs/docz/images/Dimensions-scroll.png)


## offsetHeight

[原文地址](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetHeight)

`HTMLElement.offsetHeight` 是一个只读属性，它返回该元素的像素高度，高度包含该元素的垂直内边距和边框，且是一个整数。

通常，元素的 `offsetHeight` 是一种元素CSS高度的衡量标准，包括元素的边框、内边距和元素的水平滚动条（如果存在且渲染的话），不包含 `:before` 或 `:after`等伪类元素的高度。

对于文档的body对象，它包括代替元素的CSS高度线性总含量高。浮动元素的向下延伸内容高度是被忽略的。

<!-- ![](../images/Dimensions-offset.png) -->
![](https://raw.githubusercontent.com/goblin-laboratory/docs/docz/images/Dimensions-offset.png)
