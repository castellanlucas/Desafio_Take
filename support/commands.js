// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const el = require('./pages/Login/elements_login').ELEMENTS


Cypress.Commands.add('login', (username, password) => {
     
      cy.visit('/')
      cy.get(el.inputLogin).type(username)
      cy.get(el.inputPassword).type(password)
      cy.get(el.btnAcessar).click()
      cy.contains("Você está visualizando produtos para")
    
  })