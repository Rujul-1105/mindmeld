# MindMeld

A Chatbot interface powered by Perplexity AI.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Features](#features)
3. [Architecture](#architecture)
4. [API Reference](#api-reference)
5. [Customization](#customization)

## Getting Started

### Prerequisites

- Node.js
- npm 

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:Rujul-1105/mindmeld.git
   cd mindmeld
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Perplexity API key:

   ```
   VITE_PERPLEXITY_API_KEY = `your-api-key-here`
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Architecture

### Key Components

- **App.jsx**: The main component that manages the theme and renders the chat interface
- **ConversationWindow.jsx**: Displays the chat messages with neumorphic styling
- **ChatInput.jsx**: Handles user input and actions with clear chat functionality
- **ChatBubble.jsx**: Renders individual chat messages with animations
- **useChat.jsx**: Custom hook for managing chat state and API interactions
- **apiService.jsx**: Handles API communication with Perplexity AI

### State Management

The application uses React's built-in state management with custom hooks:

- **useChat**: Manages messages, loading state, and error handling
- **Theme State**: Manages light/dark mode preferences with localStorage persistence

## API Reference

### Perplexity AI API

The application uses the Perplexity AI API for generating chat responses.

#### Endpoint

```
POST https://api.perplexity.ai/chat/completions
```

#### Request Body

```json
{
  "model": "sonar",
  "messages": [
    {
      "role": "user",
      "content": "Your question here"
    }
  ],
  "max_tokens": 2000
}
```

#### Response

```json
{
  "id": "chatcmpl-123",
  "object": "chat.completion",
  "created": 1677652288,
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Response from AI"
      },
      "finish_reason": "stop"
    }
  ]
}
```

## Acknowledgments

- [Perplexity AI](https://www.perplexity.ai/) for providing the API
- [React](https://reactjs.org/) for the UI framework
- [Vite](https://vitejs.dev/) for the build tool
- [Cursor AI](https://cursor.sh/) for assisting with the neumorphic design implementation, dark mode functionality and UI improvements
