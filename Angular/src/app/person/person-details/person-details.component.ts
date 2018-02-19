import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Person } from '../models/person';
import {
    PersonService, LoadingService
} from '../../app-shared';

@Component({
    selector: 'app-person-details',
    templateUrl: './person-details.component.html',
    styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {
    public SelectedItem: Person;
    private id: number;

    constructor(
        public route: ActivatedRoute,
        public router: Router,
        public personService: PersonService,
        private loadingService: LoadingService,
    ) { }

    public ngOnInit(): void {
        this.id = +this.route.snapshot.params['id'];
        this.getPerson(this.id);
    }

    private getPerson(id: number): void {
        this.loadingService.start();
        this.personService.GetById(id)
            .subscribe(result => {
                this.SelectedItem = result;
            },
                error => {
                    this.loadingService.stop();
                },
                () => {
                    this.loadingService.stop();
                });
    }

    public GoBack(): void {
        this.router.navigate(['persons']);
    }

    public OnEditPerson(): void {
        this.router.navigate(['/persons/edit', this.id]);
    }
}
