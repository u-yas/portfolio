'use strict';

const crypto = require('crypto');

// set random encryption key
const crpytIv = crypto.randomBytes(16);; // set random initialisation vector
// ENC_KEY and IV can be generated as crypto.randomBytes(32).toString('hex');

export function encrypt(cryptKey,  plainData) {
  const pass =  Buffer.from(cryptKey, 'hex')
  var encipher = crypto.createCipheriv('aes-256-cbc', pass, crpytIv),
      encrypted = encipher.update(plainData, 'utf8', 'binary');

      encrypted += encipher.final('binary');
 const strIv = crpytIv.toString('hex');
  return  {result:Buffer.from(encrypted, 'binary').toString('base64'),iv:strIv};
};

// 復号メソッド
export function decrypt(cryptKey, strIv, encrypted) {
  const pass =  Buffer.from(cryptKey, 'hex');
  const toBufferIV = Buffer.from(strIv,'hex');
  encrypted = new Buffer.from(encrypted, 'base64').toString('binary');

  var decipher = crypto.createDecipheriv('aes-256-cbc', pass, toBufferIV),
      decrypted = decipher.update(encrypted, 'binary', 'utf8');

  decrypted += decipher.final('utf8');

  return decrypted;
};

