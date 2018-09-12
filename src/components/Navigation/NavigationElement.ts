import BioElement from '@biotope/element';


export interface XNavigationProps {
    href: string;
}

interface XNavigationState {
    href: string;
}
export class XNavigationElement extends BioElement<any, any> {
    static componentName = 'x-navelement';
    static bioAttributes = [{
        name: 'href',
        converter: (a) => a
    }];

    constructor() {
        super();
    }
       
    get defaultState() {
        return {href: '#'};
    }

    onPropsChanged() {
        this.setState({href: this.props.href});   
    }

    created() {
        this.onPropsChanged();
        this.render();
    }

    render() {
        this.html`
            <link rel="stylesheet" type="text/css" href="resources/components/Navigation/NavigationElement.styles.css">
            <li><a href="${this.state.href}"><slot></slot></a></li>
        `;
    }
}

XNavigationElement.register();