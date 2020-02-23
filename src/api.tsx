import { Map } from 'immutable';
import { ErrorMessage } from './types/BaseTypes';
const HOST = 'https://openweathermap.org';

export async function getForecast(params?: Map<string, string>) {
  return request('get', `${HOST}/data/2.5/forecast${query(params)}`);
}

// export async function yourRequestName(body: yourRequestBody) {
//   return request('post', `${HOST}/...`, body);
// }

// export async function yourRequestName(params: {id: string}, body?: PutSimulationBody) {
//   return request('put', `${HOST}/.../${params.id}`, body);
// }

// export async function yourRequestName(params: {id: string}) {
//   return request('delete', `${HOST}.../${params.id}`);
// }

export function query(params?: Map<string, string | number | Array<string>>) {
  // TODO: need to check / improve later
  const temp = params ? params.toObject() : {};
  const query = Object.keys(temp).map((key: string, idx: number) => {
    const item = temp[key];
    let result = '';
    if (typeof item === 'string' || typeof item === 'number') {
      result = key + '=' + item;
    } else if (item instanceof Array) {
      result = item.map((k: string, i: number) => {
        return key + '[]=' + item[i];
      }).join('&');
    };
    return result;
  });
  return 0 < query.length ? '?' + query.join('&') : '';
}

async function request(method: 'get' | 'post' | 'put' | 'delete', url: string, body?: any) {
  let errorMessage = new ErrorMessage();
  const response = await fetch(url, {
    method: method,
    headers: {
      // 'content-type': 'application/json',
      'Accept': 'application/json'
    },
    body: body ? JSON.stringify(body) : null,
  }).then(res => {
    if (!(res.status === 200)) {
      errorMessage = {
        type: 'API error, contact administrator',
        head: 'Status: ' + res.status.toString() + ': ' + res.statusText,
        content: 'Events: ' + method.toUpperCase() + ': ' + url,
      };
    }
    return method !== 'delete' ? res.json() : res.ok;
  });
  if (errorMessage.type !== new ErrorMessage().type) {
    errorMessage.res = 'Response: ' + JSON.stringify(response);
    throw new Error(JSON.stringify(errorMessage));
  }
  return response;
}
