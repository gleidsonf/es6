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

var emptyMessage = new Message();
var textMessage = new Message('Yesterday message', Date.now() - 84600);
console.log(String(emptyMessage));
console.log(String(textMessage));