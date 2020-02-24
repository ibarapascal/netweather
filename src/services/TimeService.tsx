export class TimeService {

  static ts2mmddhhmm(timestampShort: number, timezoneDiff: number): string {
    const date = new Date((timestampShort + timezoneDiff - 32400) * 1000);
    const mtemp = date.getMonth() + 1;
    const dtemp = date.getDate();
    const h = date.getHours();
    const mintemp = date.getMinutes();
    const m = mtemp < 10 ? '0' + mtemp.toString() : mtemp.toString();
    const d = dtemp < 10 ? '0' + dtemp.toString() : dtemp.toString();
    const min = mintemp < 10 ? '0' + mintemp.toString() : mintemp.toString();
    const w = date.toString().slice(0, 3);
    return `${m}/${d} ${w} - ${h}:${min}`;
  }

  static ts2hhmmss(timestampShort: number, timezoneDiff: number): string {
    const date = new Date((timestampShort + timezoneDiff - 32400) * 1000);
    const h = date.getHours();
    const mtemp = date.getMinutes();
    const stemp = date.getSeconds();
    const m = mtemp < 10 ? '0' + mtemp.toString() : mtemp.toString();
    const s = stemp < 10 ? '0' + stemp.toString() : stemp.toString();
    return h + ':' + m + ':' + s;
  }

  static getTimestampNow(): number {
    return Math.floor(Date.now() / 1000);
  }
}