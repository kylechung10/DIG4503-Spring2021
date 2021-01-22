import chalk from 'chalk';

class Person {
    constructor(name, favoriteColor) {
        this.name = name;
        this.favoriteColor = favoriteColor;
    }
    speak() {
        console.log(chalk.keyword(this.favoriteColor)(this.name));
    }
}

export default Person;