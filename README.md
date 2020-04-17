# aplicacaosigepi
Prototipo da Aplicação SIGEPI desenvolvida como atividade de estágio para a SUTIC - UFERSA

# Linguagens Utilizadas
* ReactJS (frontend)
* NodeJS (backend)

# Resumo do Sistema
Esse sistema foi desenvolvido para cadastros de EPI's e Entregas na Universidade Federal Rural do Semi-Árido, de acordo com a necessidade do usuário foram implementados campos necessários para cadastro, atualização, exclusão e listagem de ambos os modelos principais: Entrega e EPI, juntamente com a emissão de relatórios de acordo com o campo de pesquisa utilizado nas listagens. As cores foram decididas pelo usuário pelo modelo identidade visual da UFERSA.

# Descrição
* Usa JWT para autenticação
* bcrypt para encriptação de senhas
* A validação de dados é feita por protocolo Yup
* Só usuários administradores podem entrar
* Como o sistema foi feito para ser atrelado ao banco de dados da própria UFERSA, não é necessário cadastro de e-mail pois o banco conta com matriculas dos funcionário, nos quais são uma sequencia de números.
* Da mesma forma a senha já está vinculada também ao banco de dados da UFERSA, sendo assim para que o emprestimo seja realizado o usuário devera validar com sua senha.

# Rodando o projeto
* É necessário ter o postgres e docker instalado

