//  Make Data Parser schema here
const zod = require("zod");

const user_parser = zod.object({
  username: zod
    .string({ required_error: "Name is requires" })
    .email()
    .trim()
    .min(3, { message: "Length should be minimun 3" }),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string().min(8),
});

const login_parser = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

module.exports = { user_parser, login_parser };
