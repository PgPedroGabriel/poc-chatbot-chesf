import 'dotenv/config';
import AssistantV1 from 'watson-developer-cloud/assistant/v1';

class WatsonConversation {
  constructor() {
    this.assistant = new AssistantV1({
      url: process.env.WATSON_CONVERSATION_URL,
      username: process.env.WATSON_CONVERSATION_USERNAME,
      password: process.env.WATSON_CONVERSATION_PASSWORD,
      version: '2018-02-16',
    });
  }
}

export default new WatsonConversation().assistant;
