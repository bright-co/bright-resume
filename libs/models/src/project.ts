export interface IProject {
  title?: string;
  isShowRole?: boolean;
  role?: string;
  isShowCompany?: boolean;
  company?: string;
  isShowLocation?: boolean;
  location?: string;
  isShowUrl?: boolean;
  url?: string;
  isShowDate?: boolean;
  fromMonth?: string;
  fromYear?: string;
  toMonth?: string;
  toYear?: string;
  untilNow?: boolean;
  isShowPoints?: boolean;
  points?: string[];
}

export class ProjectModel {
  constructor(private input: Partial<IProject>) {}

  getTitle(): string | undefined {
    return this.input.title;
  }

  setTitle(title: string): void {
    this.input.title = title;
  }

  getIsShowRole(): boolean | undefined {
    return this.input.isShowRole;
  }

  setIsShowRole(isShowRole: boolean): void {
    this.input.isShowRole = isShowRole;
  }

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

  getIsShowLocation(): boolean | undefined {
    return this.input.isShowLocation;
  }

  getLocation(): string | undefined {
    return this.input.location;
  }

  setLocation(location: string): void {
    this.input.location = location;
  }

  getIsShowUrl(): boolean | undefined {
    return this.input.isShowUrl;
  }

  setIsShowUrl(isShowUrl: boolean): void {
    this.input.isShowUrl = isShowUrl;
  }

  getUrl(): string | undefined {
    return this.input.url;
  }

  setUrl(url: string): void {
    this.input.url = url;
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

  setCompany(company: string): void {
    this.input.company = company;
  }

  setIsShowLocation(isShowLocation: boolean): void {
    this.input.isShowLocation = isShowLocation;
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
  | "setPoint";
