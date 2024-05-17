export interface IEducation {
  degree?: string;
  isShowInstitute?: boolean;
  institute?: string;
  isShowLocation?: boolean;
  location?: string;
  isShowGpa?: boolean;
  gpa?: string;
  isShowDate?: boolean;
  fromMonth?: string;
  fromYear?: string;
  toMonth?: string;
  toYear?: string;
  untilNow?: boolean;
  isShowPoints?: boolean;
  points?: string[];
}

export class EducationModel {
  constructor(private input: Partial<IEducation>) {}

  getDegree(): string | undefined {
    return this.input.degree;
  }

  setDegree(degree: string): void {
    this.input.degree = degree;
  }

  getIsShowInstitute(): boolean | undefined {
    return this.input.isShowInstitute;
  }

  setIsShowInstitute(isShowInstitute: boolean): void {
    this.input.isShowInstitute = isShowInstitute;
  }

  getInstitute(): string | undefined {
    return this.input.institute;
  }

  setInstitute(institute: string): void {
    this.input.institute = institute;
  }
  getIsShowLocation(): boolean | undefined {
    return this.input.isShowLocation;
  }

  getIsShowGpa(): boolean | undefined {
    return this.input.isShowGpa;
  }

  getLocation(): string | undefined {
    return this.input.location;
  }

  getGpa(): string | undefined {
    return this.input.gpa;
  }

  getIsShowDate(): boolean | undefined {
    return this.input.isShowDate;
  }

  getFromMonth(): string | undefined {
    return this.input.fromMonth;
  }

  getFromYear(): string | undefined {
    return this.input.fromYear;
  }

  getToMonth(): string | undefined {
    return this.input.toMonth;
  }

  getToYear(): string | undefined {
    return this.input.toYear;
  }

  getUntilNow(): boolean | undefined {
    return this.input.untilNow;
  }

  getIsShowPoints(): boolean | undefined {
    return this.input.isShowPoints;
  }

  getPoints(): string[] | undefined {
    return this.input.points;
  }
}
