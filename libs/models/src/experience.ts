export interface IExperience {
  role?: string | null;
  company?: string | null;
  isShowLocation?: boolean | null;
  location?: string | null;
  isShowDate?: boolean | null;
  fromMonth?: string | null;
  fromYear?: string | null;
  toMonth?: string | null;
  toYear?: string | null;
  untilNow?: boolean | null;
  isShowPoints?: boolean | null;
  points?: string[] | null;
}

export class ExperienceModel {
  constructor(private input: Partial<IExperience> = {}) {}

  getRole(): string | undefined {
    return this.input.role;
  }

  setRole(role: string): void {
    this.input.role = role;
  }

  getCompany(): string | undefined {
    return this.input.company;
  }

  setCompany(company: string): void {
    console.log({ "Object.isFrozen(this.input)": Object.isFrozen(this.input) });

    this.input.company = company;
  }

  getIsShowLocation(): boolean | undefined {
    return this.input.isShowLocation;
  }

  setIsShowLocation(isShowLocation: boolean): void {
    this.input.isShowLocation = isShowLocation;
  }

  getLocation(): string | undefined {
    return this.input.location;
  }

  setLocation(location: string): void {
    this.input.location = location;
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

  callSetMethod<M extends ExperienceModelSetMethodsKeyType>(
    methodName: ExperienceModelSetMethodsKeyType,
    ...args: Parameters<ExperienceModel[M]>
  ): ReturnType<ExperienceModel[M]> {
    if (!this[methodName]) {
      throw new Error(
        `Method '${methodName}' does not exist on ExperienceModel`
      );
    }

    return (
      this[methodName] as (
        ...args: Parameters<ExperienceModel[M]>
      ) => ReturnType<ExperienceModel[M]>
    )(...(args as Parameters<ExperienceModel[M]>));
  }
}

export type ExperienceModelSetMethodsKeyType =
  | "setRole"
  | "setCompany"
  | "setLocation"
  | "setIsShowLocation"
  | "setIsShowDate"
  | "setFromMonth"
  | "setFromYear"
  | "setToMonth"
  | "setToYear"
  | "setUntilNow"
  | "setIsShowPoints"
  | "setPoint";
