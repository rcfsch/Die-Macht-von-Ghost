describe（'Post creation flow'，function（）{
it('should allow creating and publishing a post'，function （){
cy.visit('/ghost');
cy.login('admin@example.com','password');
S
cy.click('[data-test-new-post-button]');
cy.type('[data-test-editor-title-input]'，'My New Post');
cy.type('[data-test-markdown-editor]'，'This is the content.');
cy.click('[data-test-publish-flow]');
cy.click('[data-test-publish-button]');
Cy.contains('Published').should('be.visible');
});
});
