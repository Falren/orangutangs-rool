describe('Task Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })
  
  it('passes', () => {
    cy.get('[data-task-header="task-header"]').should('contain.text', 'To-Do List')
    cy.get('[data-task-input-id="task"]')
      .should('exist')
      .type('myUsername')
      .should('have.value', 'myUsername');    
    cy.get('button[type=submit]').should('exist').click()
    cy.get('[data-task-input-id="task"]').should('not.have.value', 'myUsername');    
    cy.get('[data-delete-task="delete"]').should('exist').children('button').click()
    cy.get('[data-delete-task="delete"]').should('not.exist')
  })
})

