import Aurelia, { RouterConfiguration } from 'aurelia';
import { MyApp } from './my-app/my-app';

Aurelia
    .register(RouterConfiguration)
    // .register(RouterConfiguration.customize({useHref: false}))
    .app(MyApp)
    .start();
