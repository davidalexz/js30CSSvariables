const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
	// console.log(this.dataset); //dataset is an object that contains all the data(data-sizing) atributes from that specific element, in our case the sizing suffix px;
	const suffix = this.dataset.sizing || ''; // the '', because there is no suffix for the hexcode color;
	//-----update the actual variables-----\\
	//console.log(this.name);
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
