import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName, AbstractControl, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';

import { Person } from '../models/person';
import {
    PersonService, ConfigurationService,
    LoadingService,
    ConfigurationModel
} from '../../app-shared';


function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
    let emailControl = c.get('email');
    let confirmControl = c.get('confirmEmail');
    if (emailControl.pristine || confirmControl.pristine) {
        return null;
    }
    if (emailControl.value === confirmControl.value) {
        return null;
    }
    return { 'match': true };
}

@Component({
    selector: 'app-person-edit',
    templateUrl: '../shared/person-template.html',
})
export class PersonEditComponent implements OnInit {
    public SelectedItem: Person;
    public Config: ConfigurationModel;
    private id: number;
    public errors: string[];
    public personForm: FormGroup;

    public emailMessage: string;

    private validationMessages = {
        required: 'Please enter your email address.',
        pattern: 'Please enter a valid email address.'
    };

    constructor(
        private personService: PersonService,
        private route: ActivatedRoute,
        private router: Router,
        private loadingService: LoadingService,
        private configurationService: ConfigurationService,
        private fb: FormBuilder
    ) { }

    public ngOnInit(): void {
        this.personForm = this.fb.group({
            firstName: ['', [Validators.required, Validators.minLength(3)]],
            lastName: ['', [Validators.required, Validators.maxLength(50)]],
            emailGroup: this.fb.group({
                email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
                confirmEmail: ['', Validators.required],
            }, { validator: emailMatcher }),
            mobilePhone: '',
            notification: 'email',
            sendCatalog: true,
            city: ['', [Validators.required]],
            postalCode: ['', [Validators.required]],
            street: ['', [Validators.required]],
            homeNumber: ['', [Validators.required]]
        });

        this.personForm.get('notification').valueChanges
            .subscribe(value => this.setNotification(value));

        const emailControl = this.personForm.get('emailGroup.email');
        emailControl.valueChanges.debounceTime(1000).subscribe(value =>
            this.setMessage(emailControl));

        this.Config = new ConfigurationModel();
        this.id = +this.route.snapshot.params['id'];
        this.getPerson(this.id);
        this.getConfiguration();
    }

    private getPerson(id: number): void {
        this.loadingService.start();
        this.personService.GetById(id)
            .subscribe(result => {
                    this.SelectedItem = result;

                    // Update the data on the form
                    this.personForm.patchValue({
                        firstName: this.SelectedItem.firstName,
                        lastName: this.SelectedItem.lastName,
                        mobilePhone: this.SelectedItem.mobilePhone,
                        emailGroup: {
                            email: this.SelectedItem.email,
                            confirmEmail: this.SelectedItem.email
                        },
                        city: this.SelectedItem.city,
                        postalCode: this.SelectedItem.postalCode,
                        street: this.SelectedItem.street,
                        homeNumber: this.SelectedItem.homeNumber
                    });
                },
                error => {
                    this.loadingService.stop();
                },
                () => {
                    this.loadingService.stop();
                });
    }

    public OnSubmit(): void {
        // Copy the form values over the product object values
        let p = Object.assign({}, this.SelectedItem, this.personForm.value);
        p.email = this.personForm.value.emailGroup.email;

        this.loadingService.start();
        this.personService.UpdatePerson(p, this.SelectedItem.id)
            .subscribe(result => {
            },
                errors => {
                    this.loadingService.stop();
                    if (errors.errors) {
                        if (errors.errors.length > 0) {                            
                          for (let item in errors.errors) {
                            this.errors.push(item);
                          }
                        }
                      }
                },
                () => {
                    this.loadingService.stop();
                    this.router.navigate(['persons/', this.id]);
                });
    }

    private getConfiguration(): void {
        this.loadingService.start();
        this.configurationService.GetConfiguration()
            .subscribe(result => {
                this.Config = result;
            },
                errors => {
                    this.loadingService.stop();
                },
                () => {
                    this.loadingService.stop();
                }
            );
    }

    public GoBack(): void {
        this.router.navigate(['persons']);
    }

    private setMessage(c: AbstractControl): void {
        this.emailMessage = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.emailMessage = Object.keys(c.errors).map(key =>
                this.validationMessages[key]).join(' ');
        }
    }

    private setNotification(notifyVia: string): void {
        const phoneControl = this.personForm.get('mobilePhone');
        if (notifyVia === 'text') {
            phoneControl.setValidators(Validators.required);
        } else {
            phoneControl.clearValidators();
        }
        phoneControl.updateValueAndValidity();
    }
}
