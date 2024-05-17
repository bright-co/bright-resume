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

  getIsShowPoints(): boolean | undefined {
    return this.input.isShowPoints;
  }

  getPoints(): string[] | undefined {
    return this.input.points;
  }
}
