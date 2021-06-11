/// <reference types = "cypress" />
describe('Credit 360',() =>{
    
    it('Navigate to Url', () => {
        cy.clearCookies()
        cy.visit('https://fintrakcredit360web-fb.azurewebsites.net/#/auth/login')
        
    })

    it('Login', () => {
        cy.get('.m-t-60 > .col-xs-12 > .form-control').type('SN019641')
        cy.get(':nth-child(3) > .col-xs-12 > .form-control').type('testing')
        cy.get('.col-xs-12 > .btn').click()
        cy.wait(4000)
        cy.get('#menu-button > i').click()
    })

    it ('Ensure user can start Credit Application',() =>{
        cy.get(':nth-child(6) > .ripplelink.ng-tns-c5-5 > span.ng-tns-c5-5').click()
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c5-20 > span.ng-tns-c5-20').click()
        cy.get(':nth-child(3) > .ripplelink > .ng-tns-c5-21').click()
        cy.get('#startLoanTypeId').select('Single Customer').should('be.visible','Single Customer')
        cy.wait(4000)
        cy.get('.card > .panel > .panel-footer > .row > .col-md-12 > .btn').click()
    })

    it ('Search customer', () => {
        cy.get('.col-md-4 > #search').type('Mai')
        cy.get('.ui-radiobutton-box').click()
        cy.wait(4000)
    })

    it ('Upload Credit Bereau Report', () => {
        cy.wait(4000)
        cy.get('.hidden-xs > .ng-star-inserted > .btn-primary').click()
        cy.wait(4000)
        cy.get('.panel-footer > .row > .col-md-12 > div > .ui-button-text-icon-left > .ui-button-text').click()
    } )

    it('Start Loan Application', () => {
        cy.wait(4000)
        cy.get('#productClassProcessId').select('CAM Based').should('be.visible','CAM Based')
        cy.get('.card > .panel > .ng-invalid > .panel-footer > .row > .col-md-12 > .btn').click()
       // cy.get('.ui-button-text-only > .ui-button-text').click()
        
    })

    it('Customer Information', () => {
        cy.wait(10000)
        cy.get('#requireCollateralTypeId').select('No Collateral Required').should('be.visible','No Collateral Required')
        cy.wait(10000)
        cy.get('#regionId').select('FTS REGION').should('include', 'FTS')
        cy.get('#productClassId').select('Cash Backed').should('be.visible', 'Cash Backed')
        cy.wait(10000)
        cy.get('#productClassId').select('Corporate').should('be.visible', 'Corporate')
        cy.wait(10000)
        cy.get(':nth-child(6) > .ui-button-info > .ui-button-text').click()
        cy.get('p-dialog.ng-tns-c1-88 > .ui-dialog > .ui-dialog-content > .panel-body > .form-horizontal > .form-group > div.col-md-12 > .form-control').type('36061')
        cy.get('.form-group > :nth-child(1) > .btn').click()
        cy.get(':nth-child(2) > .btn').click()
    })
})
