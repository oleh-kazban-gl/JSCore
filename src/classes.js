/* eslint-disable max-classes-per-file */
export class User {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
}

export class Person extends User {
  constructor(user, email, authorities) {
    super(user.name, user.age, user.sex);

    this.email = email;
    this.authorities = authorities;
  }
}
