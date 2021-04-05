const style = document.createElement('style');
const template = document.createElement('template');
const script = document.createElement('script');
var gfDebug = false;


// Styling for the component
style.innerHTML = `
a:link {
	color: var(--white);
	text-decoration: none;
	opacity: 1;
  }
  
  
a:visited {
	color: var(--white);
  }
  
  
a:hover {
	color: var(--white);
	text-decoration: none;
	
  }
  
a:active {
	color: var(--white);
  } 
  
  .grid {
	display: grid;
	color: var(--white);
	grid-template-columns: 120px 1fr;
	column-gap: 0.8rem;
	background-color: var(--dark1);
	grid-template-areas: 
  "logo menu"
  "submenu submenu"
  "submenu2 submenu2"
  ;
  }
  
  .gf-menu-logo {
	grid-area: logo;
	box-sizing: border-box;
	padding-top: 0.4rem;
	padding-left: 1.4rem;
}
  
  .gf-menu-logo img {
	width: 100%;
	max-width: 120px;
  }
  
  
  .nav-main {
	display: flex;
	grid-area: menu;
	justify-content: space-around;
	box-sizing: border-box;
  }
  
  .nav-main div, .nav-sub div, .nav-sub-gladaste div {
	padding: 1.4rem;
  }
  
  .gf-menu-hover:hover {
	  background-color: var(--white);
	  color: var(--dark1);
	  cursor: pointer;
	
	}
  
  	.nav-sub {
	display: flex;
	grid-area: submenu;	
	justify-content: space-around;
	background-color: #444;
	box-sizing: border-box;
	display: none;
	
  }

  .nav-sub-gladaste {
	display: flex;
	grid-area: submenu2;	
	justify-content: space-around;
	background-color: #444;
	box-sizing: border-box;
	display: none;
}
  
  
  .nav-mobile {
	display: none;
  }
  
  
  .nav-mobile:hover {cursor: pointer}
  
  
  .js-show {
	display: flex !important; // this is actully needed
  }
  
  
  
  
	@media only screen and (max-width: 740px) {
	  .nav-main, .nav-sub, .nav-sub-gladaste {
		flex-direction: column;
		background-color: #444;
	  }
	
	  .gf-menu-hover:hover {
		background-color: var(--white);
		color: var(--dark1);
		cursor: pointer;
	  }

	  .nav-main {
	  display: none;
	  grid-area: menu;
	}
	.nav-mobile {
	  grid-area: hamburger;
	  display: flex;
	  align-items: center;
	}
	.nav-mobile div {
	  position: relative;
	  top: 4px;
	}	
	  
	.nav-sub {
	  grid-area: submenu;
	  display: none;
	  padding-top: 1rem;
	  padding-left: 0;
	  padding-right: 0;
	  padding-bottom: 0;
	  text-indent: 2rem;
	}

	.nav-sub-gladaste{
		grid-area: submenu2;
		display: none;
		padding-top: 1rem;
		padding-left: 0;
		padding-right: 0;
		padding-bottom: 0;
		text-indent: 2rem;
	  }


	  
	.nav-sub div{
	  margin-bottom: 1rem;
	}
  
	.grid {
	  display: grid;
	  grid-template-columns: 120px 1fr;
	  grid-template-rows: auto;
	
	  grid-template-areas: 
	  "logo hamburger"
		"menu menu"
	  "submenu submenu"
	  "submenu2 submenu2"
	  ;
	  }
	
  }
  
	
`;

script.textContent = `
function showSubMenu() {
	
	const main = document.querySelector('gf-nav').shadowRoot.querySelector('.nav-sub');
	
	main.classList.toggle('js-show');
	main.animate(
	[
	  { opacity: 0,  filter: 'blur(3px)' },
	  { opacity: 1, filter: 'blur(0)' },
	  ], 400
	);
	
	
	};	

	function showSubMenuGladaste() {
	
		const main = document.querySelector('gf-nav').shadowRoot.querySelector('.nav-sub-gladaste');
		
		main.classList.toggle('js-show');
		main.animate(
		[
		  { opacity: 0,  filter: 'blur(3px)' },
		  { opacity: 1, filter: 'blur(0)' },
		  ], 400
		);
		
	};
	
	function showMenu() {
	
	const main2 = document.querySelector('gf-nav').shadowRoot.querySelector('.nav-main');
	main2.classList.toggle('js-show');
	main2.animate(
	[
	  { opacity: 0 },
	  { opacity: 1 },
	  ], 500
	);
	document.querySelector('gf-nav').shadowRoot.querySelector('.nav-sub').classList.remove('js-show');
	};
`;

// Structure (HTML) fro the component
template.innerHTML =
`<div class="grid">
    
<div class="gf-menu-logo"><img src="img/logo.png" alt="logotyp"></div>

<div class="nav-mobile">
	<div onclick="showMenu()">
	<svg height="32px" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="#fff" d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"></path></svg>
  </div>
</div>

<div class="nav-main">
  <a><div class="gf-menu-hover" onclick="showSubMenu()">Tjänster</div></a>
  <a href="om.html"><div class="gf-menu-hover">Om</div></a>
  <a><div class="gf-menu-hover" onclick="showSubMenuGladaste()">Årets gladaste företagare</div></a>
  <a href="kontakt.html"><div class="gf-menu-hover">Kontakt</div></a>
</div>

<div class="nav-sub">
  <a href="tjanster-event.html"><div class="gf-menu-hover">Event</div></a>
  <a href="tjanster-forelasning.html"><div class="gf-menu-hover">Föreläsningar</div></a>
  <a href="tjanster-goodwill.html"><div class="gf-menu-hover">Goodwill</div></a>
  <a href="tjanster-produkter.html"><div class="gf-menu-hover">Produkter</div></a>
</div>

<div class="nav-sub-gladaste">
  <a href="ugf.html"><div class="gf-menu-hover">Umeås gladaste företagare</div></a>
  <a href="sgf.html"><div class="gf-menu-hover">Stockholms gladaste företagare</div></a>
</div>

</div>
`;






class gfNavigation extends HTMLElement {
	constructor() {
		super();
		const shadow = this.attachShadow({mode: 'open'});
		shadow.appendChild(style);
		shadow.appendChild(script);
		shadow.appendChild(template.content.cloneNode(true));
		
	}
}

customElements.define('gf-nav', gfNavigation);

