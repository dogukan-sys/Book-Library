// Set theme of website
const themeToggle = document.querySelector('.themeButton')
const bodyBackground = document.querySelector('body')
let darkTheme = true

const enableDark = () => {
	document.body.classList.add('darktheme')
}

const disableDark = () => {
	document.body.classList.remove('darktheme')
}

themeToggle.addEventListener('click', () => {
	if (darkTheme) {
        disableDark()
        darkTheme = false
	} else {
		enableDark()
        darkTheme = true
	}
})
