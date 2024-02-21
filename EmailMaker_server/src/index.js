const express = require('express');
const fs = require('fs');
const cors = require('cors')
const app = express();
const nunjucks = require('nunjucks')
const path = require('path');
const templatesDir = path.join(__dirname, 'views');
app.use(cors())

nunjucks.configure(templatesDir, {
      autoescape: true,
      express: app
  });  


  app.get('/download', (req, res) => {
      // Renderiza o arquivo .njk
      nunjucks.render('template.njk', (err, html) => {
          if (err) {
              res.status(500).send('Erro ao renderizar o arquivo .njk' + err);
              return;
          }
  
          // Define o caminho e o nome do arquivo .html
          const filePath = path.join(__dirname, 'arquivo.html');
          
          // Salva o conteúdo HTML em um arquivo .html
          fs.writeFile(filePath, html, (err) => {
              if (err) {
                  res.status(500).send('Erro ao salvar o arquivo .html:' + err);
                  return;
              }
         
              // Envie o arquivo HTML como um anexo de download
              res.download(filePath, 'arquivo.html', (err) => {
                  if (err) {
                      res.status(500).send('Erro ao enviar o arquivo para download' + err);
                      return;
                  }
                  
                  // Remova o arquivo .html após o download ser concluído
                  fs.unlink(filePath, (err) => {
                      if (err) console.log('Erro ao excluir o arquivo .html' + err);
                  });
              });
          });
      });
  });






const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});