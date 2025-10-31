console.log("🔍 Testando variáveis de ambiente...");

const requiredVars = [
  "NEW_RELIC_LICENSE_KEY",
  "NEW_RELIC_APP_NAME",
  "NEW_RELIC_HOST",
  "NODE_ENV"
];

requiredVars.forEach((v) => {
  console.log(`${v}:`, process.env[v] || "❌ não definida");
});

console.log("\n✅ Teste finalizado!");
