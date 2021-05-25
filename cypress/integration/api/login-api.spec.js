// check this file using TypeScript if available
// @ts-check

const apiUsers = `${Cypress.env("apiUrl")}/login`;

describe("Login API", function () {

	context("POST /login", function () {
		it("gets a user and has token", function () {
			cy.request("POST", apiUsers, { email: 'a', password: 'a' }).then((response) => {
				expect(response.status).to.eq(200);
				expect(response.body.user).to.contain({ email: 'a' });
				expect(response.body.token).to.exist;
			});
		});
	});


});
