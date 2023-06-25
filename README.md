# My Books
An web application to register books that I develop while I study `C#` and `Typescript`. It consists in a Rest API, developed with `.NET`, and a frontend, developed in `Next`. I'm using `Docker` compose to infrastructure.

## Backend technologies

| Technology | Name | Version |
| ----------- | ---- | ------ |
| **Language (code)**    | C#   | 11 |
| **Framework**   | .NET | 7.0.305|
| **SGBD**        | MySQL | 8.0.33 |

## Frontend technologies

| Technology | Name | Version |
| ----------- | ---- | ------ |
| **Language (code)** | Typescript | 5.1.3 |
| **Language (style)** | SaSS | 1.63.6 |
| **Framework**   | Next | 13.4.7 |

## How to use this project
You will need to install `NodeJS`, `.NET 7`, and `Docker`. First of all, on root directory of this project run the command:
~~~bash
docker compose up
~~~
After that, on the same directory, run:
~~~bash
dotnet run --project BooksAPI/
~~~
At last, go to `myBooks` directory and run project's frontend with command:
~~~bash
npm run dev
~~~