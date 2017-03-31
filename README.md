# In-pieces
A css-based interactive exhibition. implemented species-in-pieces.com myself.

一个基于css/clip-path属性的濒危动物交互展览。 模仿 species-in-pieces.com 实现。
 
 ## 开发环境配置
> 安装依赖  npm install

## 项目难点与总结
该项目起源于一次在张鑫旭的博客中找到的网站， 这个网站展示的是30个濒危动物，我原本以为这是canvas绘制，可没想到居然只使用了css！
出于好奇，我打开了控制台，发现这个项目主要使用了clip-path这个属性，如下。
```css
clip-path: polygon(49% 0, 95% 65%, 11% 94%);
```
clip-path的前身其实是SVG，所以它理应和SVG相似，是以点的坐标相连实现遮罩的， 创建一个小的Demo非常简单，只需一个div，就可以画出千奇百怪的造型，这便是整个项目的基础。
```css
width: 200px;
height: 200px;
background-color: #fff88b;
clip-path: polygon(49% 0, 95% 65%, 11% 94%);
```
```html
<div></div>
```
![clip-path](https://moudicat-data.oss-cn-beijing.aliyuncs.com/cdn/2017/03/NQB5VSR2B8HFXLNUO6.png)

> 运动

那么？如何让他运动呢？ 其实也很简单！ 那就是transition！  
是的 这个属性支持transition补间动画，只需要这样设置，你的“碎片”就会按照你预想的轨迹运动了！
```css
div {
 width: 200px;
 height: 200px;
 background-color: #fff88b;
 transition: 1s;
 clip-path: polygon(49% 0, 95% 65%, 11% 94%);
}
div:hover {
 clip-path: polygon(49% 19%, 95% 85%, 1% 99%);
}
```
> 图形绘制

如何使用上述属性绘制就算得上本项目的难点了，在网站中，有介绍到原理，如下图

![clip-path2](https://moudicat-data.oss-cn-beijing.aliyuncs.com/cdn/2017/03/polygon-demo-1.png)

设计稿中动物是以三角形拼接的，我尝试过在PS中挨个量取：

![clip-path1](https://moudicat-data.oss-cn-beijing.aliyuncs.com/cdn/2017/03/psin.png)

我量取了两三片之后发现：手动计算显然太不靠谱了！  

网上也找到了一些clip-path生成工具，尝试了一番，发现都不能很好的满足需求，要么是只能一块一块量取，要么是上传的图会被压缩。
直到后来，我才发现原作者在WEB设计开发杂志博客上有分享自己的制作过程，他在一个空白页面放入设计图，通过点击每个点，自动计算到页面左边、顶端的百分比。

```javascript
$('body').on('click', function (e){
  var mouseX = e.pageX;
  var mouseY = e.pageY;

  var shapesoffsetX = $('.polygon-wrap').offset().left;
  var shapesoffsetY = $('.polygon-wrap').offset().top;

  var polygonswidth=$('.polygon-wrap').width();
  var polygonsheight=$('.polygon-wrap').height();

  var shapesmouseX = mouseX - shapesoffsetX;
  var shapesmouseY = mouseY - shapesoffsetY;

  var mousepercentX = shapesmouseX / polygonswidth;
  var mousepercentY = shapesmouseY / polygonsheight;

  var finalmouseX = (mousepercentX) * 100 ;
  var finalmouseY = (mousepercentY) * 100 ;
  var normalisedX = parseFloat(finalmouseX).toFixed(3);
  var normalisedY = parseFloat(finalmouseY).toFixed(3);

  nodecount = nodecount+1;

  if (nodecount < 3) {
    nodescss = nodescss + normalisedX + '% ' + normalisedY + '% ,';
  } else  
  if (nodecount == 3) {
    nodescss = nodescss + normalisedX + '% ' + normalisedY + '% );';
    alert(nodescss);
    nodescss = '-webkit-clip-path: polygon( ';
    nodecount = 0;
  }   
});
```

我也按照这种方式实现了一个能快速获取坐标的工具函数。

![clip-path3](https://moudicat-data.oss-cn-beijing.aliyuncs.com/cdn/2017/03/piecesclick.png)

尝试绘制了这样一个图形，当然也发现了不少问题，点击的精确度并不如预想，图形绘制有间隙，只能通过微调让它对齐，这十分考验人的耐心。
## License
MIT &copy; [Moudicat](https://github.com/moudicat)
