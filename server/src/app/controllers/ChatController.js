import 'dotenv/config';
import assistant from '../services/WatsonConversation';

class ChatController {
  async send(req, res) {
    const { context, message } = req.body;

    const assistantResponse = await assistant.message({
      input: {
        text: message,
      },
      workspace_id: process.env.WORKSPACE_ID,
      context,
    });

    delete assistantResponse.context.system;

    const response = {
      output: assistantResponse.output,
      context: assistantResponse.context,
    };

    return res.json(response);
  }
}

export default new ChatController();
