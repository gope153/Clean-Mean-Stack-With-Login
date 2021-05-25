// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('loginUT1', () => {
	cy.request({
		method: 'POST',
		url: 'http://localhost:5050/login',
		body: {
			email: 'a',
			password: 'a'
		}
	})
		.then((resp) => {
			console.log(resp.body.token);
			window.localStorage.setItem('token', resp.body.token);
		})
});


Cypress.Commands.add('logout', () => {
	window.localStorage.removeItem('token');
});
