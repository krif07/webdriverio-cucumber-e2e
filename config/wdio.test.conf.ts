import {config as baseConfig} from '../wdio.conf';
Object.assign(baseConfig, {
    // All test env specific key val pairs
    environment: "TEST"
});
