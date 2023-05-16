/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference types="vite/client" />

namespace NodeJS {
    interface ProcessEnv {
        MAPBOX_TOKEN: string;
        APM_URL: string;
        GOOGLE_TAG_MANAGER_KEY: string;
        FLAGSMITH_ENV_ID: string;

        API_MISTER_TEMP: string;
        API_MISTER_PROFESSION: string;
        API_MISTER_AGENCIES: string;
        API_USER_MANAGEMENT: string;
        API_SALESFORCE_AD_DOWNLINK: string;
        API_SALESFORCE_CONTACT_DOWNLINK: string;
        API_SALESFORCE_LEAD_DOWNLINK: string;

        FRONT_ADMIN: string;
        FRONT_CUSTOMER: string;
        FRONT_CANDIDATE: string;
        FRONT_MATCH: string;
        FRONT_OFFER: string;
        FRONT_JOB_DASHBOARD: string;
        FRONT_AUTH: string;
        FRONT_SALESFORCE_URL: string;
        FRONT_SALESFORCE_PORTAL_URL: string;

        MAPBOX_TOKEN: string;
        ENV: 'local' | 'dev' | 'sta' | 'prod' | 'sdbx' | string;
        VERSION?: string;
        GOOGLE_TAG_MANAGER_KEY?: string;
        FLAGSMITH_ENV_ID?: string;
    }
}
