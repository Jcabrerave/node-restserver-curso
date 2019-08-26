//==============================
//puerto
//==============================

process.env.PORT = process.env.PORT || 8080;


//==============================
//vencimiento del token
//==============================
//60 segundo * 60 minutos * 24 horas * 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//==============================
//seed de autenticaicon
//==============================

process.env.SEED = process.env.SEED || 'secret';