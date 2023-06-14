export abstract class Configurate {
  static secretPassword: string = process.env.SECRETPASSWORD;
  static dbHost: string = process.env.HOST;
  static dbPort: string = process.env.DB_PORT;
  static dbUsername: string = process.env.DB_USERNAME;
  static dbPassword: string = process.env.DB_PASSWORD;
  static dbDatabase: string = process.env.DB_DATABASE;
}
