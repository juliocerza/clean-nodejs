const AppError = require("../shared/errors/AppError");
const cadastrarUsuarioUseCase = require("./registrar-usuario-usecase");

describe("Registrar usuario Usecase", function () {
  const usuarioRepository = {
    cadastrar: jest.fn(),
    existePorCPF: jest.fn(),
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
  test("Deve retornar um throw AppError se os campos obrigatórios não forem fornecidos", async function () {
    const sut = cadastrarUsuarioUseCase({ usuarioRepository });
    await expect(() => sut({})).rejects.toThrow(
      new AppError(AppError.parametrosObrigatoriosAusentes)
    );
  });
  test("Deve retornar um throw AppError se já existir um cadastro com CPF", function () {
    usuarioRepository.existePorCPF.mockResolvedValue(true);
    const usuarioDTO = {
      nome_completo: "Nome_valido",
      CPF: "cpf_ja_cadastrado",
      telefone: "telefone_valido",
      endereco: "endereco_valido",
      email: "email_valido",
    };
    const sut = cadastrarUsuarioUseCase({ usuarioRepository });
    expect(() => sut(usuarioDTO)).rejects.toThrow(
      new AppError("CPF Já cadastrado!")
    );
  });
});
