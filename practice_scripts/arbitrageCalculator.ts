import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateTransactionVolume(initialAmount: number, growthRate: number, movements: number): { totalMovements: number; totalVolume: string; incomes: string } {
    let totalVolume = 0;
    let currentAmount = initialAmount;

    for (let i = 0; i < movements; i++) {
        totalVolume += currentAmount;
        currentAmount *= (1 + growthRate);
    }

    return {
        totalMovements: movements,
        totalVolume: totalVolume.toFixed(2),
        incomes: currentAmount.toFixed(2)
    };
}

rl.question('Enter the initial amount (USD): ', (initialAmount) => {
    rl.question('Enter the growth rate (as a decimal, e.g., 0.06 for 6%): ', (growthRate) => {
        rl.question('Enter the number of movements: ', (movements) => {
            const result = calculateTransactionVolume(parseFloat(initialAmount), parseFloat(growthRate), parseInt(movements));
            const realEarnings = (parseFloat(result.incomes) - parseFloat(initialAmount)).toFixed(2);
            console.log(`Total Movements: ${result.totalMovements}, Total Volume: $${result.totalVolume}, Total Incomes: $${realEarnings}`);
            rl.close();
        });
    });
});
