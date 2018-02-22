import * as React from 'react';

export interface IAddressComponentProps {
  textUppercase: string;
  StreetAddress: string;
  Phone: string;
  Mail: string;
};

export const AddressComponent: React.SFC<IAddressComponentProps> = (props) => {
  return (
    <div className='address'>
      <h4 className='text-uppercase'>{props.textUppercase}</h4>
      <p> {props.StreetAddress}</p>
      <p> Phone: {props.Phone}</p>
      <a href={'mailto:' + props.Mail}>{props.Mail}</a>
    </div>
  );
};

