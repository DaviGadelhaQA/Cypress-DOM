describe('Radio Button Practice', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('Manipulating a Radio Button', () => {
        cy.get('input[value="radio2"]').check().should('be.checked');
    });
});