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

  getIsShowLevel(): boolean | undefined {
    return this.input.isShowLevel;
  }

  getLevel(): string | undefined {
    return this.input.level;
  }
}
