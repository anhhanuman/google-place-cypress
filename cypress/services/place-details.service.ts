import {apiData, output} from "../test-data/test-data";
import {FindPlaceService} from "./find-place.service";

const findPlaceService = new FindPlaceService()

export class PlaceDetailsService {
    private placeDetails = Cypress.env('placeDetails')
    private apiPlaceDetails = `${apiData.apiUrl}/${this.placeDetails}`

    private getPlaceByPlaceId(returnedPlaceId): Cypress.Chainable<Cypress.Response<any>> {
        return cy.request({
            method: "GET",
            url: `${this.apiPlaceDetails}/${output.JSON}`,
            qs: {
                key: apiData.apiKey,
                place_id: returnedPlaceId,
            }
        })
    }

    getPlaceDetails(searchedPlace: string, type: string, apiKey: string): Cypress.Chainable<Cypress.Response<any>> {
        return findPlaceService.findPlaceFromText(searchedPlace, type, apiKey).then(response => {
            const returnedPlaceId = response.body.candidates[0].place_id
            this.getPlaceByPlaceId(returnedPlaceId)
        })
    }
}
