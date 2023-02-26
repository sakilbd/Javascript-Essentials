// https://leetcode.com/problems/simple-bank-system/description/

const c = console.log.bind(console);

var Bank = function(balance) {
    this.account_map = new Map();
    balance.forEach((item, i) => {
        this.account_map.set(i + 1, item);
    });

};

/**
 * @param {number} account1
 * @param {number} account2
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function(account1, account2, money) {
    let fromAccountBalance = this.account_map.get(account1);
    let toAccountBalance = this.account_map.get(account2);
    if ((fromAccountBalance && toAccountBalance) || toAccountBalance === 0) {
        if ((fromAccountBalance - money) < 0) {
            return false;
        } else {
            this.account_map.set(account1, fromAccountBalance - money);
            this.account_map.set(account2, this.account_map.get(account2) + money);
        }

    } else {
        return false;
    }
    return true;
};

/**
 * @param {number} account
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function(account, money) {
    let accountBalance = this.account_map.get(account);
    if (accountBalance || accountBalance === 0) { //as if doesnot go inside for value 0
        this.account_map.set(account, accountBalance + money);
    } else {
        return false;
    }
    return true;
};

/**
 * @param {number} account
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function(account, money) {
    let accountBalance = this.account_map.get(account);
    if (accountBalance || accountBalance === 0) { //becase sometime balance might be 0 and 0 will be withdrawn
        if (accountBalance - money < 0) {
            return false;
        } else {
            this.account_map.set(account, accountBalance - money);
        }
    } else {
        return false;
    }
    return true;
};

// var obj = new Bank([10, 100, 20, 50, 30]);
var obj = new Bank([0]);

c(obj);
// var param1 = obj.withdraw(3, 10);
// c(obj);
// c("withdraw : " + param1);
// var param2 = obj.transfer(5, 1, 20);
// c(obj);
// c("transfer : " + param2);
// var param3 = obj.deposit(5, 20);
// c(obj);
// c("deposit : " + param3);
// var param4 = obj.transfer(3, 4, 15);
// c(obj);
// c("transfer : " + param4);
// var param5 = obj.withdraw(10, 50);
// c(obj);
// c("withdraw : " + param5);
// ###########################################
var param3 = obj.deposit(1, 2);
c(obj);
c("deposit : " + param3);
c(obj);

var param2 = obj.transfer(1, 1, 1);
c(obj);
c("transfer : " + param2);

var param4 = obj.transfer(1, 1, 3);
c(obj);
c("transfer : " + param4);