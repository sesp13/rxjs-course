import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

const headers = {
  token: 'Toooooken123',
};
const body = {
  id: 10,
  name: 'Santiago',
};

// GET
ajax.get(url, headers).subscribe((data) => console.log('GET', data));

//POST
ajax.post(url, body, headers).subscribe((data) => console.log('POST', data));

//PUT
ajax.put(url, body, headers).subscribe((data) => console.log('PUT', data));

//DELETE
ajax.delete(url, headers).subscribe((data) => console.log('DELETE', data));

// Other way
ajax({
  url,
  method: 'PUT',
  body,
  headers,
}).subscribe((data) => console.log('Request using an object', data));
