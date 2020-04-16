import { DOM } from "aurelia";
import { HttpClient } from "@aurelia/fetch-client";

export class CovidServiceBackend {

    public url = "http://localhost:2000/";
    private httpClient: HttpClient = new HttpClient(DOM);

    constructor() {
        this.httpClient
            .configure((currentconfig) => currentconfig
                .useStandardConfiguration()
                .withDefaults({ headers: { "Accept": "application/json" } }))
    }

    public get(service: string) {
        return this.httpClient
            .get(this.url + service)
            .then(response => response.json())
            .catch((response: Response) => {
                console.log("catch", response);
                return {
                    ok: response.ok,
                    redirected: response.redirected,
                    status: response.status,
                    statusText: response.statusText,
                    type: response.type,
                    url: response.url
                };
            });
    }
}
