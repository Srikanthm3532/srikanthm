/// <reference types="Cypress" />

describe('My test suite', function()
{

it('My test case',function() {

//child tab    
cy.viewport(1366, 768);
cy.visit("https://www.amphora.net")

cy.contains('Symphony CTRM').click({force: true })
cy.url().should('include','symphony')

cy.contains('Alchemy CTRM').click({force: true })
cy.url().should('include','alchemy')

cy.contains('VaR Module').click({force: true })
cy.url().should('include','var-module')

cy.contains('Trade confirmations manager').click({force: true })
cy.url().should('include','trade-confirmations-manager')

cy.contains('Freight manager').click({force: true })
cy.url().should('include','freight-manager')

cy.contains('Claims manager').click({force: true })
cy.url().should('include','claims-manager')

cy.contains('Symphony Credit').click({force: true })
cy.url().should('include','symphony-credit')

})
})