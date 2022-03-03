// <reference types="cypress" />
describe("Register Test", () => {
    it("Visit Gallery Page", () => {
        cy.visit("/");
    });
    it("Valid Register", () => {
        cy.get('a[href="/register"]').click();
        cy.get("input[id='first-name']").type("NekoIme");
        cy.get("input[id='last-name']").type("NekoPrezime");
        cy.get("input[id='email']").type("neko_ime@email.com");
        cy.get("input[id='password']").type("Test1234");
        cy.get("input[id='password-confirmation']").type("Test1234");
        cy.get("input[type='checkbox']").click();
        cy.get("button[type='submit']").click();
        cy.get("a[role='button ']").click()
    });

    it(" test za first_name", () => {

    });

    it(" test za last_name", () => {

    });

    it(" test za email", () => {

    });


});
