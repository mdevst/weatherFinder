interface forecastValue {
  geoid: number;
  name: string;
  localtime: string;
  modtime: string;
  SmartSymbol: number;
  Temperature: number;
  FeelsLike: number;
  WindSpeedMS: number;
  WindDirection: number;
  HourlyMaximumGust: number;
  PoP: any;
  Precipitation1h: number;
  isolocaltime: string;
}

interface fractile {
  geoid: number;
  name: string;
  localtime: string;
  modtime: string;
  TemperatureF10: number;
  TemperatureF25: number;
  TemperatureF50: number;
  TemperatureF75: number;
  TemperatureF90: number;
  TotalPrecipitationF90: number;
  TotalPrecipitationF75: number;
  TotalPrecipitationF50: number;
  TotalPrecipitationF25: number;
  TotalPrecipitationF10: number;
  isolocaltime: string;
}

interface symbolDescription {
  id: number;
  text_fi: string;
  text_en: string;
  text_sv: string;
}

export type weatherFinderOptions = {
    allData: Boolean
    icons: Object<number, string>
}

export interface reqData {
  municipalityCode: Boolean;
  observationStations: Boolean;
  dayLengthValues: [
    {
      Sunrise: string;
      Sunset: string;
    }
  ];
  forecastValues: Array<forecastValue>;
  fractiles: Arrayz<fractile>;
  location: {
    place: string;
    area: string;
    timezone: string;
  };
  symbolDescriptions: Array<symbolDescription>;
  dayLength: {
    sunrise: string;
    sunset: string;
    lengthofday: string;
  };
  forecastModtime: {
    modtime: string;
    isotime: string;
  };
  fractilesModtime: {
    modtime: string;
    isotime: string;
  };
}

export interface convertedData {
    day: {
      length: string,
      sunrise: string,
      sunset: string
    },
    forecast: {
      values: Array<forecastValue>,
      time: {
        mod: string,
        iso: string
      }
    },
    fractile: {
      values: Array<fractile>,
      time: {
        mod: string,
        iso: string
      }
    },
    symbolDescriptions: Array<{
        icon: string
        text: string
    }>
  }