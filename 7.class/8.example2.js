/**
 * 정직원과 파트타임직원을 나타낼 수 있는 클래스
 * 직원들의 정보: 이름, 부서이름, 한달 근무 시간
 * 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
 * 정직원은 시간당 10,000원
 * 파트타입 직원은 시간당 8,000원
 */

class Employee {
  #name;
  #department;
  #hoursPerMonth;
  #payRate;

  constructor(name, department, hoursPerMonth, payRate) {
    this.#name = name;
    this.#department = department;
    this.#hoursPerMonth = hoursPerMonth;
    this.#payRate = payRate;
  }

  get name() {
    return this.#name;
  }

  get department() {
    return this.#department;
  }

  get hoursPerMonth() {
    return this.#hoursPerMonth;
  }

  get payRate() {
    return this.#payRate;
  }

  calculatePay() {
    return this.#hoursPerMonth * this.#payRate;
  }
}

class FullTimeEmployee extends Employee {
  static #PAY_RATE = 10000;

  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTimeEmployee.#PAY_RATE);
  }
}

class PartTimeEmployee extends Employee {
  static #PAY_RATE = 8000;

  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTimeEmployee.#PAY_RATE);
  }
}

const jake = new FullTimeEmployee('제이크', '개발팀', 52);
console.log(jake.calculatePay());

const cheolsoo = new PartTimeEmployee('김철수', '운영팀', 52);
console.log(cheolsoo.calculatePay());
