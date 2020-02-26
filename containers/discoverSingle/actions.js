import constants from './constants';

export function fetchDestinationDetails (destinationId) {
    return {
        type : constants.FETCH_DESTINATION_DETAILS,
        destinationId
    }
} 

export function fetchDestinationDetailsSuccess (payload) {
    return {
        type : constants.FETCH_DESTINATION_DETAILS_SUCCESS,
        payload
    }
}

export function fetchDestinationDetailsFailure (payload) {
    return {
        type : constants.FETCH_DESTINATION_DETAILS_FAILURE,
        payload
    }
}

// export function fetchAdditionalPhotosApi () {
//     return {
//         type : constants.FETCH_ADDITIONAL_PHOTOS_API,
//     }
// } 

// export function fetchAdditionalPhotosApiSuccess (payload) {
//     return {
//         type : constants.FETCH_ADDITIONAL_PHOTOS_API_SUCCESS,
//         payload
//     }
// }

// export function fetchAdditionalPhotosApiFailure (payload) {
//     return {
//         type : constants.FETCH_ADDITIONAL_PHOTOS_API_ERROR,
//         payload
//     }
// }


export default {
    fetchDestinationDetails,
    fetchDestinationDetailsSuccess,
    fetchDestinationDetailsFailure
    // fetchAdditionalPhotosApi,
    // fetchAdditionalPhotosApiSuccess,
    // fetchAdditionalPhotosApiFailure
}
