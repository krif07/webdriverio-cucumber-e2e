import { setWorldConstructor } from "@wdio/cucumber-framework";
import * as chai from "chai";

class World {
    appId: string;
    constructor() {
        this.appId = "";
    }
}

setWorldConstructor(World);
