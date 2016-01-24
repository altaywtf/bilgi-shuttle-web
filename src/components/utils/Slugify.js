const slugify = text => {
	
	let trMap = { 'çÇ':'c', 'ğĞ':'g', 'şŞ':'s', 'üÜ':'u', 'ıİ':'i', 'öÖ':'o' };
	
	for (let key in trMap){
		text = text.replace(new RegExp('['+key+']','g'), trMap[key]);
	}
	
	return  text.replace(/[^-a-zA-Z0-9\s]+/ig, '') // remove non-alphanumeric chars
				.replace(/\s/gi, '-') // convert spaces to dashes
				.replace(/[-]+/gi, '-') // trim repeated dashes
				.toLowerCase();
};

export default slugify;