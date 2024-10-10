const AppError = require("../shared/errors/AppError");

module.exports = function cadastrarUsuarioUseCase({ usuarioRepository }) {
  if (!usuarioRepository) throw new AppError(AppError.dependencias);
  return async function ({ nome_completo, CPF, telefone, endereco, email }) {
    await usuarioRepository.cadastrar({
      nome_completo,
      CPF,
      telefone,
      endereco,
      email,
    });
  };
};
