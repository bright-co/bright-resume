export interface ICourseWork {
  name?: string;
  isShowInstitute?: boolean;
  institute?: string;
  isShowDate?: boolean;
  year?: string;
  isShowSkills?: boolean;
  isSkills?: boolean;
  skills?: string;
  isShowPoints?: boolean;
  points?: string[];
}

export class CourseWork {
  constructor(private input: Partial<ICourseWork>) {}

  getName(): string | undefined {
    return this.input.name;
  }

  getIsShowInstitute(): boolean | undefined {
    return this.input.isShowInstitute;
  }

  getInstitute(): string | undefined {
    return this.input.institute;
  }

  getIsShowDate(): boolean | undefined {
    return this.input.isShowDate;
  }

  getYear(): string | undefined {
    return this.input.year;
  }

  setYear(year: string): void {
    this.input.year = year;
  }

  getIsShowSkills(): boolean | undefined {
    return this.input.isShowSkills;
  }

  setIsShowSkills(isShowSkills: boolean): void {
    this.input.isShowSkills = isShowSkills;
  }

  getIsSkills(): boolean | undefined {
    return this.input.isSkills;
  }

  getSkills(): string | undefined {
    return this.input.skills;
  }

  setSkills(skills: string): void {
    this.input.skills = skills;
  }

  getIsShowPoints(): boolean | undefined {
    return this.input.isShowPoints;
  }

  getPoints(): string[] | undefined {
    return this.input.points;
  }
}
