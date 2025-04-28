describe('Newsletter Signup under Resources dropdown', () => {
  beforeEach(() => {
    cy.viewport(1366, 768);
    cy.visit('https://www.amphora.net');

    // Accept cookies if visible
    cy.get('body').then($body => {
      if ($body.find('.cky-notice-btn-wrapper > .cky-btn-accept').length > 0) {
        cy.get('.cky-notice-btn-wrapper > .cky-btn-accept').click({ force: true })
      }
    });
  });

  it('should sign up for the newsletter and see the thank-you message', () => {
    // Hover over Resources dropdown
    cy.get('nav').contains('Resources').trigger('mouseover');

    // Wait for dropdown
    cy.wait(5000);

    // Click on Newsletter sign-up link
    cy.contains('a', 'Newsletter sign-up').click({ force: true })

    // Fill out the newsletter form
    cy.get('input[name="email"], input[type="email"]').type('Demouser@gmail.com');
    cy.get(':nth-child(2) > .fserv-input-text').type('Demo');
    cy.get(':nth-child(3) > .fserv-input-text').type('User');
    cy.get('button[type="submit"]').click();

    // Assert the thank-you message
    cy.contains('Thank you for signing up for our newsletter').should('be.visible');
  });
});