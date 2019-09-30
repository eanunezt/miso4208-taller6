describe('Visual Regression Testing utilizando Resemble JS', function(){
    it('Generar paleta de colores', function(){
         cy.visit('https://eanunezt.github.io/miso4208-taller6/palette.html')
         cy.contains('Generar nueva paleta').click()
         cy.screenshot("screenshot"+"-old")
         cy.contains('Generar nueva paleta').click()
         cy.screenshot("screenshot"+"-new")
     })
 })