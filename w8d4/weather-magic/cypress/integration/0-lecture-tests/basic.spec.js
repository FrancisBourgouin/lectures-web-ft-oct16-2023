/// <reference types="cypress" />

describe("Basic tests to see the POWER of Cypress", () => {
  it("works on the basic CRA app", () => {
    cy.visit("http://localhost:3000");

    cy.get("img.App-logoo").should("exist");
  });
});
