class Message {
  constructor(text = '', created = Date.now()) {
    this.text = text;
    this.created = created;
  }
  get created() {
    return this._created;
  }

  set created(created) {
    if (!created || isNaN(created)) {
      throw new Error ('Invalid created');
    }
    this._created = created;
  }

  toString() {
    // O uso da crase permite a injecao de variaveis
    // sem utilizar concatenacao
    return `Message created at: ${this._created} - Text: ${this.text}`;
  }
}

class ImageMessage extends Message {
  constructor(text = '', created = Date.now(), 
              url = '', thumbnail = '') {
    super(text, created);
    this.url = url;
    this.thumbnail = thumbnail;
  }
  
  toString() {
    return `Photo${super.toString()} ` +
            ` - Url: ${this.url} ` +
            ` Thumbnail: ${this.thumbnail}`;
  }
}

var emptyMessage = new Message();
var textMessage = new Message('Yesterday message', Date.now() - 84600);
var photoMessage = new ImageMessage('Texto', Date.now() - 84600, 'url_da_photo', 'url_of_thumbnail');

console.log(String(emptyMessage));
console.log(String(textMessage));
console.log(String(photoMessage));

console.log(emptyMessage instanceof Message);
console.log(textMessage instanceof Message);
console.log(photoMessage instanceof Message);
console.log(photoMessage instanceof ImageMessage);