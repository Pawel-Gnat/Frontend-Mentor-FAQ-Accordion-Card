const accordion = document.querySelector('.accordion')
const accordionBtns = document.querySelectorAll('.accordion-btn')

function openAccordionItems() {
	// function adds/removes class active
	if (this.nextElementSibling.classList.contains('active')) {
		this.nextElementSibling.classList.remove('active')
	} else {
		closeAccordionItems()
		this.nextElementSibling.classList.toggle('active')
	}
}

const closeAccordionItems = () => {
	// function search and remove an active class from accordion
	const AllActiveItems = document.querySelectorAll('.accordion-info')
	AllActiveItems.forEach(item => item.classList.remove('active'))
}

const ClickOutsideAccordion = e => {
	// function close accordion if I target element that is not an accordion item
	if (e.target.classList.contains('accordion-btn') || e.target.classList.contains('accordion-text')) {
		return
	}
	closeAccordionItems()
}

accordionBtns.forEach(btn => btn.addEventListener('click', openAccordionItems))

window.addEventListener('click', ClickOutsideAccordion)
