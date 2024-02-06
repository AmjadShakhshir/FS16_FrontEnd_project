# E-Commerce FrontEnd
![React](https://img.shields.io/badge/React-v.18-blue)
![Redux toolkit](https://img.shields.io/badge/RTK-v.1-purple)
![TypeScript](https://img.shields.io/badge/TypeScript-v.4-green)
![SASS](https://img.shields.io/badge/SASS-v.1-hotpink)

• Kuzeyartist is an E-commerce project, online shopping solution that brings together the latest technologies to deliver a seamless user experience. The platform is designed to allow customers to browse through a wide range of products, add them to their cart, login, and register. It includes authentication and authorisation as well.


## Tech Stack

React, Redux, Material UI, Typescript, JEST 


## Features

- Fullscreen mode
- Cross platform



## Getting Started
### Installation

1- Clone frontend repo
```sh
  git clone https://github.com/AmjadShakhshir/FS16_FrontEnd_project.git frontend
  cd frontend
```

2- Install NPM packages
```js
npm install npm@latest -g
```

3- Enter your API in `common.ts`
```sh
export const url = http://api.example.com
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Demo

https://www.kuzeyartist.com
## API Reference

#### Get all products

```http
  GET /products
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get product

```http
  GET /products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |




## Authors

- [@amjadshakhshir](https://www.github.com/amjadshakhshir)

