export interface BikeYear {
  year: number;
}

export interface BikeModel {
  id: string;
  name: string;
  years: number[];
  image?: string;
}

export interface Brand {
  id: string;
  name: string;
  logo?: string;
  models: BikeModel[];
}

export interface BikeDetailsData {
  description: string;
  specs: {
    engine: string;
    power: string;
    torque: string;
    weight: string;
    seatHeight: string;
  };
  history: string;
}

// Structure for our data source
export interface MotoData {
  [key: string]: Brand;
}