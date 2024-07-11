// <reference types="cypress" />

describe('Testes para a página de ', () => {
  beforeEach(() => {
      cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deve preencher o formulário e cadastrar 1 contato', () => {
      cy.visit('https://agenda-contatos-react.vercel.app/')
      cy.get('input[type="text"]').type('Matheus Oliveira')
      cy.get('input[type="email"]').type('matheus@email.com')
      cy.get('input[type="tel"]').type('5199887766')
      cy.get('.adicionar').click()
      cy.screenshot('adicionar-contato')
  })

  it('Deve editar um contato', () => {
    cy.get(':nth-child(3) > .sc-gueYoa > .edit').click()
    cy.get('input[type="email"]').clear().type('matheusinho@email.com')
    cy.get('.alterar').click()
    cy.screenshot('editar-contato')
})

  it('Deve excluir um contato', () => {
    cy.get(':nth-child(3) > .sc-gueYoa > .delete').click()
    cy.screenshot('excluir-contato')
  })
})