/// <reference types="cypress" />

describe("Integration tests for weather project", () => {
  beforeEach(() => {
    // Visit the website
    cy.visit("/");
    // Confirm that the Header is there, so app is loaded properly
    cy.get(".Header").should("exist");

    cy.viewport("iphone-6", "landscape");
  });

  it("works on mobile", () => {
    cy.get("input").type("Montréal{enter}");

    cy.get(".CityHistory button").should("be.visible");
  });

  it("should be able to go to our website, type in a city, and retrieve the weather for it", () => {
    // Validate the absence of weather information
    cy.get(".CurrentWeather").should("not.exist");
    // Find the form, type in the input and press enter
    cy.get("input").type("Montréal{enter}");
    // Validate the existence of weather information
    cy.get(".CurrentWeather").should("exist");
    // Check for city name
    cy.get(".CurrentWeather h1").should("contain.text", "Montréal");
  });
  it("should be able to quickly see the weather from previously searched cities, and see the weather for them", () => {
    // Check if city history exists (should not)
    cy.get(".CityHistory").should("not.exist");
    // Type a city
    cy.get("input").type("Hamilton, CA{enter}");
    // Check if city history exists (should)
    cy.get(".CityHistory").should("exist");
    // Type a city
    cy.get("input").type("Buenos Aires{enter}");
    // Check if there is two elements in the city history
    cy.get(".CityHistory li").should("have.length", 2);
    // Click on the first city
    cy.get(".CityHistory li:first-of-type").click();
    // Check if the weather matches for that city
    cy.get(".CurrentWeather h1").should("contain.text", "Hamilton");
  });
  it("A user should be able to search for the same city multiple times, without creating additional entries in the history", () => {
    cy.get("input").type("Hamilton, CA{enter}");

    cy.get(".CityHistory").should("exist");

    cy.get(".CityHistory li").should("have.length", 1);

    cy.get("input").type("Patate{enter}");

    cy.get(".CityHistory li").should("have.length", 2);

    cy.get("input").type("Hamilton, CA{enter}");

    cy.get(".CityHistory li").should("have.length", 2);
  });
});
