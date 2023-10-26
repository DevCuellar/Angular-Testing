import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private history: { url: string; queryParams: object }[] = [];
  private maxHistoryLength = 5;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = this.removeQueryParams(event.url);
        const queryParams = this.getQueryParams(event.url);
        this.addToHistory(url, queryParams);
      }
    });
  }

  private addToHistory(url: string, queryParams: object) {
    if (this.history.length >= this.maxHistoryLength) {
      this.history.shift();
    }
    this.history.push({ url, queryParams });
  }

  private getQueryParams(url: string): object {
    const queryParamStartIndex = url.indexOf('?');
    if (queryParamStartIndex !== -1) {
      const queryString = url.slice(queryParamStartIndex + 1);
      return this.parseQueryParams(queryString);
    }
    return {};
  }

  private parseQueryParams(queryString: string): object {
    const params = new URLSearchParams(queryString);
    const queryParams: { [key: string]: string } = {};
    params.forEach((value, key) => {
      queryParams[key] = value;
    });
    return queryParams;
  }

  private removeQueryParams(url: string): string {
    const queryParamStartIndex = url.indexOf('?');
    if (queryParamStartIndex !== -1) {
      return url.slice(0, queryParamStartIndex);
    }
    return url;
  }

  navigateTo(commands: any[], queryParams?: object) {
    const url = this.router.createUrlTree(commands, queryParams).toString();
    this.router.navigateByUrl(url);
  }

  goBack() {
    if (this.history.length > 1) {
      this.history.pop();
      const previousRoute = this.history.pop();
      this.navigateTo([previousRoute.url], {
        queryParams: previousRoute.queryParams,
      });
    }
  }

  hasPreviousRoute() {
    return this.history.length > 1;
  }
}
