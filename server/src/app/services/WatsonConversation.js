import 'dotenv/config';
import AssistantV2 from 'watson-developer-cloud/assistant/v2';

class WatsonConversation {
  constructor() {
    this.assistant = new AssistantV2({
      url: process.env.WATSON_CONVERSATION_URL,
      username: process.env.WATSON_CONVERSATION_USERNAME,
      password: process.env.WATSON_CONVERSATION_PASSWORD,
      version: '2018-09-19',
    });
  }
}

export default new WatsonConversation().assistant;
