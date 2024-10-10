const AppError = require("./AppError");

describe("AppError", function () {
  test("AppError é uma instancia de Error", function () {
    const appError = new AppError("erro");
    expect(appError).toBeInstanceOf(Error);
  });
  test("AppError contem a mensagem correta", function () {
    const msg = "Mensagem de erro";
    const appError = new AppError(msg);
    expect(appError.message).toBe(msg);
  });
});
