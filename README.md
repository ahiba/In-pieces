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

## License
MIT &copy; [Moudicat](https://github.com/moudicat)
