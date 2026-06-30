const jwt = require("jsonwebtoken");

/**
 *
 * @param {Object} req 
 * @param {Object} res 
 * @param {Function} next 
 *
 * @returns {void}
 */
function autenticarJWT(req, res, next) {
  try {
    
    const authHeader = req.headers["authorization"];

    
    if (!authHeader) {
      return res.status(401).json({
        erro: "Token não fornecido",
        mensagem: "Header Authorization é obrigatório",
      });
    }

    
    const partes = authHeader.split(" ");

    if (partes.length !== 2 || partes[0] !== "Bearer") {
      return res.status(401).json({
        erro: "Formato de token inválido",
        mensagem: "Formato esperado: Bearer TOKEN",
      });
    }

    const token = partes[1];

   
    if (!token || token.trim() === "") {
      return res.status(401).json({
        erro: "Token vazio",
        mensagem: "Token não pode estar vazio",
      });
    }

    
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      console.error(
        "ERRO: JWT_SECRET não configurado em variáveis de ambiente",
      );
      return res.status(500).json({
        erro: "Erro interno do servidor",
        mensagem: "Configuração de autenticação incompleta",
      });
    }

    
    const usuarioData = jwt.verify(token, secret, {
      algorithms: ["HS256"], 
    });

    
    req.usuario = usuarioData;

   
    next();
  } catch (erro) {
    

    if (erro.name === "TokenExpiredError") {
     
      return res.status(401).json({
        erro: "Token expirado",
        mensagem: "Faça login novamente para gerar um novo token",
      });
    }

    if (erro.name === "JsonWebTokenError") {
      
      return res.status(403).json({
        erro: "Token inválido",
        mensagem: "Token não pôde ser verificado",
      });
    }

    if (erro.name === "NotBeforeError") {
     
      return res.status(403).json({
        erro: "Token não é válido ainda",
        mensagem: "Aguarde o tempo de ativação do token",
      });
    }

    
    console.error("Erro na autenticação:", erro.message);
    return res.status(403).json({
      erro: "Erro na autenticação",
      mensagem: "Não foi possível autenticar a requisição",
    });
  }
}

/**
 * Middleware alternativo com roles/permissões
 * Permite validar também se o usuário tem uma função específica
 *
 * @param {Array<string>} rolesPermitidas - Array de roles que podem acessar
 * @returns {Function} Middleware que valida JWT e role
 *
 * @example
 * router.get('/admin', autenticarComRole(['admin']), controlador.dashboard);
 */
function autenticarComRole(rolesPermitidas = []) {
  return (req, res, next) => {
    try {
      
      autenticarJWT(req, res, () => {
       
        if (!req.usuario.role) {
          return res.status(403).json({
            erro: "Permissão negada",
            mensagem: "Usuário não possui role definido",
          });
        }

       
        if (!rolesPermitidas.includes(req.usuario.role)) {
          return res.status(403).json({
            erro: "Acesso proibido",
            mensagem: "Seu perfil não tem permissão para acessar este recurso",
          });
        }

        
        next();
      });
    } catch (erro) {
      return res.status(403).json({
        erro: "Erro na autorização",
        mensagem: "Não foi possível verificar permissões",
      });
    }
  };
}


module.exports = {
  autenticarJWT,
  autenticarComRole,
};
