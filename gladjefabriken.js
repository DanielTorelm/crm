function subMenu() {
 document.querySelector('.gf-nav-item-sub').style.display = 'block';
};

function subMenuHide() {
  document.querySelector('.gf-nav-item-sub').style.display = 'none';
 };

function mobileMenuShow() {
  let navs = document.querySelectorAll('.gf-nav-item');
  for (let nav of navs) {
    console.log('nav', nav);
    if (nav.style.getPropertyValue('--displayNone')=="none" || nav.style.getPropertyValue('--displayNone')=="") {
      nav.style.setProperty('--displayNone', "block");;
    }
    else if(nav.style.getPropertyValue('--displayNone')=="block") {
      nav.style.setProperty('--displayNone', "none");
    }
    
  }
};



/*document.querySelector('.gf-nav-click').addEventListener('click', menuFunction);

function menuFunction() {
console.log('running');
  const main = document.querySelector('.gf-main');
  console.log('.gf-main', main);
  //const divMenu = document.createElement('div').setAttribute('style', 'width: 200px; height: 200px; background-color: pink');
  const divMenu = document.createElement("div"); 
  console.log('divMenu', divMenu)
  main.append(divMenu);
};*/

/*var statusBox = document.querySelector(".gf-logo");
var statusText = document.getElementById(".gf-first-row");

function handler(entries, observer) {
  for (entry of entries) {
    console.log(entry);

    statusText.textContent = entry.isIntersecting;

    if (entry.isIntersecting) {
      statusBox.className = "yes";
    } else {
      statusBox.className = "no";
    }
  }
}

// By default, invokes the handler whenever:
//   1. Any part of the target enters the viewport
//   2. The last part of the target leaves the viewport 

let observer = new IntersectionObserver(handler);
observer.observe(document.getElementById("target"));*/
