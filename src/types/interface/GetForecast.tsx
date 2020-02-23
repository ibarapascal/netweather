export class ForecastReq {
  id: string;
  appid: string;
  constructor() {
    this.id = '';
    this.appid = '';
  }
}

export class ForecastRes {
  cod: string;
  message: string;
  cnt: string;
  list: Array<ForecastUnit>;
  city: ForecastCity;
  constructor() {
    this.cod = '';
    this.message = '';
    this.cnt = '';
    this.list = Array<ForecastUnit>();
    this.city = new ForecastCity();
  }
}

export class ForecastUnit {
  dt: string;
  main: MainMetrics;
  weather: Array<WeatherMetrics>;
  clouds: CloudsMetrics;
  wind: WindMetrics;
  sys: SysMetrics;
  dt_txt: string;
  constructor() {
    this.dt = '';
    this.main = new MainMetrics();
    this.weather = Array<WeatherMetrics>();
    this.clouds = new CloudsMetrics();
    this.wind = new WindMetrics();
    this.sys = new SysMetrics();
    this.dt_txt = '';
  }

}

export class MainMetrics {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
  constructor() {
    this.temp = 0;
    this.feels_like = 0;
    this.temp_min = 0;
    this.temp_max = 0;
    this.pressure = 0;
    this.sea_level = 0;
    this.grnd_level = 0;
    this.humidity = 0;
    this.temp_kf = 0;
  }
}

export class WeatherMetrics {
  id: number;
  main: string;
  description: string;
  icon: string;
  constructor() {
    this.id = 0;
    this.main = '';
    this.description = '';
    this.icon = '';
  }
}

export class CloudsMetrics {
  all: number;
  constructor() {
    this.all = 0;
  }
}

export class WindMetrics {
  speed: number;
  deg: number;
  constructor() {
    this.speed = 0;
    this.deg = 0;
  }
}

export class SysMetrics {
  pod: string;
  constructor() {
    this.pod = '';
  }
}

export class ForecastCity {
  id: number;
  name: string;
  coord: {
    lat: number,
    lon: number
  };
  country: string;
  timezone: number;
  sunrise: number;
  sunset: number;
  constructor() {
    this.id = 0;
    this.name = '';
    this.coord = {
      lat: 0,
      lon: 0
    };
    this.country = '';
    this.timezone = 0;
    this.sunrise = 0;
    this.sunset = 0;
  }
}