import constants from "../../data/constants.json";
import apiHelper from "../helper/apiHelper";
import reporter from "../helper/reporter";
import logger from "../helper/logger";

class ReqResObject{

    baseUrl: string;
    endPoint: string;
    authToken: string;
    queryParam: object;

    constructor() {
        this.baseUrl = process.env.BASEAPIURL;
        this.queryParam = constants.REQRES.QUERY_PARAM;
    }

    async GET(typeOfReq: string){
        try {
            if(typeOfReq === 'user') {
                this.endPoint = constants.REQRES.GET_USERS;
            }
            reporter.addStep(global.testId, "info", `Getting the payload data for the endpoint ${typeOfReq}`);
            let response = await apiHelper.GET(global.testId, this.baseUrl,
                this.endPoint, this.authToken, this.queryParam);
            /*let response = await browser.call(async function(){
                return await apiHelper.GET(global.testId, baseUrl, endPoint, authToken, queryParam)
            });*/
            logger.info(`>>>>>>>>>>>>>>>>>>> response : ${JSON.stringify(response)}`);
            reporter.addStep(global.testId, "info", `API GET response from ${this.endPoint} stored in json file`);
            return response;

        }catch(err){
            err.message = `Error in ReqRes.in API doing a GET call to: ${this.endPoint}, ${err.message}`;
            throw err
        }
    }

    async POST(typeOfReq: string, payload: object){
        if(typeOfReq === 'user') {
            this.endPoint = constants.REQRES.GET_USERS;
        }
        reporter.addStep(global.testId, "info", `Setting the payload data for the endpoint ${typeOfReq}`);
        let response = await apiHelper.POST(global.testId, this.baseUrl,
            this.endPoint, this.authToken, payload);
        logger.info(`>>>>>>>>>>>>>>>>>>> response : ${JSON.stringify(response)}`);
        reporter.addStep(global.testId, "info", `API POST response from ${this.endPoint} stored in json file`);
        return response;
    }
}
export default new ReqResObject();
