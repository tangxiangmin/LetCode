/**
 * @param {number[]} balance
 */
var Bank = function (balance) {
    this.balance = [0, ...balance]// 账号从1开始，第0位占位
    this.n = balance.length
};

/** 
 * @param {number} account1 
 * @param {number} account2 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function (account1, account2, money) {
    if (!this.checkAccount(account1)) return false
    if (!this.checkAccount(account2)) return false
    if (this.withdraw(account1, money)) {
        this.deposit(account2, money)
        return true
    }
    return false
};

Bank.prototype.checkAccount = function (account) {
    return account >= 1 && account <= this.n
}

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function (account, money) {
    if (!this.checkAccount(account)) return false
    this.balance[account] += money
    return true
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function (account, money) {
    if (!this.checkAccount(account)) return false
    if (this.balance[account] < money) {
        return false
    }
    this.balance[account] -= money
    return true
};

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */