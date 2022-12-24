# [Luan Carlos Portfolio](https://luancgs.github.io/)

A simple portifolio to show case some of my skills as a developer. Also may serve as a _Curriculum Vitae_.

<hr>

## 🧰 Technologies

- [React](https://reactjs.org)
- [Sass](https://sass-lang.com)
- [Express](https://expressjs.com)
- [Docker](https://www.docker.com)

## ⚙️ How to run locally

First of all, you should clone this repo:

```sh
# Clone repo using ssh address
$ git clone git@github.com:luancgs/luancgs.github.io.git

# Enters repo directory
$ cd luancgs.github.io
```

If you have Docker installed, just do the following commands:

```sh
# Builds project docker image. Might take some time.
$ docker build --tag luancgs-portfolio .

# Runs container using the image built above.
$ docker run --init -it --rm -p 8080:9000 --name luancgs-portfolio luancgs-portfolio
```

After that, you should access http://localhost:8080 to see the portfolio.

If you don't have docker or prefer to run using local node, simply do:

```sh
# Install node dependencies
$ yarn

# Run project in development mode
$ yarn start
```

In this case, you should access http://localhost:9000 to see the portfolio.

## ❔ Questions? Get in touch!

<p align="left">
  <a href="https://www.linkedin.com/in/luan-carlos-gs/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
 </a>
<a href="mailto:luan.carlos.3174@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail" />
</a>
</p>
