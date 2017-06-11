const styleRed = [
  'color: #ff0000',
  'font-weight: bold',
].join(';');

const styleGreen = [
  'color: #00ff00',
  'font-weight: bold',
].join(';');

const styleBlue = [
  'color: #00ced1',
  'font-weight: bold',
].join(';');

const styleOrange = [
  'color: #ffa500',
  'font-weight: bold',
].join(';');

const stylePink = [
  'color: #ff69b4',
  'font-weight: bold',
].join(';');

const getStyle = (styleName) => {
  let color;
  switch (styleName) {
    case 'red':
      color = styleRed;
      break;
    case 'blue':
      color = styleBlue;
      break;
    case 'green':
      color = styleGreen;
      break;
    case 'orange':
      color = styleOrange;
      break;
    case 'pink':
      color = stylePink;
      break;
    default:
      color = '';
  }

  // console.log('color', color);
  return color;
}

module.exports = {
  log(name, value = '', style = '') {
    style = getStyle(style);
    const message = `%c[log] ${name}`;
    // eslint-disable-next-line no-console
    console.log(message, style, value);
  },

  p(text) {
    document.write("<p>" + text + "</p>");
  },

  t(text) {
    document.write(text);
  },

  wval(desc, value) {
    document.write("<p><b>" + desc + " =</b> " + value + "</p>");
  },

  h1(text) {
    this.whead(text, 1);
  },

  h2(text) {
    this.whead(text, 2);
  },

  h3(text) {
    this.whead(text, 3);
  },

  h4(text) {
    this.whead(text, 4);
  },

  whead(text, level) {
    const val = level ? level : 1;
    const h = document.createElement("h" + val);
    const t = document.createTextNode(text);
    h.appendChild(t);
    document.body.appendChild(h);
  },

  code(text) {
    const str = "<code>" + text + "</code>";
    document.write(str);
  },

  pre(text) {
    const str = "<pre>" + text + "</pre>";
    document.write(str);
  },

  logFunction(name) {
    //eslint-disable-next-line no-console
    console.log(`%c[FUN] ${name}()`, styleOrange);
  },
};
