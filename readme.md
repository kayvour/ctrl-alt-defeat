# Prompt Side of the Force ⚔️

> **A full-stack Star Wars-themed web application that channels the Force to provide AI-powered responses with both Sith brutality and Jedi wisdom**

Experience the eternal struggle between light and dark through AI-generated responses. Enter any prompt and witness the Force manifest as both a brutal Sith roast and enlightened Jedi guidance.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/prompt-side-of-the-force)

## 🌟 About

Prompt Side of the Force is an interactive web application that demonstrates the duality of the Force through AI responses. Built for those who appreciate both constructive feedback and brutal honesty, this app provides two contrasting perspectives on any prompt you submit.

Whether you're seeking wisdom from the Jedi Council or the harsh truths of the Sith, this application harnesses the power of AI to deliver responses that embody the characteristics of both sides of the Force.

## ✨ Features

### Core Functionality
- **🤖 Dual AI Responses**: Submit any prompt and receive two distinct AI-generated responses
- **💢 Sith Roasts**: Brutal, honest feedback delivered with Sith-like intensity
- **🌟 Jedi Wisdom**: Constructive, wise guidance channeling Jedi philosophy
- **⚔️ Interactive UI**: Immersive Star Wars-themed interface with animations

### Immersive Experience
- **🔊 Lightsaber Sound Effects**: Authentic audio feedback for user interactions
- **✨ Starfield Animations**: Dynamic background animations creating a space atmosphere
- **🌈 Neon UI Elements**: Glowing, futuristic design elements inspired by lightsabers
- **🎬 Smooth Transitions**: Fluid animations between different app states

### Easter Eggs
- **🎭 Order 66 Trigger**: Enter "Order 66" to experience:
  - Palpatine's iconic quote display
  - Screen flash effect
  - Imperial March audio playback
  - Special UI transformation

### Technical Features
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **⚡ Fast Loading**: Lightweight architecture with CDN-based React
- **🔒 Secure API**: Protected endpoints with proper authentication
- **🌐 Production Ready**: Deployed on Vercel with proper routing

## 🛠️ Tech Stack

### Frontend
- **HTML5**: Semantic markup structure
- **CSS3**: Custom styling and animations
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **React**: JavaScript library loaded via CDN for component-based architecture
- **Web Audio API**: For lightsaber sound effects and background music

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **OpenRouter**: OpenAI-compatible API service for AI responses
- **CORS**: Cross-origin resource sharing middleware
- **dotenv**: Environment variable management

### Deployment & DevOps
- **Vercel**: Serverless deployment platform
- **vercel.json**: Configuration for routing and build settings
- **Environment Variables**: Secure API key management

### APIs & Services
- **OpenRouter API**: AI text generation service
- **Custom Express API**: Backend endpoints for AI interactions

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenRouter API account
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/prompt-side-of-the-force.git
   cd prompt-side-of-the-force
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file in the root directory
   cp .env.example .env
   ```
   
   Add your environment variables (see [Environment Variables](#environment-variables) section)

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` to see the application

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Vercel Deployment

#### Quick Deploy
1. Click the "Deploy with Vercel" button at the top of this README
2. Connect your GitHub account
3. Configure environment variables in Vercel dashboard
4. Deploy!

#### Manual Deploy
1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

4. **Configure Environment Variables**
   ```bash
   # Add each environment variable
   vercel env add OPENROUTER_API_KEY
   vercel env add OPENROUTER_MODEL
   vercel env add OPENROUTER_BASE_URL
   ```

5. **Redeploy with Environment Variables**
   ```bash
   vercel --prod
   ```

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# OpenRouter API Configuration
OPENROUTER_API_KEY=your_openrouter_api_key_here
OPENROUTER_MODEL=openai/gpt-3.5-turbo
OPENROUTER_BASE_URL=https://openrouter.ai/api/v1

# Application Configuration
PORT=3000
NODE_ENV=development

# Optional: Custom Model Parameters
MAX_TOKENS=500
TEMPERATURE=0.7
```

### Getting Your API Key

1. Visit [OpenRouter](https://openrouter.ai/)
2. Sign up for an account
3. Navigate to API Keys section
4. Generate a new API key
5. Copy the key to your `.env` file

### Environment Variables Description

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENROUTER_API_KEY` | Your OpenRouter API key for AI responses | Yes |
| `OPENROUTER_MODEL` | AI model to use (default: gpt-3.5-turbo) | Yes |
| `OPENROUTER_BASE_URL` | OpenRouter API base URL | Yes |
| `PORT` | Server port (default: 3000) | No |
| `NODE_ENV` | Environment mode (development/production) | No |
| `MAX_TOKENS` | Maximum tokens for AI responses | No |
| `TEMPERATURE` | AI creativity level (0.0 - 1.0) | No |

## 📸 Screenshots

### Main Interface
![Main Interface](./screenshots/main-interface.png)
*The main interface featuring the starfield background and neon UI elements*

### Sith Roasts Response
![Sith Roasts](./screenshots/sith-roasts.png)
*Example of a brutal Sith-style roast response with red lightsaber effects*

