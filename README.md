# Tweteroo

Esta é uma API inspirada no Twitter, que tem o objetivo de fornecer funcionalidades básicas para uma rede social.

Com essa API, o usuário poderá:

  * Criar um perfil;
  * Fazer postagens curtas (tweets);
  * Visualizar os 10 últimos tweets;
  * Visualizar tweets de um perfil em específico.

---

## Confira como usar os recursos da API:

**1- Para criar sua conta:**

  * Método: **`POST`**;
  * Rota: **`/sign-up`**;
  
  - Você deverá enviar o nome de usuário (**username**) e a url da foto do seu perfil (**avatar**). Você fará isso enviando, pelo `body` da requisição, os dados no seguinte formato:
  
    ```
    {
      username: "bobesponja",
      avatar: "https://image..."
    } 
    ```

  * Status Code:
    * Ocorre quando tudo dá certo:
    
      ```
        status: 201 
        message: OK
      ```

    * Ocorre quando algum campo está vazio ou em um formato inválido:

      ```
        status: 400
        message: Todos os campos são obrigatórios!
      ```

**2- Para postar um tweet:**

  * Método: **`POST`**;
  * Rota: **`/tweets`**;
  
  - Você deverá enviar o **username** e o **tweet**. Você fará isso enviando, o username por um `header` **`user`**. Já o tweet você enviará pelo `body` da requisição no seguinte formato:
  
    ```
    {
      tweet: "Eu amo o mar!"
    }
    ```

  * Status Code:
    * Ocorre quando tudo dá certo:
    
      ```
        status: 201 
        message: OK
      ```

    * Ocorre quando algum campo está vazio ou em um formato inválido:

      ```
        status: 400
        message: Todos os campos são obrigatórios!
      ```

## Informações técnicas

###  Observações:

* O Armazenamento de dados da API é feito em memória, ou seja, os dados são armazenados dentro de Arrays. Como consequência, caso a aplicação seja reiniciada, os dados salvos serão perdidos;

### Tecnologias utilizadas:

- **Desenvolvimento**:
  - Nodemon.

- **Produção**:
  - Node (v16.17.0);
  - Express;
  - Cors.

### Como iniciar o projeto na minha máquina?

- O primeiro passo é você fazer o download do projeto para sua máquina: [Download ZIP](https://github.com/Nicoladla/Tweteroo-API/archive/refs/heads/main.zip)

- Ou então clonar esse repositório através do seu terminal:

  ```
  git clone https://github.com/Nicoladla/Tweteroo-API.git
  ```

- Com o projeto na sua máquina, abra o seu editor de código favorito e então, dentro do seu projeto no seu terminal, execute o comando:

  ```
  npm install
  ```

- Após isso, basta inicializar sua aplicação:

  ```
  npm start
  ```

- Por fim, ao executar esse comando, aparecerá no terminal o status da aplicação.

- Agora você poderá fazer requisições para a API, usando como base, o link:


  ```
  https://localhost:5000/
  ```
