const style = document.createElement('style');
const template = document.createElement('template');

style.textContent = `
div {
  margin-bottom: 1rem;
}
input, textarea {
  width: 100%;
  box-sizing: border-box;
  padding: 0.2rem;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid var(--dark1);
  background-color: transparent;
 
}
  form {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: center;
    max-width: 400px; 
    width: 100%;
  }
  button {
    border: none;
    box-sizing: border-box;
    padding: 1rem;
    background-color: var(--dark1);
    color: var(--white);
    border-radius: 6px;
  }
  button:hover {
    cursor: pointer;
    background-color: var(--grey1);
    color: var(--dark1);
  }
  h1, h2, h3 {
    font-family: 'Open Sans Condensed', sans-serif; 
    font-style: normal;
    font-weight: 700;
    margin-top: 0;
    padding-top: 0;
    color: #434348;
    text-align: center;
  }
  
  h1 {
    font-size: 2.4rem;
    font-style: normal;
  }
  
  h2 {
    font-size: 1.9rem;
    font-style: normal;
  }
  
`;
template.innerHTML = `

<h2>Intresseanmälan</h2>
<p>
Är du intresserad av detta så hör gärna av dig på mejl till <a href="mailto:sandra@gladjefabriken.se">sandra@gladjefabriken.se</a> eller på telefon 090-29 050.
</p>
<p>
<i>
Tidigare formulär som legat här fungerade inte som tänkt och är därför borttagen. Tyvärr innebär det att din kontakt eventuellt fallit bort och att du därför inte fått svar. Vi beklagar detta och uppmanar dig att pröva att kontakta Glädjefabriken igen via kontaktvägarna ovan. 
</i>
</p>

`;


class gfForm extends HTMLElement {
	constructor() {
		super();
		const shadow = this.attachShadow({mode: 'open'});
		shadow.appendChild(style);
		shadow.appendChild(template.content.cloneNode(true));
		
	}
}

customElements.define('gf-contact', gfForm);




// old text for template inner html
/*<form action="https://mailthis.to/gladjefabriken2020" method="POST" encType="multipart/form-data">
   <div><label>Namn: <input name="name" type="text" placeholder="Namn (för- och efternamn)"></label></div>
   <div><label> E-post: * <input required name="email" type="text"></label></div>
   <div><label>Meddelande: <textarea name="message"></textarea></label></div>
   <div><button>Skicka</button></div> 
   <input type="hidden" name="_subject" value="Från Glädjefabriken">
   <input type="hidden" name="_after" value="www.gladjefabriken.se">
   <input type="hidden" name="_confirmation" value="Tack för din intresseanmälan, du får en återkoppling inom kort. Glada hälsningar från Sandra">
 </form>*/