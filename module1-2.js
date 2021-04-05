//import { dataStore } from './datastore.js';
async function getDatastore() {
    const response = await fetch('datastore.json');
    const json = await response.json();
	console.log('json', json);
    return json;
};

function insertCustomElements(input = 'index-modules.html') {
	fetch(`/${input}`)
    .then(response => response.text())
    .then(data => document.querySelector('.gf-main').innerHTML = data);
};
insertCustomElements();

// Todo make this not have to wrap all functions
async function main() {

	const dataStore = await getDatastore();
	

	function getData(getText) {
		let dataValue = dataStore.text[getText];
		console.log('dastavalue gettext', dataValue);
		return dataValue;
	};	

	function getImage(getImage) {
		let dataValue = dataStore.img[getImage];
		console.log('dastavalue getImage', dataValue);
		return dataValue;
	};	


	
	class GFmodule extends HTMLElement {

		constructor() {
			super();
			const flexDirect = this.getAttribute('order');
			const shadow = this.attachShadow({mode: 'open'});
			const template = document.createElement('template');
			let imageSrc = getImage(this.getAttribute('image'));
			let txt = getData(this.getAttribute('text'));
			let bgColor = this.getAttribute('bg-color');
			
			
			
			function getTemplate(whatTemplate) {
				switch (whatTemplate) {
					case 'onlyText':
						return `
							<div class="wrapper">
								<div class="text">
									${txt}
								</div>
							</div>
							` ;
					case 'onlyImage':
						return `
							<div class="wrapper">
								<div class="img"><img src="${imageSrc}" alt="bild"></div>
							</div>
							` ;
					case 'bothTextImage':
						return `
							<div class="wrapper">
								<div class="text">
								${txt}
								</div>
								<div class="img"><img src="${imageSrc}" alt="bild"></div>
							</div>
							` ;
					case 'video': 
						return `
					<div class="wrapper">
						<div style="padding: 2rem; background-color: var(--${bgColor});">
							${txt}

							<div class="gf-video-wrapper">
								<iframe width="560" height="315" src="${imageSrc}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							</div>
						</div>
					</div>
					` ;
					case 'video-no-text': 
						return `
						<div class="wrapper">
						<div style="padding: 2rem; background-color: var(--${bgColor});">
							<div class="gf-video-wrapper">
								<iframe width="560" height="315" src="${imageSrc}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							</div>
						</div>
					</div>
					` ;

					case 'kontakt' :
						return `
						<div class="wrapper">
							<div class="text">
								${txt}
								<gf-contact></gf-contact>
							</div>
							<div class="img">
							<img src="${imageSrc}" alt="bild">
							</div>
						</div>
						`;
					default:
					break;
				}
			};
			
			template.innerHTML = getTemplate(this.getAttribute('template'));
		
			const style = document.createElement('style');
			style.innerHTML  = `
				:host {display: block;} 
				.wrapper {
					display: flex; 
					justify-content: flex-start; 
					flex-direction: ${flexDirect};
				}
				.text {
					background-color: var(--${bgColor}); 
					flex-grow: 1; 
					flex-basis: 50%; 
					padding: 2rem; 
					text-align: left;
					box-sizing: border-box;
				}
				.gf-video-wrapper {
					width: 100%;
					height: 0;
					padding-bottom: 56.2%;
					position: relative;
				}
				.gf-video-wrapper iframe {
					position: absolute;
					width: 100%;
					height: 100%;
				}
				h1, h2, h3 {
					font-family: 'Open Sans Condensed', sans-serif; 
					font-style: normal;
					font-weight: 700;
					margin-top: 0;
					margin-bottom: 0;
					padding-top: 0;
					color: var(--headingColor);
					text-align: center;
					line-height: 1.4;
				}
				
				h1 {
					font-size: 2.4rem;
					font-style: normal;
				}
				
				h2 {
					font-size: 1.9rem;
					font-style: normal;
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

				.img {
					flex-grow: 1; flex-basis: 50%;
				}
				.img img {
				width: 100%; height: 100%; vertical-align: top; object-fit: cover;
				}

				.gf-cite-source {
					font-weight: 300;
				}
				
				.gf-cite-source::before {
					content: '-';
				}
						
				@media only screen and (max-width: 740px) {
						.wrapper {
							flex-direction: column;
								
						}
						}
					`;
		
			shadow.append(style);
			shadow.appendChild(template.content.cloneNode(true));

		};
		
	} //end class
	window.customElements.define('gf-panel', GFmodule);

};
main();