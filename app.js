const newRelicKey = process.env.NEW_RELIC_LICENSE_KEY;
const sonarToken = process.env.SONAR_TOKEN;

if (!process.env.API_KEY) {
  throw new Error('API_KEY não definida!');
}

console.log('Ambiente:', process.env.NODE_ENV);
console.log('Chave API:', process.env.API_KEY);
console.log('Variável customizada:', process.env.CUSTOM_VAR);
