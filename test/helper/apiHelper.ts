import request from 'supertest';
import reporter from "./reporter";

async function GET(testId: string, baseUrl: string, endPoint: string, authToken: string, queryParam: object){
    if(!baseUrl || !endPoint){
        throw Error(`One of the given values, baseUrl: ${baseUrl}, endPoint: ${endPoint} is not valid`);
    }
    baseUrl = baseUrl.trim();
    endPoint = endPoint.trim();
    reporter.addStep(testId, "info", `>>>>>>>>>>>> GET to ${endPoint}`);
    try {
        return await request(baseUrl)
            .get(endPoint)
            .query(queryParam)
            .auth(authToken, { type: "bearer" })
            .set("Content-Type", "application/json")
            .set("Accept", "application/json");
    }catch (err){
        err.message = `Error in GET call to ${endPoint}, ${err}`;
        throw err;
    }
}

async function POST(testId: string, baseUrl: string, endPoint: string, authToken: string, payload: object){
    if(!baseUrl || !endPoint){
        throw Error(`One of the given values, baseUrl: ${baseUrl}, endPoint: ${endPoint} is not valid`);
    }
    baseUrl = baseUrl.trim();
    endPoint = endPoint.trim();
    reporter.addStep(testId, "info", `>>>>>>>>>>>> POST to ${endPoint}`);
    try {
        return await request(baseUrl)
            .post(endPoint)
            .auth(authToken, { type: "bearer" })
            .set("Content-Type", "application/json")
            .set("Accept", "application/json")
            .send(payload);
    }catch(err){
        err.message = `Error in POST call to ${endPoint}, ${err}`;
        throw err;
    }
}
export default { GET, POST }

/**
 * https://reqres.in/
 * /api/users?page=2
 */
