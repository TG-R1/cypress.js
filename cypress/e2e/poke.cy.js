
describe('[Тестирование] Pokemon', function () {

    it("", function(){
        cy.visit("https://pokemonbattle.me/login")
        cy.wait(2000)
        cy.get(":nth-child(1) > .auth__input").type('test.grinder.qa@gmail.com')
        cy.get("#password").type("10015874Qq")
        cy.get(".auth__button").click()
        cy.wait(2000)
        cy.get('.header__btns > [href="/shop"]').click()
        cy.wait(3000)
        cy.get(":nth-child(10) > .shop__button").click()
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type("4444000000001111")
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1224')
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125')
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('safonov pavel')
        cy.wait(5000)
        cy.get('.pay-btn').click()
        // cy.wait(2000)
        // cy.get('.pay__input-box-last-of > .pay_base-input-v2').click()
        cy.get('#cardnumber').type('56456')
        cy.wait(1000)
        cy.get('.payment__submit-button').click()
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно').should('be.visible')
    })


})
