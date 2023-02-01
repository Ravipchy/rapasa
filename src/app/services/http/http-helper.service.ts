import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class HttphelperService {
    constructor() { }

    headerWithoutToken(): HttpHeaders {
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        });
        return headers;

    }

    headerWithToken(): HttpHeaders {
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': (localStorage.getItem('tokenId')) ? localStorage.getItem('tokenId') : null,
            // 'x-client-id': '1717360c7a297a33810d05c7e5637171',
            // 'x-client-secret': 'ae4bb08395c80860895ba164d8f76d5917681470',
            // 'x-api-version': '2022-01-01',
        });
        return headers
    }

}
