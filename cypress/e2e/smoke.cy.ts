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
