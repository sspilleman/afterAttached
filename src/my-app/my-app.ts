import { inject } from "aurelia";
import { IRouter, ViewportInstruction, INavigatorInstruction, HookTypes } from "@aurelia/router";

@inject(IRouter)
export class MyApp {
    public menu = [
        { link: "welcome@main", title: "Welcome" },
        { link: "g2@main", title: "G2-Timeline" }
    ];

    constructor(
        private router: IRouter
    ) {
        this.configureRouter(this.router);
    }

    configureRouter(router: IRouter) {
        router.addHook((viewportInstructions: ViewportInstruction[], navigatorInstruction: INavigatorInstruction) => {
            if (navigatorInstruction.instruction === "" || navigatorInstruction.instruction === "/") {
                router.goto("g2@main");
            }
            let valid = true;
            return Promise.resolve(valid);
        }, { type: HookTypes.BeforeNavigation });
    }
}
