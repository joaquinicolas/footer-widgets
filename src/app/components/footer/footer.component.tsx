import * as React from 'react';
/*import { ContactComponent, IContactComponentProps } from '../contact/contactComponent';
import { ITwitterComponentProps, TwitterComponent } from '../twitter/twitterComponent';

export interface IFooterComponentProps {
    contactInfo: IContactComponentProps;
    tweetData: ITwitterComponentProps;
}*/

const FooterComponent: React.SFC<any> = (props) => {
    return (
        <footer>
            <div className="container-fluid text-center ft-copyright">
                <p>© 2017 <a href="">Kotha PRO </a> - Designed with <i className="fa fa-heart"></i> by <a href="http://shapedtheme.com">ShapedTheme</a></p>
            </div>
        </footer>
    );
}
export default FooterComponent;