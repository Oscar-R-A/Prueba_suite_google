describe('Buscar una dirección desde el navegador', function(){
    it('Abrir google', function(){
        cy.visit('https://www.google.com/');
    
    })
    it('Buscar Google Maps', function(){
        cy.get('.gLFyf').type('google maps{Enter}');
        cy.get('[href="https://www.google.com/maps/?hl=es"] > .LC20lb').click();
    })
    it('Buscar Dirección', function(){
        cy.get('#searchboxinput').type('devco bogotá{Enter}');
        cy.wait(5000);
        cy.get('.pChizd > .S9kvJb').click({force: true});
    })
    it('Ingresar dirección de origen', function(){
        cy.get('#sb_ifc51 > .tactile-searchbox-input').type('Cinte bogotá {Enter}');
    })
    it('Assert de que se realizo la busqueda bien', function(){
        expect(cy.get('.widget-scene-canvas')).to.exist;
    })
})