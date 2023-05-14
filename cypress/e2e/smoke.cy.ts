it("should render homepage", () => {
  cy.visitAndCheck("/");
  cy.findByTestId("hero").should("not.be.undefined");
});

it("should render blog", () => {
  cy.visitAndCheck("/");
  cy.visitAndCheck("/blog");
  cy.findByTestId("blog").should("not.be.undefined");
  cy.findAllByTestId("blog-item").should("have.length.greaterThan", 0);
  cy.findByTestId("blog-item").click();
  cy.get("h2").should("not.be.undefined"); // TODO: improve this as there can be an h2 in the blog list page giving false positive
});

it("should toggle theme", () => {
  cy.visitAndCheck("/");
  cy.get("body").should("have.class", "chakra-ui-dark");
  cy.findByTestId("theme-toggle").should("have.length", 1).click();
  cy.get("body").should("have.class", "chakra-ui-light");
});
