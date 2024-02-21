function spitHTML(){
const nunjucks = require('nunjucks');
const fs = require('fs');
const path = require('path');
const templatesDir = path.join(__dirname, 'views');

// Atualize a configuração do Nunjucks com o caminho absoluto
nunjucks.configure(templatesDir, {
      autoescape: true,
  });

nunjucks.render('template.njk', "", (err, html) => {
      if (err) {
          console.error('Erro ao renderizar o template:', err);
          return;
      }
      
      const filePath = path.join(__dirname, 'arquivo.html');

      // Escreve o HTML renderizado em um arquivo
      fs.writeFile(filePath, html, (err) => {
          if (err) {
              console.error('Erro ao escrever o arquivo HTML:', err);
              return;
          }
          console.log('Arquivo HTML estático criado com sucesso!');
      });
  });
}

module.exports = spitHTML