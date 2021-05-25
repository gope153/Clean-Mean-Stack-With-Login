const { verify } = require("jsonwebtoken")

describe('Login Check', () => {
	context('Goes into Login with Correct', () => {
		it("Visits Login", () => {
			cy.visit('/')
			cy.contains('Login')
		})
		it('should login', () => {
			cy.get('#email')
				.type('a')
			cy.get('#password')
				.type('a')
			cy.get('#login').click()
			cy.url().should('include', '/dash')
		})
		it('should logout', () => {
			cy.logout();
			cy.visit('/')
			cy.contains('Login')
		})
	})
})