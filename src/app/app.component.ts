import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Projet } from './models/projet.model';
import { bckgrd_img, last_plan, middle_plan, first_plan } from '../const/const';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

  title = 'portfolio';
  projets: Projet[] = [];

  background = bckgrd_img;
  lastPlan = last_plan;
  middlePlan = middle_plan;
  firstPlan = first_plan;

  ngOnInit(): void { }

}
