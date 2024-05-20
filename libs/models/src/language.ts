export interface ILanguage {
  name?: string;
  isShowLevel?: boolean;
  level?: string;
}

export class LanguageModel {
  constructor(private input: Partial<ILanguage>) {}

  getName(): string | undefined {
    return this.input.name;
  }

  setName(name: string): void {
    this.input.name = name;
  }

  getIsShowLevel(): boolean | undefined {
    return this.input.isShowLevel;
  }

  setIsShowRole(isShowLevel: boolean): void {
    this.input.isShowLevel = isShowLevel;
  }

  getLevel(): string | undefined {
    return this.input.level;
  }

  setLevel(level: string): void {
    this.input.level = level;
  }

  callSetMethod<M extends LanguageModelSetMethodsKeyType>(
    methodName: LanguageModelSetMethodsKeyType,
    ...args: Parameters<LanguageModel[M]>
  ): ReturnType<LanguageModel[M]> {
    if (!this[methodName]) {
      throw new Error(`Method '${methodName}' does not exist on LanguageModel`);
    }

    return (
      this[methodName] as (
        ...args: Parameters<LanguageModel[M]>
      ) => ReturnType<LanguageModel[M]>
    )(...(args as Parameters<LanguageModel[M]>));
  }
}

export type LanguageModelSetMethodsKeyType =
  | "setName"
  | "setLevel"
  | "setIsShowRole";
