const app = require("./src/app");
const port = 8080

app.listen(8080, () => {
    console.log(`Servidor rodando na porta ${port}`);
})