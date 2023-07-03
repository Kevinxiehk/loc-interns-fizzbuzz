let rule_active = new Map();
let rules = ["3", "5", "7", "11", "13", "17"];
function fizzbuzz_n(n) {
    for(let i = 1; i <= n; i++) {
        let result = [];
        if(rule_active.get("3") && i % 3 === 0) result.push("Fizz");
        if(rule_active.get("5") && i % 5 === 0) result.push("Buzz");
        if(rule_active.get("7") && i % 7 === 0) result.push("Bang");
        if(rule_active.get("11") && i % 11 === 0) result = ["Bong"];

        if(rule_active.get("13") > -1 && i % 13 === 0) {
            let added = false; // Have we added "Fezz"?
            for (let j = 0; j < result.length; j++) {
                if (result[j][0] === 'B') { // The first time we encounter something starting with 'B'
                    result.splice(j, 0, "Fezz");
                    added = true; // We have added "Fezz"
                    break; // We don't want to add any more "Fezz"
                }
            }
            if(!added) result.push("Fezz"); // If we have not added it after everything
        }

        if(rule_active.get("17") && i % 17 === 0) result.reverse();

        if(result.length === 0) result = [i];

        console.log(result.join(""));
    }
}

// This is our main function
function fizzbuzz() {
    for(let rule in rules) {
        if(process.argv.indexOf('-' + rule) > -1) {
            rule_active.set(rule, true);
        }
        else rule_active.set(rule, false);
    }
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    readline.question('How many numbers do you want?\n', answer => {
        fizzbuzz_n(Number(answer));
        readline.close();
    });

}

// Now, we run the main function:
fizzbuzz();

