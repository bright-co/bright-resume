require("dotenv").config();

const EnvironmentVariables = ["MODE", "MONGO_URL", "DATABASE_NAME"];

for (const key of EnvironmentVariables) {
  if (!process.env[key]) {
    throw new Error(key + " must be Defined");
  }
}
