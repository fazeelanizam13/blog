---
title: "Introduction to pure CSS art"
date: "March 16, 2020"
tags: "CSS, HTML, JavaScript"
---

Maybe you have heard about the term ‘CSS Art’ somewhere and even may have come across amazing work by developers under the topic. Anyways, here I will be trying my hand at breaking down the art of creating CSS images for you like so many others have done already, which of course happened to be what I learned from once.

I like to put CSS art as ‘coding vector illustrations.’ No, seriously, spare a second to follow <a href="http://diana-adrianne.com/purecss-francine/" target="_blank">this link</a> and you’ll realize that it’s not so wrong after all. Basically, it’s specifying CSS rules to some <code>&lt;div></code> tags, and the rest is your imagination. So, creating CSS art is not just a fun thing to do, but also an effortless way to speed up your CSS writing skills, and on the way, you might even discover a number of CSS tricks that you may not have even knew to exist before.

But before starting out, I will recommend my tool of choice for virtually any web design project, which is Brackets text editor. Obviously, here you will have to refresh the browser WAY often than when you code a typical web page, but the ‘live preview’ option available in <a href="http://brackets.io/" target="_blank">Brackets</a> will save you a lot of clicks (stress) on this task. Right now there is a number of other editors with the live preview facility, but as I said, Brackets is just my go-to.

So without further delay, let’s get into work. And what we will be creating today is this coffee cup:

<p align="center">
  <img src='https://blog.fazeelanizam.com/images/introduction-to-pure-css-art/image.png' />
</p>

To get started, we will first try to understand the different parts of the coffee cup illustration, that is, the <code>&lt;div></code> tags that we will be styling later with CSS.

<pre>
  <code class='language-html'>
&lt;div class="box"> &lt;!--Container. Helps to have a border-->
  &lt;div class="lid"> &lt;!--the lid. We have divided it into two parts-->
    &lt;div class="lid-top">&lt;/div>
    &lt;div class="lid-bottom">&lt;/div>
  &lt;/div>
  
  &lt;div class="cup"> &lt;!--mainly two parts. The shadow under the lid, and the sticker-->
    &lt;div class="shadow">&lt;/div>
    &lt;div class="sticker"> &lt;!--on the sticker, we have a message, and a small heart, and the heart is made out of two halves!-->
      &lt;div class="heart">
        &lt;div class="left half">&lt;/div>
        &lt;div class="right half">&lt;/div>
      &lt;/div>

      &lt;div class="quote">
        &lt;p>Potion of Life&lt;/p>
      &lt;/div>
    &lt;/div>
  &lt;/div>

  &lt;div class="base">&lt;/div> &lt;!--just to put everything together-->
 &lt;/div> 
  </code>
</pre>

From this point onward will be the fun part.

First up, center the <code>.box</code> on the page with <code>margin: 0 auto</code> and set it up with your preferred <code>width</code> and <code>height</code>. I have used flexbox for <code>.box</code> and will be using it whenever possible for the rest of the <code>&lt;div></code>s, because flexbox is an easy way to get things aligned the way you want without the need to specify margins and padding and whatnot.

<pre>
  <code class='language-css'>
body {
  background-color: #00CAE8;
}

.box {
  margin: 0 auto;
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
} 
  </code>
</pre>

The above code will not give you much, since we had not specified widths and heights for the child <code>&lt;div></code>s of <code>.box</code>. Let’s start with <code>.cup</code>.

<pre>
  <code class='language-css'>
.cup {
  border-top: 370px solid #AB733A; /*height*/
  border-left: 45px solid transparent;
  border-right: 45px solid transparent; /*slant*/
  height: 0px;
  width: 200px; /*width*/
} 
  </code>
</pre>

You will see that this is not a rectangular shape, but a trapezoid. Here you set the <code>height</code> to <code>0</code> and play around with <code>border-top</code> (represents height of the trapezoid, in this case), <code>border-left</code> and <code>border-right</code> (how slanted the non-parallel edges are) and <code>width</code> (width of the shorter edge of the two parallel edges.) Remember to set the <code>background-color</code> of <code>border-left</code> and <code>border-right</code> to <code>transparent</code>.

Now style the <code>.lid</code> to be a flexbox.

