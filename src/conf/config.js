export const defaultParams = {
    email: "mayankmittal@intugine.com",
    Authorization : "Bearer tTU3gFVUdP"
}

export const HTTP_METHODS = {
    GET: 'GET',
    POST: 'POST',
};

export const API_NAMES = {
    getShipment: 'https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch'
};

const Configs = {
    apiMap: {
        [API_NAMES.getShipment]: {
            url: API_NAMES.getShipment,
            method: HTTP_METHODS.POST
        }
    }
};

export default Configs;