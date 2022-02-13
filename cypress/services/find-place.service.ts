import {apiData} from "../test-data/test-data";
import {output} from "../test-data/test-data";

export class FindPlaceService {
    private findPlace = Cypress.env('findPlace')
    private apiFindPlace = `${apiData.apiUrl}/${this.findPlace}`

    findPlaceFromText(placeName: string, type: string, apiKey?: string): Cypress.Chainable<Cypress.Response<any>> {
        return cy.request({
            method: "GET",
            url: `${this.apiFindPlace}/${output.JSON}`,
            qs: {
                key: apiKey,
                input: placeName,
                inputtype: type
            }
        })
    }
}