<pre>
  <code class='language-css'>
.lid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 75px;
}
  </code>
</pre>

And then add styles for the child <code>&lt;div></code>s of <code>.lid</code> – <code>.lid-top</code> and <code>.lid-bottom</code>. We have used the same approach of creating a trapezoid as we did for <code>.cup</code>, but note that this time, height of the shape is represented by <code>border-bottom</code> instead of <code>border-top</code>, because they are upside-down.

<pre>
  <code class='language-css'>
.lid-top {
  border-bottom: 45px solid #5A4627; /*height*/
  border-left: 6px solid transparent;
  border-right: 6px solid transparent; /*slant*/
  height: 0;
  width: 280px; /*width*/
}

.lid-bottom {
  border-bottom: 30px solid #5A4627; /*height*/
  border-left: 5px solid transparent;
  border-right: 5px solid transparent; /*slant*/
  height: 0;
  width: 315px; /*width*/
} 
  </code>
</pre>

Add the base.

<pre>
  <code class='language-css'>
.base {
  height: 5px;
  width: 400px;
  background-color: #000;
  border-radius: 5px;
}
  </code>
</pre>

Now we will move on to the child <code>&lt;div></code>s of <code>.cup</code>.

First, add style rules for <code>.shadow</code>. Un-comment the first three lines one by one and you’ll understand how <code>position: relative</code> works when you want to position an element relative to its parent element. Notice how <code>height</code> of <code>.cup</code> is <code>0</code>, thus the <code>.shadow</code> started out at the bottom of <code>.cup</code> and after we set <code>position: relative</code> before setting <code>top: -370px</code> (which is the <code>height</code> of <code>border-top</code> of <code>.cup</code>), <code>.shadow</code> ended up right at the top of <code>.cup</code>.

<pre>
  <code class='language-css'>
.shadow {
  /*position: relative;*/
  /*top: -370px;*/
  /*left: -45px;*/
  border-top: 8px solid #85592E; /*height*/
  border-left: 1px solid transparent;
  border-right: 1px solid transparent; /*slant*/
  height: 0;
  width: 288px; /*width*/
}
  </code>
</pre>

Style the <code>.sticker</code>. This one is a trapezoid as well, and here there’s no way you can guess where to position it without trying out different values until you land it where you want!

<pre>
  <code class='language-css'>
.sticker {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -280px;
  left: -35px;
  border-top: 180px solid #fff; /*height*/
  border-left: 22px solid transparent;
  border-right: 22px solid transparent; /*slant*/
  height: 0;
  width: 225px; /*width*/
}
  </code>
</pre>

Position the <code>.quote</code> in the same manner. It helps to add the font styles including <code>font-family</code> and <code>font-size</code> first before positioning.

<pre>
  <code class='language-css'>
p {
  font-family: "Ink Free";
  font-size: 3em;
  font-weight: 600;
  text-align: center;
}
  
.quote {
  position: relative;
  top: -150px;
  width: 130px;
  height: 150px;
}
  </code>
</pre>

We will also be adding a small heart on the sticker near the end of the message.

<pre>
  <code class='language-css'>
.heart {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  width: 40px;
  height: 40px;
  top: -75px;
  left: 150px;
  transform: rotate(30deg)
}
  
.half {
  background-color: #5C058B;
  width: 20px;
  height: 40px;
  border-radius: 100%;
}
  
.left {
  transform: rotate(-35deg) translateX(3px);
}
  
.right {
  transform: rotate(35deg) translateX(-3px);
} 
  </code>
</pre>

And that’s about it! You now have a cute coffee cup with only a few lines of code, and this is not all one can do with CSS art either.

You can find the code and demo right <a href="https://github.com/fazeelanizam13/blog1-pure-css-coffee-cup" target="_blank">here</a>.

So, I hope I taught you something useful and new, and shared with you a way to improve your coding skills and at the same time, use it to make something pretty.

## Inspiration:

- <a href="https://www.creativebloq.com/features/get-started-with-css-art" target="_blank">Get started with CSS art</a>
- <a href="https://medium.com/coding-artist/a-beginners-guide-to-pure-css-images-ef9a5d069dd2" target="_blank">A Beginner’s Guide to Pure CSS Images</a>
