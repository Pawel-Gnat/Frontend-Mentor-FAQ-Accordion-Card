const accordion = document.querySelector('.accordion')
const accordionBtns = document.querySelectorAll('.accordion-btn')

// function openAccordionItems() {
// 	// function adds/removes class active
// 	if (this.nextElementSibling.classList.contains('active')) {
// 		this.nextElementSibling.classList.remove('active')
// 	} else {
// 		closeAccordionItems()
// 		this.nextElementSibling.classList.toggle('active')
// 	}
// }

function openAccordionItems() {
	// function adds/removes class active
	if (this.classList.contains('active')) {
		this.classList.remove('active')
		this.nextElementSibling.classList.remove('active')
	} else {
		closeAccordionItems()
		this.classList.add('active')
		this.nextElementSibling.classList.add('active')
	}
}

const closeAccordionItems = () => {
	// function search and remove an active class from accordion
	const AllActiveItems = document.querySelectorAll('.accordion-info')
	AllActiveItems.forEach(item => item.classList.remove('active'))
}

const clickOutsideAccordion = e => {
	// function close accordion if I target element that is not an accordion item
	if (e.target.classList.contains('accordion-btn') || e.target.classList.contains('accordion-text')) {
		return
	}
	closeAccordionItems()
}

accordionBtns.forEach(btn => btn.addEventListener('click', openAccordionItems))

window.addEventListener('click', clickOutsideAccordion)
