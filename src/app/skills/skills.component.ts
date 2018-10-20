import { Component, OnInit } from "@angular/core";
import { SkillsService } from "./skills.service";

@Component({
  selector: "mr-app-skills",
  templateUrl: "./skills.component.html",
  styles: [
    `
      .skill-wrapper {
        padding: 25px;
      }
    `
  ]
})
export class SkillsComponent implements OnInit {
  constructor(private skillService: SkillsService) {}
  skills: ISkill[];
  getSkillSet() {
    this.skills = this.skillService.getAll();
  }
  ngOnInit() {}
}
