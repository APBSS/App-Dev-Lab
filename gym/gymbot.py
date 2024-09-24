from flask import Flask, request, jsonify, session
from flask_cors import CORS
import google.generativeai as genai

app = Flask(__name__)
app.secret_key = "your-secret-key"  # Secret key for session handling
CORS(app)

# Configure API Key
GOOGLE_API_KEY = "AIzaSyCNC-PmklTH84klekwDhh9quwo3tiVNZzg"
genai.configure(api_key=GOOGLE_API_KEY)
model = genai.GenerativeModel('gemini-pro')

# Store conversation history in session
def get_conversation_history():
    return session.get('conversation', [])

def update_conversation_history(user_input, response_text):
    conversation = get_conversation_history()
    conversation.append({'user': user_input, 'bot': response_text})
    session['conversation'] = conversation

def chatbot(prompt):
    conversation_history = "\n".join([f"User: {msg['user']}\nBot: {msg['bot']}" for msg in get_conversation_history()])
    instructions = f'''
                    - Your role is to be a gym assistant and reply to user accordingly.
                    - Do not use bold text and asterisks.
                    - Answer must be very short and precise.
                    - Dont use numbers or asterisks for a sentence.
                    - Ensure your responses are empathetic and considerate.
                    - Keep your replies concise, under 60 words.
                    - Use numbers for only bullet points.
                    - Limit responses to 100 words or less.
                    - Respond with care and understanding.
                    - Act as a assistant, responding to gym and diet related queries.
                    - If the prompt is not about gym and diet, reply with "Sorry, I can only help with diet and gym related questions.
                    - Avoid using asterisks or bold text.
                    prompt = {prompt}
                    {conversation_history}
                  '''
    response = model.generate_content(instructions)
    return response.text

@app.route('/gymbot', methods=['POST'])
def chat():
    try:
        data = request.json
        user_input = data.get('prompt')
        
        if not user_input:
            return jsonify({'error': 'No prompt provided'}), 400
        
        # Get chatbot response and update history
        response_text = chatbot(user_input)
        update_conversation_history(user_input, response_text)
        
        return jsonify({'response': response_text})
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'Internal Server Error'}), 500

if __name__ == '__main__':
    app.run(port=5000)
