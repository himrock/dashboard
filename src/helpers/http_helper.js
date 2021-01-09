/**
 * Using axios library for performing http requests
 */

const HttpHelper = function (axios) {
    /**
     * @param {*} url
     * Returns a promise for an axios GET request
     */
    function doGet(url, params, header) {
        return axios(url, {
            method: "get",
            withCredentials: true,
            headers: header
        });
    }

    /**
     * @param {*} url
     * @param {*} params
     * Returns a promise for an axios POST request
     */
    function doPost(url, params, header) {
        return axios(url, {
            method: "post",
            data: params,
            headers: { ...header }
        });
    }
    return {
        doGet: doGet,
        doPost: doPost
    };
}

export default HttpHelper;
