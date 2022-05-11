import net from './net'
const url = '/user'
export class example1 {
    static example1Methods = (params) => net.post(url + 'search', params);
}
export class example2 {
    static example1Methods2 = (params) => net.post(url + 'search', params);
}