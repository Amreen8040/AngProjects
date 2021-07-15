import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CreditoragentComponent } from './creditoragent/creditoragent.component';
import { DebtoragentComponent } from './debtoragent/debtoragent.component';
import { MessageService } from './message.service';
import { MessagedetailsComponent } from './messagedetails/messagedetails.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,MessagedetailsComponent,DebtoragentComponent,CreditoragentComponent
      ],
      providers: [MessageService] 
    }).compileComponents();
  }));

});
