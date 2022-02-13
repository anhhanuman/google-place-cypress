export class Service {
    private readonly apiUrl = Cypress.env('apiUrl')
    private findPlace = Cypress.env('findPlace')
    private placeDetails = Cypress.env('placeDetails')
    private apiFindPlace = `${this.apiUrl}/${this.findPlace}`
    private apiPlaceDetails = `${this.apiUrl}/${this.placeDetails}`
    private output = {
        json: 'json',
        xml: 'xml'
    }
    private outputJSON = this.output.json

    private apiKey = Cypress.env('apiKey')

    callFindPlaceAPI(inputParam: string, type: string): Cypress.Chainable<Cypress.Response<any>> {
        return cy.request({
            method: "GET",
            url: `${this.apiFindPlace}/${this.outputJSON}`,
            qs: {
                key: this.apiKey,
                input: inputParam,
                inputtype: type
            }
        })
    }
}
