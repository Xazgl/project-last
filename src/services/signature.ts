import { HmacSHA256 } from 'crypto-js'
import Base64 from 'crypto-js/enc-base64';

export function sign(val: string, secret: string): string {
  const hmacDigest = Base64.stringify(HmacSHA256(val, secret)).replace(/\=+$/, '');
  return val + '.' + hmacDigest
};

export function unsign(val: string, secret: string): string | boolean {
  const str = val.slice(0, val.lastIndexOf('.'));
  const mac = sign(str, secret);
  return mac === val ? str : false;
};

// // import crypto from 'crypto';
// import { HmacSHA256, SHA1 } from 'crypto-js'
// import Base64 from 'crypto-js/enc-base64';

// /**
//  * Sign the given `val` with `secret`.
//  *
//  * @param {String} val
//  * @param {String} secret
//  * @return {String}
//  * @api private
//  */

// export function sign(val: string, secret: string): string {
//   if ('string' != typeof val) throw new TypeError("Cookie value must be provided as a string.");
//   if ('string' != typeof secret) throw new TypeError("Secret string must be provided.");
//   const hmacDigest = Base64.stringify(HmacSHA256(val, secret));
//   return val + '.' + hmacDigest
//   // return val + '.' + crypto
//   //   .createHmac('sha256', secret)
//   //   .update(val)
//   //   .digest('base64')
//   //   .replace(/\=+$/, '');
// };

// /**
//  * Unsign and decode the given `val` with `secret`,
//  * returning `false` if the signature is invalid.
//  *
//  * @param {String} val
//  * @param {String} secret
//  * @return {String|Boolean}
//  * @api private
//  */

// export function unsign(val: string, secret: string): string | boolean {
//   if ('string' != typeof val) throw new TypeError("Signed cookie string must be provided.");
//   if ('string' != typeof secret) throw new TypeError("Secret string must be provided.");
//   const str = val.slice(0, val.lastIndexOf('.'));
//   const mac = sign(str, secret);

//   return SHA1(mac) === SHA1(val) ? str : false;
//   // return sha1(mac) === sha1(val) ? str : false;
// };

// /**
//  * Private
//  */

// // function sha1(str: string) {
// //   return crypto.createHash('sha1').update(str).digest('hex');
// //   // return crypto.createHash('sha1').update(str).digest('hex');
// // }