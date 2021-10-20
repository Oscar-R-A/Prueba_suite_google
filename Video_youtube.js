describe('Abrir y colocar un video en youtube', function(){
    it('Abrir google', function(){
        cy.visit('https://www.google.com/');
    })
    it('Buscar Youtube testing y automatización', function(){
        cy.get('.gLFyf').type('Youtube testing y automatización{Enter}');
        cy.get('[data-hveid="CBgQAA"] > .tF2Cxc > .yuRUbf > a > .TbwUpd > .iUh30').click();
        cy.wait(3000);
    })
})