export interface ICertification {
  name?: string;
  isShowInstitute?: boolean;
  institute?: string;
  isShowDate?: boolean;
  year?: string;
  isShowPoints?: boolean;
  points?: string[];
}

export class CertificationModel {
  constructor(private input: Partial<ICertification>) {}

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

  setIsShowDate(isShowDate: boolean): void {
    this.input.isShowDate = isShowDate;
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

  getYear(): string | undefined {
    return this.input.year;
  }

  setYear(year: string): void {
    this.input.year = year;
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

  callSetMethod<M extends CertificationModelSetMethodsKeyType>(
    methodName: CertificationModelSetMethodsKeyType,
    ...args: Parameters<CertificationModel[M]>
  ): ReturnType<CertificationModel[M]> {
    if (!this[methodName]) {
      throw new Error(
        `Method '${methodName}' does not exist on CertificationModel`
      );
    }

    return (
      this[methodName] as (
        ...args: Parameters<CertificationModel[M]>
      ) => ReturnType<CertificationModel[M]>
    )(...(args as Parameters<CertificationModel[M]>));
  }
}

export type CertificationModelSetMethodsKeyType =
  | "setName"
  | "setInstitute"
  | "setYear"
  | "setIsShowDate"
  | "setIsShowPoints"
  | "setPoint";
