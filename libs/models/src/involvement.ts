export interface IInvolvement {
  role?: string | null;
  isShowCompany?: boolean | null;
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

export class InvolvementModel {
  constructor(private input: Partial<IInvolvement> = {}) {}

  getRole(): string | undefined {
    return this.input.role;
  }

  setRole(role: string): void {
    this.input.role = role;
  }

  getIsShowCompany(): boolean | undefined {
    return this.input.isShowCompany;
  }

  setIsShowCompany(isShowCompany: boolean): void {
    this.input.isShowCompany = isShowCompany;
  }

  getCompany(): string | undefined {
    return this.input.company;
  }

  setCompany(company: string): void {
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

  callSetMethod<M extends InvolvementModelSetMethodsKeyType>(
    methodName: InvolvementModelSetMethodsKeyType,
    ...args: Parameters<InvolvementModel[M]>
  ): ReturnType<InvolvementModel[M]> {
    if (!this[methodName]) {
      throw new Error(
        `Method '${methodName}' does not exist on InvolvementModel`
      );
    }

    return (
      this[methodName] as (
        ...args: Parameters<InvolvementModel[M]>
      ) => ReturnType<InvolvementModel[M]>
    )(...(args as Parameters<InvolvementModel[M]>));
  }
}

export type InvolvementModelSetMethodsKeyType =
  | "setRole"
  | "setIsShowCompany"
  | "setCompany"
  | "setIsShowLocation"
  | "setLocation"
  | "setIsShowDate"
  | "setFromMonth"
  | "setFromYear"
  | "setToMonth"
  | "setToYear"
  | "setUntilNow"
  | "setIsShowPoints"
  | "setPoint";
