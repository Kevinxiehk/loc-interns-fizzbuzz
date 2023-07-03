function fizzbuzz_n(n) {
    for(let i = 1; i <= n; i++) {
        let result = [];
        if(i % 3 == 0) result.push("Fizz");
        if(i % 5 == 0) result.push("Buzz");
        if(i % 7 == 0) result.push("Bang");
        if(i % 11 == 0) result = ["Bong"];
        if(i % 13 == 0) {
            for (let j = 0; j <= result.length; j++) {
                if (j == result.length || result[j][0] == 'B') {
                    result.splice(j, 0, "Fezz");
                    break;
                }
            }
        }
        if(i % 17 == 0) result.reverse();
        if(result.length == 0) result = [i];
        console.log(result.join(""));
    }
}

// This is our main function
function fizzbuzz() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    let max;
    readline.question('How many numbers do you want?\n', answer => {
        fizzbuzz_n(Number(answer));
        readline.close();
    });

}

// Now, we run the main function:
fizzbuzz();

