---
name: React 快速开始
menu: React
---
# 快速开始

## React 理念

[原文地址](https://react.docschina.org/docs/thinking-in-react.html)

> 在我们的理念中，React 最初的目的时使用 JavaScript 创建大型的，快速响应的网络应用。它在我们的 Facebook 和 Instagram 中已经实践的非常好了。

React 的众多优点之一是它让你在编写代码的时候同时也在思考你的应用。在这篇文档中，我们会带你使用 React 一起创建一个可搜索的产品数据表格，并向你展示我们的思考过程。


### 从模拟页面开始

想象我们已经有一个 JSON 接口和一个设计师给我们的原型图。原型图象下面这样：

<!-- ![](../images/thinking-in-react-mock-1071fbcc9eed01fddc115b41e193ec11-4dd91.png) -->
![](https://raw.githubusercontent.com/goblin-laboratory/docs/docz/images/thinking-in-react-mock-1071fbcc9eed01fddc115b41e193ec11-4dd91.png)

### 第一步：把 UI 划分出组件层级

第一件你要做的事情是用方框划分出每一个组件（和子组件）并给他们命名。如果你和设计师一起工作，他们可能已经完成了这些，所以去和他们聊聊吧！他们的 Photoshop 图层名称也许就是你的 React 组件名称！

但你如何知道哪一部分应该成为一个组件？想想在编写代码时你在什么情况下需要新建一个函数或者对象，思考方式是一样的。例如单一功能原则，在理想状况下，一个组件应该只做一件事情。如果这个组件功能不断丰富，他应该被分成更小的组件。

既让你经常向用户展示 JSON 数据模型，你会发现，如果你的模型构建正确，你的 UI（以及你的组件结构）会被很好的映射。这是因为 UI 和数据模型往往遵循这相同的信息架构，这意味着将 UI 划分成组件的工作往往是很容易的。只要把它划分成能准确表示你数据模型的一部风的组件就可以。

<!-- ![](../images/thinking-in-react-components-eb8bda25806a89ebdc838813bdfa3601-82965.png) -->
![](https://raw.githubusercontent.com/goblin-laboratory/docs/docz/images/thinking-in-react-components-eb8bda25806a89ebdc838813bdfa3601-82965.png)

在这里你会看到，我们的简单应用有 5 个组件。
<!-- 我们把每个组件展示的数据用斜体表示。 -->

1. FilterableProductTable（橙色）：包含了整个例子

2. SearchBar（蓝色）：接受所有的用户输入

3. ProductTable（绿色）：根据用户输入过滤并展示数据集合

4. ProductCategoryRow（绿松石色）：展示每个分类的标题

5. ProductRow（红色）：用行来展示每个产品

如果你查看 ProductTable，你会发现表态（包含 Name 和 Price 标签）并没有作为一个组件。这是一个偏好问题，选择哪种方式目前还存在争议。在这个例子中，我们把它作为 ProductTable 的一部风，因为它是渲染数据集合的一部风，而渲染数据集合是 ProductTable 的职责。然而，如果头部变得更加复杂（也就是，如果我们添加了排序功能），他就有足够的理由成为一个单独的 ProductTableHeader 组件。

现在我们已经确定了原型图中的组件，让我们把他们整理成层级结构。这很容易。原型图中的子组件在层级结构中应该作为子节点。

* FilterableProductTable
  * SearchBar
  * ProductTable
    * ProductCategoryRow
    * ProductRow


### 第二步：用 React 创建一个静态版本

https://codepen.io/lacker/pen/vXpAgj

```html
<div id="container">
  <!-- This element's contents will be replaced with your component. -->
</div>
```

```css
body {
  padding: 5px
}
```

```jsx
class ProductCategoryRow extends React.Component {
  render() {
    return <tr><th colSpan="2">{this.props.category}</th></tr>;
  }
}

class ProductRow extends React.Component {
  render() {
    var name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function(product) {
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}


var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('container')
);
```

现在有了组件层级，是时候去实现你的应用了。最简单的方式是先创建一个静态版本：传入数据模型，渲染 UI 但没有任何交互。
