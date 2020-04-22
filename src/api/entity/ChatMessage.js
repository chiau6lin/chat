export default class ChatMessage {
  constructor (message) {
    this.id = message.id
    this.sender = message.sender
    this.receiver = message.receiver
    this.roomID = message.room_id
    this.message = message.message
    this.createDate = new Date(message.create_date)
  }
}
