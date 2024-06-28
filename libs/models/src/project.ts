export interface IProject {
  title?: string | null;
  isShowRole?: boolean | null;
  role?: string | null;
  isShowCompany?: boolean | null;
  company?: string | null;
  isShowLocation?: boolean | null;
  location?: string | null;
  isShowUrl?: boolean | null;
  url?: string | null;
  isShowDate?: boolean | null;
  fromMonth?: string | null;
  fromYear?: string | null;
  toMonth?: string | null;
  toYear?: string | null;
  untilNow?: boolean | null;
  isShowPoints?: boolean | null;
  points?: string[] | null;
}

export class ProjectModel {
  constructor(public input: Partial<IProject> = {}) {}

  getTitle(): string | undefined {
    return this.input.title;
  }

  setTitle(title: string): void {
    this.input = { ...this.input, title };
  }

  getIsShowRole(): boolean | undefined {
    return this.input.isShowRole;
  }

  setIsShowRole(isShowRole: boolean): void {
    this.input = { ...this.input, isShowRole };
  }

  getRole(): string | undefined {
    return this.input.role;
  }

  setRole(role: string): void {
    this.input = { ...this.input, role };
  }

  getIsShowCompany(): boolean | undefined {
    return this.input.isShowCompany;
  }

  setIsShowCompany(isShowCompany: boolean): void {
    this.input = { ...this.input, isShowCompany };
  }

  getCompany(): string | undefined {
    return this.input.company;
  }

  getIsShowLocation(): boolean | undefined {
    return this.input.isShowLocation;
  }

  getLocation(): string | undefined {
    return this.input.location;
  }

  setLocation(location: string): void {
    this.input = { ...this.input, location };
  }

  getIsShowUrl(): boolean | undefined {
    return this.input.isShowUrl;
  }

  setIsShowUrl(isShowUrl: boolean): void {
    this.input = { ...this.input, isShowUrl };
  }

  getUrl(): string | undefined {
    return this.input.url;
  }

  setUrl(url: string): void {
    this.input = { ...this.input, url };
  }

  getIsShowDate(): boolean | undefined {
    return this.input.isShowDate;
  }

  setIsShowDate(isShowDate: boolean): void {
    this.input = { ...this.input, isShowDate };
  }

  getFromMonth(): string | undefined {
    return this.input.fromMonth;
  }

  setFromMonth(fromMonth: string): void {
    this.input = { ...this.input, fromMonth };
  }

  getFromYear(): string | undefined {
    return this.input.fromYear;
  }

  setFromYear(fromYear: string): void {
    this.input = { ...this.input, fromYear };
  }

  getToMonth(): string | undefined {
    return this.input.toMonth;
  }

  setToMonth(toMonth: string): void {
    this.input = { ...this.input, toMonth };
  }

  getToYear(): string | undefined {
    return this.input.toYear;
  }

  setToYear(toYear: string): void {
    this.input = { ...this.input, toYear };
  }

  getUntilNow(): boolean | undefined {
    return this.input.untilNow;
  }

  setUntilNow(untilNow: boolean): void {
    this.input = { ...this.input, untilNow };
  }

  getIsShowPoints(): boolean | undefined {
    return this.input.isShowPoints;
  }

  setIsShowPoints(isShowPoints: boolean): void {
    this.input = { ...this.input, isShowPoints };
  }

  getPoints(): string[] {
    return this.input.points || [];
  }

  setCompany(company: string): void {
    this.input = { ...this.input, company };
  }

  setIsShowLocation(isShowLocation: boolean): void {
    this.input.isShowLocation = isShowLocation;
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

  callSetMethod<M extends ProjectModelSetMethodsKeyType>(
    methodName: ProjectModelSetMethodsKeyType,
    ...args: Parameters<ProjectModel[M]>
  ): ReturnType<ProjectModel[M]> {
    if (!this[methodName]) {
      throw new Error(`Method '${methodName}' does not exist on ProjectModel`);
    }

    return (
      this[methodName] as (
        ...args: Parameters<ProjectModel[M]>
      ) => ReturnType<ProjectModel[M]>
    )(...(args as Parameters<ProjectModel[M]>));
  }
}

export type ProjectModelSetMethodsKeyType =
  | "setTitle"
  | "setIsShowRole"
  | "setRole"
  | "setIsShowCompany"
  | "setCompany"
  | "setIsShowLocation"
  | "setLocation"
  | "setIsShowUrl"
  | "setUrl"
  | "setIsShowDate"
  | "setFromMonth"
  | "setFromYear"
  | "setToMonth"
  | "setToYear"
  | "setUntilNow"
  | "setIsShowPoints"
  | "setPoint"
  | "changePointsIndex";
