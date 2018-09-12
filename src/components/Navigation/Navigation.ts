import BioElement from '@biotope/element';
import './NavigationElement';


export class XNavigation extends BioElement<any, any> {
    static componentName = 'x-navigation';

        constructor() {
            super();
        }

    created() {
        this.onPropsChanged();
        this.render();
    }

    render() {
        this.html`
            <link rel="stylesheet" type="text/css" href="resources/components/Navigation/Navigation.styles.css">
            <div class="navigation">
                <a class="navigation__logo" href="#">Website logo</a>
                <nav>
                    <ul>
                        <slot></slot>
                    </ul>
                </nav>
            </div>
        `;
    }
}

XNavigation.register();