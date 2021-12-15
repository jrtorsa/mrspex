describe('Spex App', () => {
  it('renders page', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Time Ranges')
  })
})

describe('Add time range', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/config')
  })

  it('renders config page', () => {
    cy.contains('Time Ranges')
  })

  it('adds a time range on config page', () => {
    cy.get('#init-timer').type('{selectall}').type('100000')
    cy.get('#end-timer').type('{selectall}').type('120000')
    cy.contains('+').click()
    cy.contains('10:00:00 - 12:00:00')
  })

  it('removes a time range on config page', () => {
    cy.get('#init-timer').type('{selectall}').type('100000')
    cy.get('#end-timer').type('{selectall}').type('120000')
    cy.contains('+').click()
    cy.contains('10:00:00 - 12:00:00')
    cy.contains('-').click()
  })
})
