export interface IHobby {
  point?: string | null;
}

export class HobbyModel {
  constructor(public input: Partial<IHobby> = {}) {}

  getPoints(): string | undefined {
    return this.input.point;
  }

  setPoint(point: string | undefined): void {
    this.input.point = point;
  }

  callSetMethod<M extends HobbyModelSetMethodsKeyType>(
    methodName: HobbyModelSetMethodsKeyType,
    ...args: Parameters<HobbyModel[M]>
  ): ReturnType<HobbyModel[M]> {
    if (!this[methodName]) {
      throw new Error(`Method '${methodName}' does not exist on HobbyModel`);
    }

    return (
      this[methodName] as (
        ...args: Parameters<HobbyModel[M]>
      ) => ReturnType<HobbyModel[M]>
    )(...(args as Parameters<HobbyModel[M]>));
  }
}

export type HobbyModelSetMethodsKeyType = "setPoint";
