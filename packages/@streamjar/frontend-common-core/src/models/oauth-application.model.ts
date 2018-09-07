import pick from 'lodash-es/pick';
import { Observable } from 'rxjs';

import { HttpService } from '../services/http.service';
import { Dated, Identifiable } from './base';

export interface IOAuthApplication extends Dated, Identifiable {
	name: string;
	website: string;
	client?: string;
	redirect: string;
	secret?: string;
	suspended?: boolean;
}

export class OAuthApplication {
	private fillable = ['website', 'redirect', 'name'];

	constructor(private jar: HttpService) {}

	public getAll(): Observable<IOAuthApplication[]> {
		return this.jar.get<IOAuthApplication[]>(`oauth/applications`);
	}

	public get(id: string): Observable<IOAuthApplication> {
		return this.jar.get<IOAuthApplication>(`oauth/applications/${id}`);
	}

	public create(data: any): Observable<IOAuthApplication> {
		return this.jar.post<IOAuthApplication>(`oauth/applications`, { ...pick(data, this.fillable), secret: !!data.secret });
	}

	public update(application: IOAuthApplication, data: any): Observable<IOAuthApplication> {
		return this.jar.patch<IOAuthApplication>(`oauth/applications/${application.client}`, data);
	}

	public delete(application: IOAuthApplication): Observable<void> {
		return this.jar.delete<void>(`oauth/applications/${application.client}`);
	}
}
