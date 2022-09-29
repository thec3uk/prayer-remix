module.exports = function (plop) {
	// create your generators here
	plop.setGenerator('component', {
		description: 'React component using Typescript and Styled Components',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'name',
			},
		],
		actions: [
			{
				type: 'addMany',
				destination: 'app/components/{{pascalCase name}}',
				templateFiles: 'app/plop-templates/component/*.hbs',
				base: 'app/plop-templates/component',
			},
		],
	});
};
