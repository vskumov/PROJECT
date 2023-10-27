export function typographer(text) {
  if (typeof text !== 'string') {
    return text;
  }

  text = text.replace(/," /g, '", ');
  text = text.replace(/"([^"]*)"/g, '“$1”');
  text = text.replace(/-/g, ' — ');
  text = text.replace(/ (\w{1,2}) /g, ' $1\u00A0');

  return text;
}