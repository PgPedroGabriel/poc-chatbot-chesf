import assistant from '../services/WatsonConversation';

class ChatController {
  async list(req, res) {
    console.log(assistant);
    return res.json({ x: 'x' });
  }
}

export default new ChatController();
