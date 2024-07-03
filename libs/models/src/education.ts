export interface IEducation {
  degree?: string | null;
  isShowInstitute?: boolean | null;
  institute?: string | null;
  isShowLocation?: boolean | null;
  location?: string | null;
  isShowGpa?: boolean | null;
  gpa?: string | null;
  isShowDate?: boolean | null;
  fromMonth?: string | null;
  fromYear?: string | null;
  toMonth?: string | null;
  toYear?: string | null;
  untilNow?: boolean | null;
  isShowPoints?: boolean | null;
  points?: string[] | null;
}

export class EducationModel {
  constructor(public input: Partial<IEducation> = {}) {}

  getDegree(): string | undefined | null {
    return this.input.degree;
  }

  setDegree(degree: string): void {
    this.input = { ...this.input, degree };
  }

  getIsShowInstitute(): boolean | undefined | null {
    return this.input.isShowInstitute;
  }

  setIsShowInstitute(isShowInstitute: boolean): void {
    this.input = { ...this.input, isShowInstitute };
  }

  getInstitute(): string | undefined | null {
    return this.input.institute;
  }

  setInstitute(institute: string): void {
    this.input = { ...this.input, institute };
  }

  getIsShowLocation(): boolean | undefined | null {
    return this.input.isShowLocation;
  }

  setIsShowLocation(isShowLocation: boolean): void {
    this.input = { ...this.input, isShowLocation };
  }

  getIsShowGpa(): boolean | undefined | null {
    return this.input.isShowGpa;
  }

  setIsShowGpa(isShowGpa: boolean): void {
    this.input = { ...this.input, isShowGpa };
  }

  getLocation(): string | undefined | null {
    return this.input.location;
  }

  setLocation(location: string): void {
    this.input = { ...this.input, location };
  }

  getGpa(): string | undefined | null {
    return this.input.gpa;
  }

  setGpa(gpa: string): void {
    this.input = { ...this.input, gpa };
  }

  getIsShowDate(): boolean | undefined | null {
    return this.input.isShowDate;
  }

  setIsShowDate(isShowDate: boolean): void {
    this.input = { ...this.input, isShowDate };
  }

  getFromMonth(): string | undefined | null {
    return this.input.fromMonth;
  }

  setFromMonth(fromMonth: string): void {
    this.input = { ...this.input, fromMonth };
  }

  getFromYear(): string | undefined | null {
    return this.input.fromYear;
  }

  setFromYear(fromYear: string): void {
    this.input = { ...this.input, fromYear };
  }

  getToMonth(): string | undefined | null {
    return this.input.toMonth;
  }

  setToMonth(toMonth: string): void {
    this.input = { ...this.input, toMonth };
  }

  getToYear(): string | undefined | null {
    return this.input.toYear;
  }

  setToYear(toYear: string): void {
    this.input = { ...this.input, toYear };
  }

  getUntilNow(): boolean | undefined | null {
    return this.input.untilNow;
  }

  setUntilNow(untilNow: boolean): void {
    this.input = { ...this.input, untilNow };
  }

  getIsShowPoints(): boolean | undefined | null {
    return this.input.isShowPoints;
  }

  setIsShowPoints(isShowPoints: boolean): void {
    this.input = { ...this.input, isShowPoints };
  }

  getPoints(): string[] {
    return this.input.points || [];
  }

  setPoint(index: number, point: string): void {
    if (index >= this.getPoints().length) return;
    if (this.input.points) {
      const points = [...this.input.points];
      points[index] = point;
      this.input = { ...this.input, points };
    }
  }

  changePointsIndex(index1: number, index2: number) {
    if (!this.input.points) {
      return;
    }
    const length = this.getPoints()?.length || 0;
    if (index1 >= length || index2 >= length) {
      return;
    }

    const points = [...this.input.points];

    const item1 = points[index1];
    const item2 = points[index2];

    points[index2] = item1;
    points[index1] = item2;

    this.input = { ...this.input, points };
  }

  callSetMethod<M extends EducationModelSetMethodsKeyType>(
    methodName: EducationModelSetMethodsKeyType,
    ...args: Parameters<EducationModel[M]>
  ): ReturnType<EducationModel[M]> {
    if (!this[methodName]) {
      throw new Error(
        `Method '${methodName}' does not exist on EducationModel`
      );
    }

    return (
      this[methodName] as (
        ...args: Parameters<EducationModel[M]>
      ) => ReturnType<EducationModel[M]>
    )(...(args as Parameters<EducationModel[M]>));
  }
}

export type EducationModelSetMethodsKeyType =
  | "setDegree"
  | "setIsShowInstitute"
  | "setInstitute"
  | "setIsShowLocation"
  | "setLocation"
  | "setIsShowGpa"
  | "setGpa"
  | "setIsShowDate"
  | "setFromMonth"
  | "setFromYear"
  | "setToMonth"
  | "setToYear"
  | "setUntilNow"
  | "setIsShowPoints"
  | "setPoint"
  | "changePointsIndex";
