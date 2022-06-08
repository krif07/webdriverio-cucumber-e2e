import { setWorldConstructor } from "@wdio/cucumber-framework";
import * as chai from "chai";

class World {
    appId: string;
    testId: string;

    constructor() {
        this.appId = "";
        this.testId =  "";
    }
}

setWorldConstructor(World);
