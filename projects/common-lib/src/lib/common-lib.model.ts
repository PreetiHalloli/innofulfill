export class AddressDto {
    name?: string;
    email?: string;
    phone?: string;
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    country?: string;
    zip?: string;
    title?: string;
    latitude?: number;
    longitude?: number;
    geoLocation?: any;
    _id?: string;
  }

  export interface AddressOptions {
    title?: string;
    hideButtons?: boolean;
    hideDisplayName?: boolean;
    buttonsTitles?: ButtonsTitle
  }

  export interface ButtonsTitle {
    okText?: string;
    okCancel?: string;
  }