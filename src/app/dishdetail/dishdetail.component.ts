import { baseURL } from './../shared/baseurl';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { DISHES } from './../shared/dishes';
import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import { Dish } from '../shared/Dish';
import { DishService } from '../services/dish.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})

export class DishdetailComponent implements OnInit {
  dishIds: string[];
  prev: string;
  next: string;
  dish: Dish;
  feedbackForm: FormGroup;
  @ViewChild('fform') feedbackFormDirective;
  date: Date;

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb:FormBuilder,
    @Inject('baseURL') public baseURL) {
      this.createForm()
    }

    ngOnInit() {
      this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
      this.route.params.pipe(switchMap((params: Params) => this.dishservice.getDish(params['id'])))
      .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
    }

    setPrevNext(dishId: string) {
      const index = this.dishIds.indexOf(dishId);
      this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
      this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
    }

  goBack(): void {
    this.location.back();
  }



  createForm() {
    this.feedbackForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      rating: 5, //
      comment: ['', [Validators.required]],
      date: new Date().toISOString().slice(0, 10)
    });

    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  formErrors = {
    'author': '',
    'rating': 0,
    'comment': ''
  };

  validationMessages = {
    'author': {
      'required': 'Author is required.',
      'minlength': 'Author must be at least 2 characters long.',
      'maxlength': 'Author cannot be more than 25 characters long.'
    },
    'rating':{},
    'comment': {
      'required': 'Comment number is required.'
    }
  };



  onSubmit() {
    let comments = this.dish.comments;
    let feedback = this.feedbackForm.value;

    comments.push(feedback);


    this.feedbackForm.reset({
      author: '',
      rating: 5,
      comment: ''
    });
    this.feedbackFormDirective.resetForm();
  }
}
