describe('Dropdown practice', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('Select an option in static dropdown', () => {
        cy.get('select').select('option2').should('have.value', 'option2');
    });

    it('Select an option in dynamic dropdown', () => {
        cy.get('#autocomplete').type('ind');

        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text() === 'India'){
                $el.click();
            }
        });

        cy.get('#autocomplete').should('have.value', 'India');
    })
});