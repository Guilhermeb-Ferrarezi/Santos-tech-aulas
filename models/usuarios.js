let usuarios = [
  {
    id: 1,
    nome: "joana",
    idade: 45,
    email: "joana@gmail.com",
    senha: "1234",
    admin_id: null,
  },
  {
    id: 2,
    nome: "guilherme",
    idade: 14,
    email: "guilherme@gmail.com",
    senha: "1234",
    admin_id: 1,
  },
];

export class usuario {
  static getUsuarios() {
    return usuarios;
  }

  static createUsuario(usuarios) {
    if(!usuarios){
        return;
    }

    if (
      usuarios.findindex(
        (usuariosExistentes) => usuariosExistentes.id == usuarios.id,
      ) === -1
    ) {
      const novoUsuario = {
        id: usuarios.length() + 1,
        nome: usuarios.nome.trim(),
        email: usuarios.email.trim(),
        senha: usuarios.senha.trim(),
        admin_id: usuarios.admin_id,
      };

      usuarios.push(novoUsuario);
      return usuarios;
    }
  }
  static deletarUsuario(id){
    let index = parseInt(id);
    if (isNaN(index)){
        return;
    }
    if(usuarios.findIndex(usuarios => usuarios.id == index) !== -1){
        return usuarios.slice(index, 1)
    }
  }
}

export default usuario