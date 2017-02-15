import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Kitty } from './kitty';

@Injectable()
export class KittyService {
	private headers = new Headers({ 'Content-Type': 'applicaton/json' });
	private kittiesUrl = 'api/kitties';

	constructor(private http: Http) { }

	createKitty(src: string): Promise<Kitty> {
		let kitty = { name: 'new kitty in town', description: 'a new kitty', src: src, fave: false };
		return this.http.post(this.kittiesUrl, JSON.stringify(kitty), {headers: this.headers})
						.toPromise()
						.then(res => res.json().data)
						.catch(this.handleError);
	}

	getKitties(): Promise<Kitty[]> {
		return this.http.get(this.kittiesUrl)
						.toPromise()
						.then(response => response.json().data as Kitty[])
						.catch(this.handleError);
	}

	getKitty(id: number): Promise<Kitty> {
		const url = `${this.kittiesUrl}/${id}`;
		return this.http.get(url)
						.toPromise()
						.then(response => response.json().data as Kitty)
						.catch(this.handleError);
	}

	updateKitty(kitty: Kitty): Promise<any> {
		const url = `${this.kittiesUrl}/${kitty.id}`;
		return this.http.put(url, JSON.stringify(kitty), {headers: this.headers})
						.toPromise()
						.then(() => kitty)
						.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}
