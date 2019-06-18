import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { Router } from '@angular/router';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  model = new Contact();
  submitted = false;
  error: {};

  constructor(
      private router: Router,
      private contactService: ContactService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    return this.contactService.contactForm(this.model).subscribe(
        data => this.model = data,
        error => this.error = error
    );
  }

  gotoHome() {
    this.router.navigate(['/']);
  }

}
