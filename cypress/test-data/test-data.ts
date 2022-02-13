export const placeNames = {
    valid: [{
        names: ['San Francisco International Airport', 'Philip Marx Central Park'],
        placeIds: ['ChIJVVVVVYx3j4ARP-3NGldc8qQ', 'ChIJaRlhx833wYARd9UG1KIlR-k'],
        formattedPhoneNumbers: ['(650) 821-8211', '(661) 822-3228']
    },
        {
            names: ['California'],
            placeIds: ['ChIJPV4oX_65j4ARVW8IJ6IJUYs']
        }
    ],
    invalid: {
        names: ['@##$#$#$$', '~', '`']
    }

}
export const apiData = {
    apiUrl: Cypress.env('apiUrl'),
    apiKey: Cypress.env('apiKey'),
    wrongApiKey: {
        empty: '',
        null: null,
        incorrect: 'incorrect',
        specialCharacter: '!@#@(*#&@*())(@*(#'
    }
}
export const output = {
    JSON: 'json',
    XML: 'xml'
}

export const inputType = {
    text: 'textquery',
    phoneNumber: 'phonenumber'
}
