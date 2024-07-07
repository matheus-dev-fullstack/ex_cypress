// <reference types="cypress" />

describe('Testes para a página de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })

    it('Deve levar o usuário até o formulário de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
        cy.screenshot('tela-inscrição')
    })
    it('Deve preencher o formulário de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('Matheus Oliveira')
        cy.get('input[name="email"]').type('matheus@email.com')
        cy.get('input[name="telefone"]').type('51987654321')
        cy.get('input[name="endereco"]').type('Rua do Asfalto, Bairro da Rua, São Paulo')
        cy.get('select[name="escolaridade"]').select('outros')
        cy.get('#linux').check()
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo) =>{
            expect(conteudo).contain('Obrigado pela candidatura!')
        })

        cy.screenshot('tela-inscrição-preenchida')
    })
})