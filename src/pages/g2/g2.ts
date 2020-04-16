import { inject } from "aurelia";
import { CovidServiceBackend } from '../../services/backend/covid-service';

function sleep(ms: number) {
    return new Promise(resolve => {
        setTimeout(() => {
            return resolve();
        }, ms)
    })
}

@inject(CovidServiceBackend)
export class G2 {

    sander: HTMLElement;

    constructor(private covid: CovidServiceBackend) { }

    async afterAttach() {
        console.log(this.sander);
        let element = document.getElementById('g2chart');
        while (element === null) {
            console.log("sleep");
            await sleep(100);
            element = document.getElementById('g2chart');
        }
    }
}
