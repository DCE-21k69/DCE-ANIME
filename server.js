const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos del directorio actual
app.use(express.static(__dirname));

// Ruta principal para servir la SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`
==================================================
   DCE-ANIME - SERVIDOR RETRO NEON EN LÍNEA
==================================================
   
   La página web ya está disponible en tu red!
   Haz clic aquí para abrirla en tu navegador:
   
   ➜ http://localhost:${PORT}
   
==================================================
  `);
});
