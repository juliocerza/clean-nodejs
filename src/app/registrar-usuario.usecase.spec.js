const AppError = require("../shared/errors/AppError");
const cadastrarUsuarioUseCase = require("./registrar-usuario-usecase");

describe("Registrar usuario Usecase", function () {
  const usuarioRepository = {
    cadastrar: jest.fn(),
  };

  test("Deve poder cadastrar um usuario", async function () {
    const usuarioDTO = {
      nome_completo: "Nome_valido",
      CPF: "cpf_valido",
      telefone: "telefone_valido",
      endereco: "endereco_valido",
      email: "email_valido",
    };

    const sut = cadastrarUsuarioUseCase({ usuarioRepository });
    const output = await sut(usuarioDTO);

    expect(output).toBeUndefined();
    expect(usuarioRepository.cadastrar).toHaveBeenCalledWith(usuarioDTO);
    expect(usuarioRepository.cadastrar).toHaveBeenCalledTimes(1);
  });

  test("Deve retornar um true error se o usuariorepository nao for fornecido", async function () {
    expect(() => cadastrarUsuarioUseCase({})).toThrow(
      new AppError(AppError.dependencias)
    );
  });
});
