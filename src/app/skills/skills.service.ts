import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SkillsService {
  constructor() {}
  private skills: ISkill[] = [
    {
      id: 1,
      name: "Azure",
      description: "",
      imageUrl: "../../assets/images"
    }
  ] as ISkill[];
  getAll(): ISkill[] {
    return this.skills;
  }
}
