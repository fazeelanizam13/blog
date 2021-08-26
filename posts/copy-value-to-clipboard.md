---
title: 'How to copy variable value to clipboard with JavaScript?'
date: 'April 06, 2020'
tags: 'JavaScript'
---

We will be using the <code>document.execCommand()</code> method.

Get coding with the HTML below and we will be writing <code>copyFunction()</code> later.

<pre>
  <code class='language-html'>
&lt;div class="box">
  &lt;p id="text">Text to copy&lt;/p>
  &lt;button id="copyButton" onclick="copyFunction()">Copy&lt;/button>
&lt;/div>
  </code>
</pre>

Add the CSS for a nicer look:

<pre>
  <code class='language-css'>
.box {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Calibri';
  font-size: 1em
}
p {
  text-align: center;
  padding: 20px
}
button {
  border: none;
  background-color: darkslategrey;
  color: white;
  padding: 20px;
  font-size: .9em
}
  </code>
</pre>

On button click, we have called <code>copyFunction()</code>:

<pre>
  <code class='language-javascript'>
function copyFunction(){

}
  </code>
</pre>

Inside the curly brackets, we can start off by assigning the text inside <code>&lt;p></code> to the variable <code>text</code>:

<pre>
  <code class='language-javascript'>
let text = document.getElementById('text').innerHTML
  </code>
</pre>

Then we need to create a <code>&lt;textarea></code> and make <code>text</code> its value:

<pre>
  <code class='language-javascript'>
let dummy = document.createElement('textarea')
dummy.value = text
  </code>
</pre>

After  appending it to <code>&lt;body></code>, we can use <code>select()</code> method to select the text inside it:

<pre>
  <code class='language-javascript'>
document.body.appendChild(dummy)
dummy.select()
  </code>
</pre>

Now we can replace the content in our clipboard with the selection:

<pre>
  <code class='language-javascript'>
document.execCommand('copy')
  </code>
</pre>

And then of course we have to remove <code>dummy</code> from our document:

<pre>
  <code class='language-javascript'>
document.body.removeChild(dummy)
  </code>
</pre>

That’s it, and you can visit <a href="https://github.com/fazeelanizam13/blog4-copy-to-clipboard" target="_blank">here</a> for the complete code and a demo.