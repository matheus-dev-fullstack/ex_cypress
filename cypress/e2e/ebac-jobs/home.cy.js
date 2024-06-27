// <reference types="cypress" />

describe('Testes para a home', () => {
    it('Deve renderizar 4 vagas', () => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
        cy.get('.ListaVagas_vagas_gmNzn li').should('have.length', 4)
    })
})