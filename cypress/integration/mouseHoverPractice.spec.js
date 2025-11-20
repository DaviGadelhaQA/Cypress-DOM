describe('Mouse Hover', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('Handling mouse hover', () => {
        cy.get('div.mouse-hover-content').invoke('show');
        cy.contains('Top').click();
        cy.url().should('include', 'top');
    });
});