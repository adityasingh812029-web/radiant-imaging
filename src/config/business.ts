export interface BusinessInfo {
  name: string;
  hindiName: string;
  tagline: string;
  address: string;
  city: string;
  state: string;
  country: string;
  fullAddress: string;
  phone: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  mapsUrl: string;
}

export const BUSINESS_INFO: BusinessInfo = {
  name: 'Radiant Imaging',
  hindiName: 'रेडिएंट इमेजिंग',
  tagline: 'Advanced Technology • Accurate Diagnosis • Compassionate Care',
  address: 'Medical College Road',
  city: 'Raigarh',
  state: 'Chhattisgarh',
  country: 'India',
  fullAddress: 'Medical College Road, Raigarh, Chhattisgarh, India',
  phone: '+91 99265 58635',
  phoneDisplay: '99265 58635',
  phoneRaw: '+919926558635',
  whatsapp: '+91 99265 58635',
  whatsappRaw: '919926558635',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Radiant+Imaging+Medical+College+Road+Raigarh+Chhattisgarh',
};

export const getWhatsAppLink = (customMessage?: string): string => {
  const defaultMsg = 'Hello Radiant Imaging, I would like to enquire about your diagnostic services and appointment availability.';
  const message = customMessage || defaultMsg;
  return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
};

export const getServiceWhatsAppLink = (serviceName: string): string => {
  const msg = `Hello Radiant Imaging, I would like to enquire about appointment availability and details for ${serviceName} at your Raigarh centre.`;
  return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(msg)}`;
};
