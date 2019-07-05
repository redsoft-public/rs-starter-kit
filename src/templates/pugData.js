exports.headerLink = [
	{
		name: 'header link 1',
		link: '#headerlink-1'
	},
	{
		name: 'header link 2',
		link: '#headerlink-2'
	}
];

exports.footerLink = (max = 5) => {
	let arr = [];
	for (let i = 1; i <= max; i++) {
		arr.push({
			name: `footer link - ${i}`,
			link: `#footerlink-${i}`
		});
	}
	return arr;
};

exports.selectOptions = ['', 'Тестовое значение 1', 'Тестовое значение 2'];
exports.slides = [{ title: 'Title 1', subtitle: 'Subtitle 1' }, { title: 'Title 2', subtitle: 'Subtitle 2' }, { title: 'Title 3', subtitle: 'Subtitle 3' }];