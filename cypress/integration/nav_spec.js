describe('Movie Test', () => {
  beforeEach(() => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/694919', {
      id: 694919,
      poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
      title: "Money Plane",
      average_rating: 6.625,
      release_date: "2020-09-29"
    });
    cy.visit('http://localhost:3000/')
  });
  it('Should exist', () => {
    expect(true).to.equal(true)
  })

  it('Should visit my site', ()=> {
    cy.contains('Rancid Tomatillos')
  })

  it('Should display the image of the movie', () => {
     cy.contains('.movie', 'Money Plane')
      .find('img')
      .click()
  })
  it('Should go back home', () => {
    cy.get('.logo-button')
      .click()
  })
})
