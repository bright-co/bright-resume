export interface ICourseWork {
  name?: string | null;
  isShowInstitute?: boolean | null;
  institute?: string | null;
  isShowDate?: boolean | null;
  year?: string | null;
  isShowSkills?: boolean | null;
  isSkills?: boolean | null;
  skills?: string | null;
  isShowPoints?: boolean | null;
  points?: string[] | null;
}

export class CourseWorkModel {
  constructor(private input: Partial<ICourseWork> = {}) {}

  getName(): string | undefined {
    return this.input.name;
  }

  setName(name: string): void {
    this.input.name = name;
  }

  getIsShowInstitute(): boolean | undefined {
    return this.input.isShowInstitute;
  }

  setIsShowInstitute(): boolean | undefined {
    return this.input.isShowInstitute;
  }

  getInstitute(): string | undefined {
    return this.input.institute;
  }

  setInstitute(institute: string): void {
    this.input.institute = institute;
  }

  getIsShowDate(): boolean | undefined {
    return this.input.isShowDate;
  }

  setIsShowDate(isShowDate: boolean): void {
    this.input.isShowDate = isShowDate;
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

  setIsSkills(isSkills: boolean): void {
    this.input.isSkills = isSkills;
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

  callSetMethod<M extends CourseWorkModelSetMethodsKeyType>(
    methodName: CourseWorkModelSetMethodsKeyType,
    ...args: Parameters<CourseWorkModel[M]>
  ): ReturnType<CourseWorkModel[M]> {
    if (!this[methodName]) {
      throw new Error(
        `Method '${methodName}' does not exist on CourseWorkModel`
      );
    }

    return (
      this[methodName] as (
        ...args: Parameters<CourseWorkModel[M]>
      ) => ReturnType<CourseWorkModel[M]>
    )(...(args as Parameters<CourseWorkModel[M]>));
  }
}

export type CourseWorkModelSetMethodsKeyType =
  | "setName"
  | "setInstitute"
  | "setIsShowInstitute"
  | "setIsShowDate"
  | "setYear"
  | "setIsShowSkills"
  | "setSkills"
  | "setSkills"
  | "setIsShowPoints"
  | "setPoint";
