import BioElement from '@biotope/element';

export interface XHeadlineProps {
    underlined: string;
}

interface XHeadlineState {
    underlined: string;
}

export class XHeadline extends BioElement<any, any> {
    static componentName = 'x-headline';
    static bioAttributes = [{
        name: 'underlined',
        converter: (a) => (a)
    }];

    constructor() {
        super(); 
    }

    get defaultState() {
        return {underlined: 'false'};
    }

    onPropsChanged() {
        this.setState({underlined: this.props.underlined});   
    }

    created() {
        this.onPropsChanged();
        this.render();
    }

    render() {
        this.html`
            <h1><slot></slot></h1>
        `;
    }
}

XHeadline.register();