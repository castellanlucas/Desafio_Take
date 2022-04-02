/// <reference types="cypress" />


const elements_login = require('../fixtures/usuarios').ELEMENTS
const elements_menuProd = require('../support/pages/Menu_produtos/elements_menuProd').ELEMENTS



describe('Não exibir tour ao logar', () => {
    it('Logar no menu de produtos usuário padrão UAT', () => {

        // Alterar o localStorage para que não exiba o tour
        cy.fixture('exibirTour').then(dados => {
            window.localStorage.setItem(dados, 1)
        })

        cy.login(elements_login.userPadraoUat, elements_login.senhaPadraoUat)
        cy.get(elements_menuProd.banner).click()


        // Verificar se o login foi realizado e se o recomenda é exibido corretamente         
        cy.contains("O Recomenda é uma solução que visa simplificar e automatizar o processo")

    })

})


describe.only('Exibir tour ao logar', () => {

    it('Logar no menu de produtos usuário padrão UAT', () => {

        cy.login(elements_login.userPadraoUat, elements_login.senhaPadraoUat)
        cy.contains("Bem vindo ao novo menu de produtos")

        cy.get(elements_menuProd.btnIniciarTour).click()
        cy.get(elements_menuProd.tourBoletos_Faturas)
            .should('contain', ' Aqui você poderá acessar suas faturas, emitir a 2ª via do boleto e verificar informações sobre cobranças de forma rápida e prática.')

        

    });
});
