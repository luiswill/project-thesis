import BioElement from '@biotope/element';

export interface XImageProps {
    width: number;
    height: number;
    imageLink: string;
}

interface XImageState {
    width: number;
    height: number;
}

export class XImage extends BioElement<any, any> {
    static componentName = 'x-image';
    static bioAttributes = [{
            name: 'width',
            converter: (a) => parseInt(a, 10)
        }, 
        {
            name: 'height',
            converter: (a) => parseInt(a, 10)
        },
        {
            name: 'imageLink',
            converter: (a) => a
        }];


        constructor() {
            super(); 
        }
    get defaultState() {
        return {width: 300, height: 300, imageLink: 'https://via.placeholder.com/350x150'};
    }

    onPropsChanged() {
        this.setState({width: this.props.width});   
    }

    created() {
        this.onPropsChanged();
        this.render();
    }

    render() {
        this.html`
            <img src="${this.state.imageLink}" width="${this.state.width}">
        `;
    }
}

XImage.register();