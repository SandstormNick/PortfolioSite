import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _isLightTheme = new BehaviorSubject<boolean>(true);

  get isLightTheme() {
    return this._isLightTheme.asObservable();
  }

  toggleTheme() {
    this._isLightTheme.next(!this._isLightTheme.value);
  }
}
