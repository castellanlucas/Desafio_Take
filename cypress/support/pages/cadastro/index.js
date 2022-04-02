/// <reference types="Cypress" />

const el = require('./elements').ELEMENTS
const Chance = require('chance')
const chance = new Chance();

class login {

   loginInvalido() {
       const email = chance.email()
       cy.get(el.inputEmail).type(email)
       cy.get(el.inputSenha).type('Teste@123')
       cy.get(el.btnEntrar).click()
   }

   loginValido() {
    cy.get(el.inputEmail).type('castellanlucas@gmail.com')
    cy.get(el.inputSenha).type('Atento01*')
    cy.get(el.btnEntrar).click()
    cy.get('a').click()   
   cy.url().should('contains', 'https://lucas-tadeu-ksbl2.blip')
}

    recuperarSenha() {
        cy.get(el.esqueceuSenha).click()
        cy.url().should('contains', 'https://account.blip.ai/forgot-password')
    }

}

export default new login();