import {placeNames} from "../test-data/test-data";
import {FindPlaceService} from "../services/find-place.service";
import {inputType} from "../test-data/test-data";
import {PlaceDetailsService} from "../services/place-details.service";
import {apiData} from "../test-data/test-data";

const findPlaceService = new FindPlaceService()
const placeDetailsService = new PlaceDetailsService()
describe('Google Place API', () => {
    const firstValidData = placeNames.valid[0]
    const secondValidData = placeNames.valid[1]
    const invalidData = placeNames.invalid.names
    const validNames = firstValidData.names
    context('Find place API', () => {
        it('returns proper response status and place_ids', () => {
            for (const [index, placeName] of validNames.entries()) {
                findPlaceService.findPlaceFromText(placeName, inputType.text, apiData.apiKey).then(placeResponse => {
                    const expectedPlaceId = firstValidData.placeIds[index]
                    expect(placeResponse.status).to.equal(200)
                    expect(placeResponse.body.candidates[0].place_id).to.equal(expectedPlaceId)
                })
            }
        })

        it('returns zero results if cannot find', () => {
            for (const data of invalidData) {
                findPlaceService.findPlaceFromText(data, inputType.text, apiData.apiKey).then(placeResponse => {
                    expect(placeResponse.status).to.equal(200)
                    expect(placeResponse.body.candidates.length).to.equal(0)
                    expect(placeResponse.body.status).to.equal('ZERO_RESULTS')
                })
            }
        })
    })

    context('Find place API - Invalid or without API key', () => {
        it('return error message about invalid API key', () => {
            for (const wrongAPIKey in apiData.wrongApiKey) {
                findPlaceService.findPlaceFromText(firstValidData.names[0], inputType.text, wrongAPIKey).then(placeResponse => {
                    expect(placeResponse.status).to.equal(200)
                    expect(placeResponse.body.error_message).to.equal('The provided API key is invalid.')
                })
            }

        })

        it('return error message about missing API key', () => {
            findPlaceService.findPlaceFromText(firstValidData.names[0], inputType.text).then(placeResponse => {
                expect(placeResponse.status).to.equal(200)
                expect(placeResponse.body.error_message).to.equal('You must use an API key to authenticate each request to Google Maps Platform APIs. For additional information, please refer to http://g.co/dev/maps-no-account')
            })
        })
    })

    context('Get place details', () => {
        it('returns place details with formatted phone numbers', () => {
            for (const [index, placeName] of validNames.entries()) {
                placeDetailsService.getPlaceDetails(placeName, inputType.text,apiData.apiKey).then(placeDetailsResponse => {
                    const expectedFormattedPhoneNumber = firstValidData.formattedPhoneNumbers[index]
                    expect(placeDetailsResponse.body.result.formatted_phone_number).to.equal(expectedFormattedPhoneNumber)
                })
            }
        })

        it('return place details without formatted phone number', () => {
            placeDetailsService.getPlaceDetails(secondValidData.names[0], inputType.text,apiData.apiKey).then(placeDetailsResponse => {
                expect(placeDetailsResponse.body.result).not.to.have.property('formatted_phone_number')
            })
        })
    })

})
