const AppError = require("../shared/errors/AppError");

module.exports = function cadastrarUsuarioUseCase({ usuarioRepository }) {
  if (!usuarioRepository) throw new AppError(AppError.dependencias);
  return async function ({ nome_completo, CPF, telefone, endereco, email }) {
    const checaCampos = nome_completo && CPF && telefone && endereco && email;
    if (!checaCampos)
      throw new AppError(AppError.parametrosObrigatoriosAusentes);
    const checaSeJaExisteUmUsuarioCadastradoComOCPF =
      await usuarioRepository.existePorCPF(CPF);
    if (checaSeJaExisteUmUsuarioCadastradoComOCPF)
      throw new AppError("CPF Já cadastrado!");
    await usuarioRepository.cadastrar({
      nome_completo,
      CPF,
      telefone,
      endereco,
      email,
    });
  };
};
