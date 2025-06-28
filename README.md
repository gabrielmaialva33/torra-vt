# Torra VT - Click & Retire System

A modern and professional web application built with **React**, **Vite**, **Tailwind CSS**, and **shadcn-ui** for the
Lojas Torra Click & Retire system. This project features a visually appealing login interface with immersive animations
and a distinct brand identity.

## 🎨 Design Philosophy

The application embodies a unique visual identity inspired by
the [Figma design](https://www.figma.com/design/xCCqMmngtZ6G8symsyJ7O5/Sistema-Clique-e-Retira?node-id=25-2772&t=cBYxPyMJrrNlzclz-4),
featuring:

- **Split-screen layout**: Clean form interface with a vibrant illustration panel.
- **Brand colors**: Torra Orange (#FF5101) with deep purple gradients.
- **Micro-interactions**: Smooth animations and hover effects.
- **Professional typography**: Inter and Roboto fonts for optimal readability.
- **Responsive design**: Fully adaptive to all device sizes.

## 🚀 Features

- **Modern Tech Stack**: React 19 + Vite for blazing-fast performance.
- **Tailwind CSS**: Utility-first styling with custom design tokens.
- **shadcn-ui Components**: Professional UI components with a consistent design.
- **Animated Elements**: Smooth transitions and interactive components.
- **Figma Integration**: Design tokens imported from Figma.
- **Type Safety**: TypeScript for a better developer experience.
- **Optimized Assets**: SVG icons and optimized images.

## 📦 Project Structure

```
torra-vt/
├── src/
│   ├── @types/            # Global type definitions
│   ├── api/               # API call logic (Axios)
│   ├── assets/            # Images, icons, and static assets
│   ├── components/        # Reusable UI components (shadcn-ui)
│   │   ├── layout/
│   │   └── ui/
│   ├── features/          # Feature modules (auth, dashboard, etc.)
│   │   ├── auth/
│   │   ├── dashboard/
│   │   └── ...
│   ├── lib/               # Utility functions (e.g., cn)
│   ├── routes/            # Route configuration (React Router)
│   ├── App.tsx            # Root component
│   └── main.tsx           # Application entry point
├── public/                # Static assets
├── components.json        # shadcn-ui configuration
├── tailwind.config.js     # Tailwind configuration with custom tokens
├── vite.config.ts         # Vite configuration
└── package.json           # Project dependencies
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd torra-vt
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Build for production**
   ```bash
   pnpm build
   # or
   npm run build
   ```

## 🎨 Design Tokens

The project uses a custom Tailwind configuration to match the Figma design:

### Colors

- **Torra Orange**: `#FF5101` (primary brand color)
- **Light Orange**: `#FF7B3D` (hover states)
- **Purple Gradient**: Radial gradient from `#42437B` to `#181945`
- **Dark Text**: `#1A1630`
- **Grays**: Custom scale from `#FFFFFF` to `#000000`

### Typography

- **Headings**: Roboto, 32px, weight 500
- **Body**: Inter, 16px, weight 400
- **Buttons**: Inter, 16px, weight 700, uppercase
- **Input**: Roboto, 15px, weight 400

### Shadows

- **Card**: `0px 6px 8px rgba(4, 4, 7, 0.1)`
- **Button**: `0px 0px 10px -5px rgba(112, 94, 200, 0.5)`
- **Footer**: `16px 0px 16px rgba(24, 23, 38, 0.06)`

### Border Radius

- **Left Panel**: `8px 0px 0px 8px`
- **Right Panel**: `0px 8px 8px 0px`
- **Inputs**: `3px 0px 0px 3px` (left), `0px 5px 5px 0px` (right)

## 🧩 Components

### Core Components

- **Login**: Full login page with a split-screen design.
- **InputField**: Custom input with icon support and animations.
- **Button**: Styled button with hover effects and loading states.
- **IllustrationPanel**: Animated background panel with floating elements.
- **Dashboard**: Main system layout with Header, Sidebar, and dynamic content.

### shadcn-ui Integration

The project is configured to use shadcn-ui components:

```bash
# Add new components
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add form
```

## 🔧 Development Workflow

### Import Aliases

The project uses import aliases for cleaner imports, configured in `tsconfig.json`:

- `@/*`: `./src/*`

### Code Style

- Follow React and TypeScript best practices.
- Keep components small and focused.
- Use the `cn()` utility for conditional classes.

### Git Workflow

```bash
# Feature branch
git checkout -b feature/component-name

# Commit with conventional commits
git commit -m "feat: add new animation to login panel"

# Push and create a PR
git push origin feature/component-name
```

## 🚀 Deployment

The project is configured for easy deployment:

1. **Build the project**
   ```bash
   pnpm build
   ```

2. **Preview locally**
   ```bash
   pnpm preview
   ```

3. **Deploy to your platform**
    - **Vercel**: Connect the GitHub repo and deploy automatically.
    - **Netlify**: Drag & drop the `dist` folder or connect the repo.
    - **Custom**: Upload the `dist` folder to your server.

### Environment Variables

Create a `.env` file for environment-specific configuration:

```env
VITE_API_URL=https://api.lojastorra.com.br
VITE_APP_NAME="Click & Retire"
```

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 🧪 Testing

```bash
# Run tests (when configured)
pnpm test

# Run tests in watch mode
pnpm test:watch
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Convention

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test additions/changes
- `chore:` Maintenance tasks

## 📄 License

This project is proprietary to Lojas Torra. All rights reserved.

---

**Created with ❤️ by Maia for Lojas Torra**
