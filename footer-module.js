const style = document.createElement('style');
const template = document.createElement('template');



// Styling for the component
style.innerHTML = `
.gf-footer {
  	box-sizing: border-box;
	padding: 2.3rem;
	background-color: #333;
	color: #efefef;
	min-height: 30px;
	font-size: 0.9rem;
	text-align: center;
   
  }
.social-icons{
	display: flex;
	justify-content: center;
	margin-bottom: 1.4rem;
	
  }
  
  .social-icon{
	width: 70px;
	margin-right: 1.6rem;
	
  }
  
  .social-icon:hover{
	fill: #fff;
	color:#fff;
	cursor: pionter;
	
  }
  a:link {
	color: currentColor;
	text-decoration: underline;
	opacity: 0.8;
  }
  
  
  a:visited {
	color: currentColor;
  }
  
  
  a:hover {
	color: currentColor;
	text-decoration: none;
	
  }
  
  a:active {
	color: #fff;
  } 
  
`;



// Structure (HTML) for the component
template.innerHTML =
`
<div class="gf-footer">
<div class="social-icons">
<div>
  <a href="https://www.instagram.com/gladjefabriken/" target="_blank">
	<img class="social-icon" src="img/icon-instagram.svg" alt="instagram">
  </a>
</div>
<div>
  <a href="https://www.facebook.com/Gladjefabriken/" target="_blank">
	<img class="social-icon" src="img/icon-facebook.svg" alt="facebook">
  </a>
</div>
<div>
  <a href="https://www.youtube.com/channel/UC0UR1gQMn4ikMt2rzyvrZhQ" target="_blank">
	<img class="social-icon" src="img/icon-youtube.svg" alt="youtube">
  </a>
</div>
</div>
Kontakt: sandra@gladjefabriken.se.

<p style="font-size: var(--gf-smalltext);">Designat och kodat av Daniel Torelm -<a href="http://www.danieltorelm.se" target="_blank">www.danieltorelm.se</a></p>
</div>
`;




class gfFooter extends HTMLElement {
	constructor() {
		super();
		const shadow = this.attachShadow({mode: 'open'});
		shadow.appendChild(style);
		shadow.appendChild(template.content.cloneNode(true));
		
	}
}

customElements.define('gf-footer', gfFooter);

