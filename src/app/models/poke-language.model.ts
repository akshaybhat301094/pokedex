export class PokeLanguageModel {
    english: string;
    japanese: string;
    chinese: string;

    constructor(language) {
        this.english = language.english;
        this.japanese = language.japanese;
        this.chinese = language.chinese;
    }
}
