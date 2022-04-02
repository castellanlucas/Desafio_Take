/// <reference types="cypress" />

import login from '../support/pages/cadastro/index'

describe('Testes de login', () => {
    it('Login com usuário inválido', () => {
        cy.visit('/')
        login.loginInvalido()  
    })

    it('Login com usuário válido', () => {
        cy.visit('/')
        login.loginValido()  
    })

    it('Recuperar Senha', () => {
        cy.visit('/')
        login.recuperarSenha()
        
    });

})
