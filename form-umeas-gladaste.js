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

  .send-button {
    margin-top: 1.2rem;
  }
  .gf-smalltext {
    font-size: 0.87rem;
    font-style: normal;
    font-weight: normal;
  }
  
`;
template.innerHTML = `
<style>
input[type="radio"] {
  text-align: left;
  width: auto;
}
</style>
<div style="padding-left: 2rem; padding-right: 2rem; padding-bottom: 2rem; padding-top: 0;">
<form action="formHandler.php" method="POST" accept-charset="UTF-8">
<div><label>  Umeås gladaste medarbetare <input type="radio" name="Nomineringskategori" value="medarbetare"  required></label></div>
<div><label><span>Umeås gladaste chef <input type="radio" name="Nomineringskategori" value="chef"  required></label></div>
<div style="margin-bottom: 3rem;"><label> Årets räddare i nöden <span class="gf-smalltext">(Person eller företag som hjälpt företagare under Corona-krisen)</span> <input type="radio" name="Nomineringskategori" value="räddare"  required></label></div>
<div><label>Namn: <input name="Namn" type="text" placeholder="Namn (för- och efternamn)"></label></div>
<div><label> E-post: * <input required name="E-post" type="email"></label></div>
<div><label> Jag vill nominera: * <input required name="Nominerad" type="text"></label></div>
<div><label>Motivering/meddelande: <textarea name="Motivering"></textarea></label></div>




<div><button class="send-button">Skicka</button></div> 
<input type="hidden" name="subject" value="Umeåes gladaste företagare">
</form>
</div>
`;


class gfFormVote extends HTMLElement {
	constructor() {
		super();
		const shadow = this.attachShadow({mode: 'open'});
		shadow.appendChild(style);
		shadow.appendChild(template.content.cloneNode(true));
		
	}
}

customElements.define('gf-vote', gfFormVote);


