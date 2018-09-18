import BioElement from '@biotope/element';
import './Image';
import './Headline';
import './Text';



export class XTeaser extends BioElement<any, any> {
    static componentName = 'x-teaser';

        constructor() {
            super();
        }

    created() {
        this.onPropsChanged();
        this.render();
    }

    render() {
        this.html`
            <link rel="stylesheet" type="text/css" href="resources/css/normalize/normalize.css">
            <link rel="stylesheet" type="text/css" href="resources/components/Teaser/Teaser.styles.css">
            <h1>Headline teaser</h1>
            <x-text><slot></slot></x-text>
        `;
    }
}

XTeaser.register();