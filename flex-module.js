const style = document.createElement('style');
const template = document.createElement('template');


// Structure (HTML) for the component
template.innerHTML =
`
<div class="flexwrapper">
	<slot name="flex-item"></slot>
</div>
`;


class gfFlex extends HTMLElement {
	constructor() {
		super();
		const shadow = this.attachShadow({mode: 'open'});
		let flexDirection = this.getAttribute('order');
		// Styling for the component
		style.innerHTML = `
		:host {display: block;}
		.flexwrapper {
			display: flex;
			justify-content: center;
			margin: 1rem 0;
			flex-direction: ${flexDirection};
		}
		::slotted(div) {
			background-color: transperant;
			box-sizing: border-box;
			padding: 1rem;
			margin-right: 1rem;
		}

		::slotted(div):last-child {
			margin-right: 0;
		}

		`;
		//
		shadow.appendChild(style);
		shadow.appendChild(template.content.cloneNode(true));
	}
};

customElements.define('gf-flex', gfFlex);