### Jedi Wisdom Response
![Jedi Wisdom](./screenshots/jedi-wisdom.png)
*Example of wise Jedi guidance with blue lightsaber effects*

### Order 66 Easter Egg
![Order 66 Easter Egg](./screenshots/order-66.png)
*The special Order 66 easter egg activation with Palpatine quote*

### Mobile Responsive
![Mobile Interface](./screenshots/mobile-interface.png)
*Responsive design optimized for mobile devices*

## 🎮 Usage

### Basic Usage

1. **Enter your prompt** in the text area
2. **Click "Channel the Force"** to generate responses
3. **View dual responses**:
   - **💢 Sith Roasts**: Brutal, honest feedback
   - **🌟 Jedi Wisdom**: Constructive, wise guidance

### Easter Egg

1. **Type "Order 66"** in the prompt field
2. **Submit** to trigger the special sequence
3. **Experience** the Palpatine quote, screen flash, and Imperial March

### Audio Controls

- **🔊 Sound Effects**: Toggle lightsaber sounds on/off
- **🎵 Background Music**: Control ambient Star Wars music
- **🔇 Mute All**: Quick mute for all audio

## 🏗️ Project Structure

```
prompt-side-of-the-force/
├── public/
│   ├── index.html              # Main HTML file
│   ├── styles.css              # Custom CSS styles
│   ├── script.js               # React components and logic
│   └── assets/
│       ├── sounds/             # Audio files
│       │   ├── lightsaber.mp3
│       │   └── imperial-march.mp3
│       └── images/             # Image assets
├── server.js                   # Express backend server
├── vercel.json                 # Vercel deployment configuration
├── package.json                # Node.js dependencies
├── .env.example               # Environment variables template
├── .gitignore                 # Git ignore rules
└── README.md                  # This file
```

## 🔧 API Endpoints

### POST `/api/prompt`

Generate dual AI responses for a given prompt.

**Request Body:**
```json
{
  "prompt": "Your prompt text here"
}
```

**Response:**
```json
{
  "sithResponse": "Brutal Sith-style roast response",
  "jediResponse": "Wise Jedi guidance response",
  "timestamp": "2024-01-01T12:00:00Z"
}
```

### GET `/api/health`

Health check endpoint for monitoring.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T12:00:00Z"
}
```

## 🎨 Customization

### Styling

The application uses Tailwind CSS for styling. Key customizations include:

- **Neon Effects**: Custom CSS classes for glowing elements
- **Starfield Animation**: CSS keyframes for background stars
- **Lightsaber Colors**: Dynamic color changes based on response type

### Audio

Sound effects are managed through the Web Audio API:

- **Lightsaber Sounds**: Triggered on user interactions
- **Background Music**: Ambient Star Wars themes
- **Special Effects**: Order 66 easter egg sounds

### AI Responses

Customize AI behavior by modifying the system prompts in `server.js`:

```javascript
const sithPrompt = "You are a Sith Lord. Respond with brutal honesty...";
const jediPrompt = "You are a wise Jedi Master. Provide constructive guidance...";
```

## 🐛 Troubleshooting

### Common Issues

**API Key Errors**
- Ensure your OpenRouter API key is valid
- Check that environment variables are properly set
- Verify your OpenRouter account has sufficient credits

**Audio Not Playing**
- Check browser audio permissions
- Ensure audio files are properly loaded
- Try refreshing the page

**Vercel Deployment Issues**
- Verify environment variables are set in Vercel dashboard
- Check build logs for errors
- Ensure `vercel.json` configuration is correct

### Debug Mode

Enable debug mode by setting `NODE_ENV=development` in your `.env` file for detailed logging.

## 🚀 Future Enhancements

- [ ] **Multiple AI Models**: Support for different AI providers
- [ ] **Voice Input**: Speech-to-text prompt input
- [ ] **Character Avatars**: Animated Sith and Jedi characters
- [ ] **Response History**: Save and revisit previous responses
- [ ] **Sharing**: Share responses on social media
- [ ] **Custom Prompts**: User-defined response personalities
- [ ] **Dark/Light Mode**: Theme switching beyond Star Wars
- [ ] **Multiplayer**: Real-time collaboration features

## 🤝 Contributing

Contributions are welcome! Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.

### Development Setup

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Prompt Side of the Force

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Acknowledgments

- **OpenRouter** for providing the AI API infrastructure
- **Vercel** for seamless deployment and hosting
- **Tailwind CSS** for the utility-first CSS framework
- **React** for the component-based architecture
- **Star Wars** for the endless inspiration
- **The Force** for guiding this project to completion

## 📞 Contact & Support

- **GitHub Issues**: [Report bugs or request features](https://github.com/your-username/prompt-side-of-the-force/issues)
- **Discussions**: [Join the community discussion](https://github.com/your-username/prompt-side-of-the-force/discussions)
- **Email**: [your-email@example.com](mailto:your-email@example.com)

---

*"Do or do not, there is no try."* - Master Yoda

**May the Force be with you... and your prompts!** ⚔️✨
