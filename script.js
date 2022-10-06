
let bHome = document.querySelector('body')
let dHome = document.createElement('div')
bHome.appendChild(dHome)

dHome.classList.add('container') // class added
let divLogo = document.createElement('div')
let divMenu = document.createElement('div')
dHome.appendChild(divLogo)
dHome.appendChild(divMenu)

divLogo.classList.add('logo')
divMenu.classList.add('menu')

let imgLogo = document.createElement('img')
divLogo.appendChild(imgLogo)
imgLogo.src="./image/logo23.png"

let paragrafMenu = `
<p>Home</p>
<p>Men's</p>
<p>Women's</p>
<p>Kid's</p>
<p>Pages</p>
<p>Features</p>
<p>Explore</p>
`
divMenu.innerHTML = paragrafMenu


