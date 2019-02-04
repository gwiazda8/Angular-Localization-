import { Component} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'AngularLocalization';
  userName = 'Strenger';
  now: Date = new Date();
  minutes = 0;
  gender = '?';

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  public showWarning(): void {
    this.translate.get('HOME.ALERTMESSAGE').subscribe(
      (text: string) => { alert(text); }
    );
  }

}
