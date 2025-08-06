# Dimension Landing Page

A modern, responsive landing page inspired by Dimension.dev, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Clean, professional design with gradient effects and glass morphism
- 📱 **Fully Responsive**: Optimized for all screen sizes (mobile, tablet, desktop)
- ✨ **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- 🎯 **Performance Optimized**: Built with Next.js 14 and optimized for speed
- 🌙 **Dark Theme**: Beautiful dark theme with custom color palette
- 🔧 **TypeScript**: Full TypeScript support for better development experience

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dimension-landing-page
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx           # Main landing page
│   └── globals.css        # Global styles
├── public/                # Static assets
├── tailwind.config.js     # Tailwind configuration
├── next.config.js         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary colors: Blue gradient theme
- Dark theme: Custom dark palette
- Accent colors: Purple and blue combinations

### Animations
Custom animations are defined in `tailwind.config.js`:
- `fade-in`: Smooth fade-in effect
- `slide-up`: Slide up animation
- `float`: Floating animation for background elements
- `glow`: Glowing effect for interactive elements

### Components
The landing page includes:
- Hero section with animated background
- Features grid with hover effects
- Call-to-action section
- Footer with navigation links

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Design inspired by [Dimension.dev](https://www.dimension.dev/)
- Icons from [Lucide React](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/) 