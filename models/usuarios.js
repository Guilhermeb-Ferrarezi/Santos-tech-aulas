export class usuario{
    id;
    nome;
    email;
    senha;
    ativo;
    admin_id;

    constructor(_id){this.id = _id}
}

export class admin{
    id;
    permissoes = {
        criarUsuario: false,
        criar_Exercicios: false,
        criar_turma: false
    }

    constructor(){}
}

