import BioElement from '@biotope/element';


export interface XTextProps {
}

interface XTextState {
}

export class XText extends BioElement<any, any> {
    static componentName = 'x-text';

        constructor() {
            super(); 
        }

    created() {
        this.render();
    }

    render() {
        this.html`
            <p><slot></slot></p>
        `;
    }
}

XText.register();