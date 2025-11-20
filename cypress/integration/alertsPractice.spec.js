describe('Alert Practice', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('Manipulating an alert', () => {
        cy.get('#alertbtn').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        })
    });

    it('Manipulating a confirm alert', () => {
        cy.get('#alertbtn').click();
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        })
    });
});