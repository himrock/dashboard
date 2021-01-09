import axios from 'axios';
import Q from 'q';
import config, { HTTP_METHODS, defaultParams} from '../conf/config';
import httpHelperModule from './http_helper';
const httpHelper = httpHelperModule(axios);

const ApiHelper = function () {
    function sendRequest(apiName, params) {
        const apiConfig = config.apiMap[apiName];
        let reqPromise = null;
        if (!apiConfig) {
            const deferred = Q.defer();
            reqPromise = deferred.reject(new Error(`Api config not found`));
        } else {
            const header = {
                Authorization: defaultParams.Authorization,
                "Access-Control-Allow-Origin": "*"
            };
            const method = apiConfig.method;
            let url = apiConfig.url;
            switch (method) {
                case HTTP_METHODS.GET: {
                    reqPromise = httpHelper.doGet(url, params, header);
                    break;
                }
                case HTTP_METHODS.POST: {
                    reqPromise = httpHelper.doPost(url, params, header);
                    break;
                }
                default: {
                    const deferred = Q.defer();
                    reqPromise = deferred.reject(new Error("Method is not supported. Please check the request."));
                    break;
                }
            }
        }
        return reqPromise;
    }
    return {
        sendRequest: sendRequest
    };
}
export default ApiHelper;
