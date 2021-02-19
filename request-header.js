const accept = [
  'application/json',
  'application/xml',
  'text/json',
  'text/x-json',
  'text/javascript',
  'text/xml',
].join();

module.exports = {
  accept,
  headers: { accept },
};
