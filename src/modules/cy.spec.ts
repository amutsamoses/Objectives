describe('my fisrt test', () => {
    it('visit the library to test', () => {
        cy.visit('https://example.cypress.io');
        cy.contains('type').click();
        cy.url().should('include', '/commands/actions');
        cy.get('.action-email')
            .type(' [email protected]')
});