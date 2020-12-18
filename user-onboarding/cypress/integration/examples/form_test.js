
describe('UserOnboarding - form test', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    
    //sanity test
    it('sanity test', () => {
        //assertion
        expect(5).to.equal(5)
        expect(1+2).to.equal(3)
        expect({}).to.eql({})
        expect({}).to.not.equal({})
    })

    


})