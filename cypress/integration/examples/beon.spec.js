/// <reference types="cypress" /> 

describe('Beon tests', () => {

    it.only('Searching on google', () => {
        cy.visit('https://www.google.com.br/?hl=pt-BR');
        cy.get("#APjFqb").type('beon.tech');
        cy.get(":nth-child(1) > .eIPGRd > .pcTkSc").click();
        cy.get("#rso > div:nth-child(2) > div > div > div.kb0PBd.cvP2Ce.jGGQ5e.ieodic > div > div > span > a > h3").click();

    });
    it('Open Blog', () => {
        cy.visit('https://beon.tech/engineers');
      cy.get(".justify-end > a > .sc-ftvSup").click();
      cy.server();
      cy.route('GET', '**/api/jobs/showcase').as("getBlog");
      cy.wait('@getBlog').then((xhr) => {
        expect(xhr.status).be.eq(200);
      })
    });
  

    it('Searching on gitHub', () => {
        cy.visit('https://github.com/');
        cy.get(".Button-label > :nth-child(3)").click();
        cy.get(".header-search-button").type('luisa-medeiros20');
        cy.get(".ActionListItem-label").click();
        cy.get("[data-testid=nav-item-users]").click();

    });

   
    
});    
