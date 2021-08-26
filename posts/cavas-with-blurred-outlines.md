---
title: "Why do shapes inside canvas have blurred outlines?"
date: "March 29, 2020"
tags: "CSS, HTML, JavaScript"
---

To be on point, it just could be that you have set your canvas dimensions through CSS. You must not do that like I did once! Set width and height through default attributes that come with <code>&lt;canvas></code>.

We’ll do a little coding to look at the difference between these two approaches.

Start off with the following HTML:

<pre>
  <code class='language-html'>
&lt;div id="box-canvas-css">
  &lt;p>Canvas with width and height set with CSS (Inner borders are blurred)</p>
  &lt;canvas id="canvas-css">&lt;/canvas>
&lt;/div>

&lt;div id="box-canvas-attr">
  &lt;p>Canvas with width and height set with default attributes (Inner borders are sharp)&lt;/p>
  &lt;canvas id="canvas-attr"></canvas>
&lt;/div>
  </code>
</pre>

And CSS:

<pre>
  <code class='language-css'>
body {
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center
}
#box-canvas-css, #box-canvas-attr {
  width: 90%;
  height: 10%;
}
  </code>
</pre>

Place your <code>&lt;script></code> after the HTML and first pick up the two canvases:

<pre>
  <code class='language-javascript'>
let canvasCSS = document.getElementById('canvas-css')
let canvasATTR = document.getElementById('canvas-attr')
  </code>
</pre>

Set width and height through CSS for <code>canvasCSS</code>:

<pre>
  <code class='language-javascript'>
canvasCSS.style.width = document.getElementById('box-canvas-css').offsetWidth
canvasCSS.style.height = document.getElementById('box-canvas-css').offsetHeight
  </code>
</pre>

And for <code>canvasATTR</code>, set them through default attributes:

<pre>
  <code class='language-javascript'>
canvasATTR.width = document.getElementById('box-canvas-attr').offsetWidth
canvasATTR.height = document.getElementById('box-canvas-attr').offsetHeight
  </code>
</pre>

Now we can draw the shapes:

We will draw four rectangles lined up horizontally on each canvas. <code>colors</code> below represent the four colors for each of them.

<pre>
  <code class='language-javascript'>
let colors = ['rgb(136, 0, 68)', 'rgb(230, 0, 115)', 'rgb(255, 91, 173)', 'rgb(255, 183, 219)']
  </code>
</pre>

We can whip up a function to do the drawing in each canvas. First it calls <code>getContext()</code>, then inside the loop which iterates four times, it picks up one color at a time from <code>colors</code>, and draws four rectangles placed one next to the other.

<pre>
  <code class='language-javascript'>
function draw(canvas, colors){
  let context = canvas.getContext('2d')

  for(let i=0; i < 4; i++){
    context.fillStyle = colors[i]
    context.fillRect((i*.25*canvas.width), 0, (.25*canvas.width), canvas.height)
  }
}
  </code>
</pre>

Now we can call it:

<pre>
  <code class='language-javascript'>
draw(canvasCSS, colors)
draw(canvasATTR, colors)
  </code>
</pre>

Look how the rectangles in the first canvas has visibly blurred inner borders, while in the second one they are as sharp as they should be. The CSS just gives a stretched out look to the canvas instead of setting the dimensions right.

<img src='https://blog.fazeelanizam.com/images/cavas-with-blurred-outlines/image.png' />

You can find the complete code with a demo <a href="https://github.com/fazeelanizam13/blog3-setting-canvas-dimensions-with-css-vs-attributes" target="_blank">here</a> on GitHub.
