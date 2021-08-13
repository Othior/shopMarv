import { CryptoJS } from '../../../node_modules/crypto-js';
// import sha256 from '../../../node_modules/crypto-js/sha256';


export const encrypter = (value) =>{
  console.log("CryptoJS => ",CryptoJS)
  // const hash = sha256(value)

  // hash.toString(CryptoJS.enc.Base64)
  // console.log("value encrypter => " ,hash)
}

//The set method is use for encrypt the value.
export const set = (keys, value) =>{
    var key = CryptoJS.enc.Utf8.parse(keys);
    var iv = CryptoJS.enc.Utf8.parse(keys);
    var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()), key,
    {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return encrypted.toString();
  }

  //The get method is use for decrypt the value.
  export const get = (keys, value) => {
    var key = CryptoJS.enc.Utf8.parse(keys);
    var iv = CryptoJS.enc.Utf8.parse(keys);
    var decrypted = CryptoJS.AES.decrypt(value, key, {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
  }

  export const clef = "123456$#@$^@1ERF";
