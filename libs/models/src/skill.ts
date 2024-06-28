export interface ISkill {
  point?: string | null;
}

export class SkillModel {
  constructor(public input: Partial<ISkill> = {}) {}

  getPoints(): string | undefined {
    return this.input.point;
  }

  setPoint(point: string | undefined): void {
    this.input = { ...this.input, point };
  }

  callSetMethod<M extends SkillModelSetMethodsKeyType>(
    methodName: SkillModelSetMethodsKeyType,
    ...args: Parameters<SkillModel[M]>
  ): ReturnType<SkillModel[M]> {
    if (!this[methodName]) {
      throw new Error(`Method '${methodName}' does not exist on SkillModel`);
    }

    return (
      this[methodName] as (
        ...args: Parameters<SkillModel[M]>
      ) => ReturnType<SkillModel[M]>
    )(...(args as Parameters<SkillModel[M]>));
  }
}

export type SkillModelSetMethodsKeyType = "setPoint";
