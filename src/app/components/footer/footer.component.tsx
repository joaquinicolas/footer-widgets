import * as React from 'react';
import { ContactComponent, IContactComponentProps } from '../contact/contactComponent';
import { ITwitterComponentProps, TwitterComponent } from '../twitter/twitterComponent';

export interface IFooterComponentProps {
    contactInfo: IContactComponentProps;
    tweetData: ITwitterComponentProps;
}

const FooterComponent: React.SFC<IFooterComponentProps> = (props) => {
    return (
        <footer>
            <div className="container">
                <div className="footer-widget-row">
                    <ContactComponent {...props.contactInfo} />
                    <TwitterComponent {...props.tweetData} />
                </div> 
            </div>
        </footer>
    );
}
export default FooterComponent;