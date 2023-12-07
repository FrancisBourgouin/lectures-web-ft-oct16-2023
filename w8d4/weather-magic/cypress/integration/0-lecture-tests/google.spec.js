/// <reference types="cypress" />

describe("Basic tests to see the POWER of Cypress", () => {
  it("should find that a wormhole is an einstein-rosen bridge", () => {
    cy.visit("https://google.com");

    // cy.get("img.App-logoo").should("exist");

    cy.get("#APjFqb").type("Einstein-Rosen Bridge");

    cy.get(".aajZCb > .lJ9FBc > center > .gNO89b").click();

    cy.get(
      ':nth-child(1) > .MjjYud > .g > .srKDX > .jGGQ5e > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb'
    ).should("contain.text", "Wormhole");
  });
});
