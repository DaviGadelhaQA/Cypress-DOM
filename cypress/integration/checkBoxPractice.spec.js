describe('CheckBox Practice', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('Select the checkbox', () => {
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
    });

    it('Unselect the checkbox', () => {
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
    });

    it('Select multiples checkbox', () => {
        cy.get('input[type="checkbox"]').check(['option2', 'option3']);
    });
});