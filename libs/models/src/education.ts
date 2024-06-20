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

  setIsShowLocation(isShowLocation: boolean): void {
    this.input.isShowLocation = isShowLocation;
  }

  getIsShowGpa(): boolean | undefined {
    return this.input.isShowGpa;
  }

  setIsShowGpa(isShowGpa: boolean): void {
    this.input.isShowGpa = isShowGpa;
  }

  getLocation(): string | undefined {
    return this.input.location;
  }

  setLocation(location: string): void {
    this.input.location = location;
  }

  getGpa(): string | undefined {
    return this.input.gpa;
  }

  setGpa(gpa: string): void {
    this.input.gpa = gpa;
  }

  getIsShowDate(): boolean | undefined {
    return this.input.isShowDate;
  }

  setIsShowDate(isShowDate: boolean): void {
    this.input.isShowDate = isShowDate;
  }

  getFromMonth(): string | undefined {
    return this.input.fromMonth;
  }

  setFromMonth(fromMonth: string): void {
    this.input.fromMonth = fromMonth;
  }

  getFromYear(): string | undefined {
    return this.input.fromYear;
  }

  setFromYear(fromYear: string): void {
    this.input.fromYear = fromYear;
  }

  getToMonth(): string | undefined {
    return this.input.toMonth;
  }

  setToMonth(toMonth: string): void {
    this.input.toMonth = toMonth;
  }

  getToYear(): string | undefined {
    return this.input.toYear;
  }

  setToYear(toYear: string): void {
    this.input.toYear = toYear;
  }

  getUntilNow(): boolean | undefined {
    return this.input.untilNow;
  }

  setUntilNow(untilNow: boolean): void {
    this.input.untilNow = untilNow;
  }

  getIsShowPoints(): boolean | undefined {
    return this.input.isShowPoints;
  }

  setIsShowPoints(isShowPoints: boolean): void {
    this.input.isShowPoints = isShowPoints;
  }

  getPoints(): string[] {
    return this.input.points || [];
  }

  setPoint(index: number, point: string): void {
    if (index >= this.getPoints().length) return;
    if (this.input.points) {
      this.input.points[index] = point;
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

    const item1 = this.input.points[index1];
    const item2 = this.input.points[index2];

    this.input.points[index2] = item1;
    this.input.points[index1] = item2;
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
  | "setPoint";
