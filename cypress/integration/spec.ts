describe('Test FAQ', () => {
  it('Visits the initial project page and checks title', () => {
    cy.visit('/');
    cy.contains('HAVE A QUESTION? WE CAN HELP');
  });

  it('Visits the initial project page and checks title and checks the first question', () => {
    cy.get('button.accordion')
      .first()
      .contains('What vehicles are covered')
      .click();
  });

  it('Visits the initial project page and checks title and expands the first question', () => {
    cy.contains('HAVE A QUESTION? WE CAN HELP');
    cy.get('button.accordion')
      .first()
      .contains('What vehicles are covered')
      .click();

    cy.get('.panel').contains(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    );
  });

});
