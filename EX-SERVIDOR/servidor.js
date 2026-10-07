const http = require("http");
const fs = require("fs");
const path = require("path");

const servidor = http.createServer((req, res) => {
  // Obtém o nome do arquivo solicitado na URL
  const url = new URL(req.url, "http://localhost:3000");
  const nomeArquivo = decodeURIComponent(url.pathname).substring(1);

  // Verifica se foi informado um arquivo HTML válido
  if (
    !nomeArquivo ||
    path.basename(nomeArquivo) !== nomeArquivo ||
    !nomeArquivo.endsWith(".html")
  ) {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    return res.end("404 Not Found");
  }

  // Lê o arquivo HTML na mesma pasta deste servidor
  fs.readFile(path.join(__dirname, nomeArquivo), (erro, conteudo) => {
    if (erro) {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      return res.end("404 Not Found");
    }

    // Envia o conteúdo do arquivo para o navegador
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(conteudo);
  });
});

// Inicia o servidor na porta 3000
servidor.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
