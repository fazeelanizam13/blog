---
title: 'How to draw an inline SVG on a canvas?'
date: 'March 28, 2020'
tags: 'CSS, HTML, JavaScript'
---

For one of my projects, I needed to read pixel data from a dynamically drawn SVG, but I didn’t know how to transfer it to a canvas, which we first have to do before extracting pixel data.

I’ll explain the method that I used, so, this is what we must have at the beginning:

A <code>&lt;div></code> with an inline SVG. We have four rectangles lined-up.

<pre>
  <code class='language-html'>
&lt;div id="box-svg">
  &lt;svg id="svg" style="position: relative; left: 0; width: 100%; height: 100%;">
    &lt;rect fill="rgb(136, 0, 68)" width="25%" height="100%" x="0" y="0" />
    &lt;rect fill="rgb(230, 0, 115)" width="25%" height="100%" x="25%" y="0" />
    &lt;rect fill="rgb(255, 91, 173)" width="25%" height="100%" x="50%" y="0" />
    &lt;rect fill="rgb(255, 183, 219)" width="25%" height="100%" x="75%" y="0" />
  &lt;/svg>
&lt;/div>
  </code>
</pre>

Then we have a <code>&lt;div></code> with our canvas. This is where we will draw our SVG on.

<pre>
  <code class='language-html'>
&lt;div id="box-canvas">
  &lt;canvas id="canvas">&lt;/canvas>
&lt;/div>
  </code>
</pre>

The styles. Put them in the <code>&lt;head></code> section:

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
#box-svg, #box-canvas {
  width: 90%;
  height: 10%;
}
canvas {
  width: 100%;
  height: 100%
}
  </code>
</pre>

Now let’s start out. Throw in all the lines from this point forward inside a <code>&lt;script></code> tag with <code>type='text/javascript'</code> right before <code>&lt;/head></code>.

First we pick up the canvas, and specify <code>width</code> and <code>height</code> for it:

(Find out why we didn’t do this in our CSS at the end of the tutorial.)

<pre>
  <code class='language-javascript'>
let canvas = document.getElementById('canvas')

canvas.width = document.getElementById('box-canvas').offsetWidth
canvas.height = document.getElementById('box-canvas').offsetHeight
  </code>
</pre>

Next, we call <code>getContext('2d')</code> which returns an object with all the methods and properties that we can use to draw on <code>canvas</code>.

<pre>
  <code class='language-javascript'>
let context = canvas.getContext('2d')
  </code>
</pre>

Now, what we need to draw happens to be an inline SVG, but the problem is that the method we are supposed to use, <code>drawImage()</code> does not accept them!

So, something that we can do is turning the inline SVG into a <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs" target="_blank">data URL</a>:

For that, first we use <code>XMLSerializer().serializeToString()</code> for a string which represents our SVG in XML form.

<pre>
  <code class='language-javascript'>
let svgURL = new XMLSerializer().serializeToString(document.getElementById('svg'))
  </code>
</pre>

We then create an <code>&lt;img></code>,

<pre>
  <code class='language-javascript'>
let img = document.createElement('img')
  </code>
</pre>

and then we can call <code>drawImage()</code> from <code>img.onload</code>, and specify the <code>src</code> for the <code>&lt;img></code> afterwards. Note that we have encoded the URL for the svg:

<pre>
  <code class='language-javascript'>
img.onload = function(){
  context.drawImage(img, 0,0)
}

img.src = 'data:image/svg+xml; charset=utf8, ' + encodeURIComponent(svgURL)
  </code>
</pre>

And that’s it!

You can find the complete code and the demo <a href="https://github.com/fazeelanizam13/blog2-draw-inline-svg-on-canvas" target="_blank">here</a> on GitHub.

And learn in my next tutorial why we better not specify canvas dimensions in CSS.