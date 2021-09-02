const makeAlert = () => {
	alert('Thank You for using GIT');
}
const displayName = () => {
	const name = document.getElementsByName('text')[0].value;
	
	let div_el = document.createElement('DIV');

	console.log(name);

	div_el.innerHTML = `<h4>${name}</h4>`;

	document.getElementsByTagName('body')[0].appendChild(div_el);

	document.getElementsByName('text')[0].value == '';
}
