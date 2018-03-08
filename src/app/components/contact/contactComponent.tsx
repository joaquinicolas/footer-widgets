import * as React from 'react';
import WidgetTitle from '../WidgetTitle/WidgetTitle';
import { AddressComponent } from '../Address/AddressComponent';

export interface IContactComponentProps {
  content?: string;
  title: string;
  streetAddress: string;
  phone: string;
  mail: string;
};

export const ContactComponent: React.SFC<IContactComponentProps> = (props: IContactComponentProps) => {
  return (
    <div className='footer-widget contact-widget'>
      <WidgetTitle type='text' text={props.title} />
      <p>
        {props.content}
      </p>
      <AddressComponent textUppercase='Contact Info' StreetAddress={props.streetAddress} Phone={props.phone} Mail={props.mail} />
    </div>
  );
}

