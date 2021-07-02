# tempcgr.github.io

Cgr:
hey, centrilize most things..
Straight Only small topics side by side.

Remove images on first section of about and home page.

And tell me how you are naming class="". 
I don't know the way people do.....
Never done it professionally.


Found on a website on how to include header and footer on all pages.


<body>
  
  <iframe src="header.html" onload="this.before((this.contentDocument.body||this.contentDocument).children[0]);this.remove()"></iframe>
  
  Content.
  
  <iframe src="footer.html" onload="this.before((this.contentDocument.body||this.contentDocument).children[0]);this.remove()"></iframe>
  
</body>