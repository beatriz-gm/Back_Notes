const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");


class UserCreateService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({ name, email, password }) {
    const checkIfUsersExists = await this.userRepository.findByEmail(email);

    if(checkIfUsersExists) {
      throw new AppError("This email is already taken.");
    }

    const hashedPassword = await hash(password, 8);

    await this.userRepository.create({ name, email, password: hashedPassword });
  }
}

module.exports = UserCreateService;