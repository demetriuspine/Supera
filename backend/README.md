## API CPF

Essa api verifica se o cpf informado via request body é válido ou não.

### ROTAS

#### GET /

Retorna um JSON com a seguinte estrutura:

```
{
  "message": "Informe o CPF pelo body"
}
```

#### POST /cpf

Informar o cpf (apenas o número) em string, pelo request body. Exemplo:
```
{
  "cpf": "12345678910"
}
```

Caso o cpf tenha menos que 11 caracteres, a API retornará a seguinte estrutura:

```
{
	"message": "\"cpf\" length must be at least 11 characters long"
}
```

Caso o cpf tenha mais que 11 caracteres, a API retornará a seguinte estrutura:

```
{
	"message": "\"cpf\" length must be less than or equal to 11 characters long"
}
```

Caso a API receba uma string com 11 caracteres e o cpf seja inválido:

```
{
	"message": false
}
```

Caso a API receba uma string com 11 caracteres e o cpf seja válido:

```
{
	"message": true
}
```