class Message {
  constructor(names, sendtime, texts) {
    this.names = names;
    this.sendtime = sendtime;
    this.texts = texts;
  }
  toString() {
    console.log(`${this.sendtime} ${this.names} : ${this.texts}`);
  }
}
class Messenger {
  constructor() {
    this.history = [];
  }
  gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
  }
  showHistory() {
    this.history.forEach((element) => {
      element.toString();
    });
  }
  send(names, texts) {
    this.history.push(new Message(names, this.gettime(), texts));
  }
}
let sender = new Messenger();
sender.send("Gunel", "Ilk mesaj");
sender.send("Sevil", "Ikinci mesaj");
sender.send("Aynur", "Adiniz nedir");
sender.showHistory();
