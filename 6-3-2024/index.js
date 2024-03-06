// Assignment :- creating a bak account 

// run node index.js command on terminal

// readline is used to provides an interface for reading data from a readable stream, line by line.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// created class for bank account
class BankAccount {
    // private variables
    constructor(accountNo, accountHolder, balance) {
        this.accountNo = accountNo;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

//  methods called
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Your account has been debited by ${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Insufficient funds.");
        }
    }

    displayBalance() {
        console.log(`Your account has ${this.balance} rupees.`);
    }
}
// created subclass saving account
class SavingAccount extends BankAccount {
    constructor(accountNo, accountHolder, balance) {
        super(accountNo, accountHolder, balance);
    }
// addIntrest implemented
    addInterest(interest) {
        this.balance += interest;
        console.log(`Interest added: ${interest}. New balance: ${this.balance}`);
    }
//  polymorphism implemented
    async withdraw(amount) {
        const penaltyFee = 36;
        if (amount > this.balance) {
            console.log("Insufficient funds.");
            return;
        }
        if (amount > 500000) {
            console.log("Withdrawal limit exceeded. Applying penalty fee.");
            this.balance -= penaltyFee;    
            //  penalty fess applied after exceeding limit
        }

        this.balance -= amount; // deducting the amount
        console.log(`Your account has been debited by ${amount}. New balance: ${this.balance}`);
    }

    question(question) {
        return new Promise(resolve => {
            rl.question(question, resolve);
        });
    }
}

async function main() {
    let chosenAccount;
    while (true) {
        const accountType = await ask("Choose account type (B for Banking Account, S for Saving Account): ");
        if (accountType.trim().toLowerCase() === 'b') {
            chosenAccount = new BankAccount(1100110001220, "Mannat Abrol", 15000);
            console.log(`Account No: ${chosenAccount.accountNo}, Account Holder: ${chosenAccount.accountHolder}`);
            break;
        } else if (accountType.trim().toLowerCase() === 's') {
            chosenAccount = new SavingAccount(11020200200, "Manya Abrol", 20000);
            console.log(`Account No: ${chosenAccount.accountNo}, Account Holder: ${chosenAccount.accountHolder}`);
            break;
        } else {
            console.log("Invalid account type. Please try again.");
        }
    }

    while (true) {
        console.log("\nOptions:");
        console.log("1. Display Balance");
        console.log("2. Withdraw Amount");
        console.log("3. Add Interest");
        console.log("4. Display Penalty Fee");
        console.log("5. Exit");

        const option = await ask("Enter option: ");

        switch (option) {
            case '1':
                chosenAccount.displayBalance();
                break;
            case '2':
                const amount = await ask("Enter amount to withdraw: ");
                await chosenAccount.withdraw(Number(amount));
                break;
            case '3':
                const interestAmount = 200; //interest amount
                chosenAccount.addInterest(interestAmount);
                break;
            case '4':
                console.log("Penalty Fee: 36");
                break;
            case '5':
                console.log("Thank you for using the banking system.");
                rl.close();
                return;
            default:
                console.log("Invalid option.");
        }
    }
}

function ask(question) {
    return new Promise(resolve => {
        rl.question(question, resolve);
    });
}

main();
