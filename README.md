# Q Homes - Real Estate Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.0.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Private-red?style=flat-square)](LICENSE)

> A comprehensive, multilingual real estate platform connecting property buyers, sellers, renters, and real estate professionals across borders.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [User Roles](#user-roles)
- [Internationalization](#internationalization)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Overview

Q Homes is a modern, full-featured real estate platform designed to facilitate property transactions and management. Built with Next.js 16 and React 19, it offers a seamless experience for various stakeholders in the real estate ecosystem, including:

- **Property Seekers**: Browse, search, and save residential, commercial, and land properties
- **Property Owners**: List and manage properties for sale or rent
- **Real Estate Agents**: Manage client relationships, listings, and appointments
- **Administrators**: Oversee platform operations, analytics, and content management

### Key Highlights

- 🌐 **Multilingual Support**: English and French language options
- 🏢 **Multiple Property Types**: Residential, commercial, and land listings
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS v4
- 🔐 **Role-Based Access Control**: Separate dashboards for clients, partners, and admins
- 🚀 **Performance Optimized**: React Compiler and Next.js App Router
- 🎨 **Modern UI/UX**: Clean interface with Lucide React icons

## ✨ Features

### Core Functionality

- **Property Listings**
  - Advanced search and filtering
  - Property details with image galleries
  - Virtual tours and interactive maps
  - Save favorites and create alerts
- **User Management**

  - Multi-role authentication (Client, Partner, Admin)
  - Social login integration (Google)
  - Profile management and preferences
  - Secure password recovery

- **Booking & Appointments**

  - Schedule property visits
  - Concierge service requests
  - Real-time availability checking
  - Appointment management dashboard

- **Content Management**

  - Blog system with rich editor
  - SEO management tools
  - Media library
  - Event management

- **Communication**

  - Inquiry system
  - In-app messaging
  - WhatsApp integration
  - Email notifications

- **Analytics & Reporting**
  - User activity tracking
  - Property performance metrics
  - Audit logs
  - Dashboard analytics

### Dashboard Features by Role

#### Client Dashboard

- View saved properties and favorites
- Manage appointments and inquiries
- Track saved searches
- Update profile and settings
- Access message inbox

#### Partner Dashboard

- Manage property listings
- Handle client inquiries
- Schedule and track appointments
- View performance analytics
- Manage business profile

#### Admin Dashboard

- User management and roles
- Property approval workflow
- Content and blog management
- Platform analytics
- SEO and media management
- System settings and configuration
- Audit logs and security

## 🛠 Tech Stack

### Frontend

- **Framework**: [Next.js 16.0.1](https://nextjs.org/) (App Router)
- **UI Library**: [React 19.2.0](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with PostCSS
- **Icons**: [Lucide React 0.552.0](https://lucide.dev/)
- **Language**: JavaScript (JSX)

### Development Tools

- **Linting**: ESLint with Next.js config
- **Compiler**: React Compiler (Babel plugin)
- **Package Manager**: npm

### Optimizations

- React Server Components
- Automatic image optimization
- Font optimization with next/font
- React Compiler for performance
- Code splitting and lazy loading

## 📁 Project Structure

```
quiahgroup/
├── public/                      # Static assets
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── [locale]/          # Internationalized routes
│   │   │   ├── about/         # About page
│   │   │   ├── blog/          # Blog system
│   │   │   ├── buy/           # Buy properties
│   │   │   ├── rent/          # Rent properties
│   │   │   ├── sell/          # Sell property form
│   │   │   ├── contact/       # Contact page
│   │   │   ├── listings/      # Property listings
│   │   │   ├── properties/    # Property categories
│   │   │   ├── dashboard/     # User dashboards
│   │   │   │   ├── admin/     # Admin panel
│   │   │   │   ├── client/    # Client portal
│   │   │   │   └── partner/   # Partner portal
│   │   │   ├── login/         # Authentication
│   │   │   └── register/      # User registration
│   │   ├── globals.css        # Global styles
│   │   ├── layout.jsx         # Root layout
│   │   └── page.jsx           # Root redirect
│   ├── components/            # React components
│   │   ├── auth/             # Authentication UI
│   │   ├── dashboard/        # Dashboard components
│   │   ├── home/             # Homepage sections
│   │   ├── property/         # Property components
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── ...
│   ├── contexts/             # React contexts
│   │   ├── AuthContext.jsx   # Authentication state
│   │   └── LanguageContext.jsx
│   ├── i18n/                 # Internationalization
│   │   ├── translations/     # Language files
│   │   │   ├── en.json
│   │   │   └── fr.json
│   │   └── index.js
│   ├── utils/                # Utility functions
│   │   └── auth.js
│   └── lib/                  # Libraries and helpers
│       └── data.js
├── eslint.config.mjs         # ESLint configuration
├── jsconfig.json             # JavaScript config
├── next.config.mjs           # Next.js configuration
├── package.json              # Dependencies
├── postcss.config.mjs        # PostCSS config
├── tailwind.config.js        # Tailwind config
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun package manager
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Md-Ridoy-Hasan-Kamrul/quiahgroup.git
   cd quiahgroup
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   # Create .env.local file (not included in repo)
   # Add your environment variables
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

The application will automatically redirect to `/en` (English) by default.

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
# Example:
# NEXT_PUBLIC_API_URL=https://api.example.com
# NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
```

### Next.js Configuration

The `next.config.mjs` file includes:

```javascript
{
  reactCompiler: true,           // Enable React Compiler
  images: {
    remotePatterns: [
      // Google, Pexels, Unsplash images allowed
    ]
  }
}
```

### Tailwind CSS v4

Tailwind v4 uses CSS-first configuration. Customize your theme in `src/app/globals.css` using the `@theme` directive.

## 👥 User Roles

### Client

- Browse and search properties
- Save favorites and create alerts
- Book property visits
- Submit inquiries
- Manage profile

### Partner (Agent/Agency)

- List and manage properties
- Respond to client inquiries
- Manage appointments
- View analytics
- Update business profile

### Admin

- Full platform access
- User and role management
- Content moderation
- Analytics and reporting
- System configuration
- SEO management

## 🌍 Internationalization

The platform supports multiple languages through the i18n system:

- **English** (`/en`)
- **French** (`/fr`)

### Adding Translations

1. Add translations to `src/i18n/translations/[locale].json`
2. Use the translation hook in components
3. All routes are automatically localized

### Language Switcher

Users can switch languages using the `LanguageSwitcher` component in the header.

## 💻 Development

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

### Code Style

- ESLint with Next.js configuration
- React Compiler optimizations enabled
- Component-based architecture
- Server Components by default
- Client Components marked with 'use client'

### Best Practices

1. **Server Components**: Use by default for better performance
2. **Client Components**: Only when needed (interactivity, hooks)
3. **Code Splitting**: Leverage Next.js automatic code splitting
4. **Image Optimization**: Use `next/image` for all images
5. **SEO**: Implement metadata in layout and page files
6. **Accessibility**: Ensure ARIA labels and semantic HTML

## 🚢 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Md-Ridoy-Hasan-Kamrul/quiahgroup)

1. Push your code to GitHub
2. Import project to Vercel
3. Configure environment variables
4. Deploy

### Other Platforms

The application can be deployed to any platform supporting Node.js:

- **Netlify**: Use Next.js adapter
- **AWS**: Deploy with Amplify or EC2
- **Docker**: Create Dockerfile for containerization
- **Self-hosted**: Build and run with `npm run build && npm start`

### Build Optimization

```bash
# Create production build
npm run build

# Test production build locally
npm run start
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style and conventions
- Write clear commit messages
- Test thoroughly before submitting PR
- Update documentation as needed
- Ensure no ESLint errors

## 📄 License

This project is private and proprietary. All rights reserved.

## 📞 Support

For support, questions, or feedback:

- **Website**: [Q Homes Platform](https://qhomes.example.com)
- **Email**: support@qhomes.example.com
- **Issues**: [GitHub Issues](https://github.com/Md-Ridoy-Hasan-Kamrul/quiahgroup/issues)

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**

_Last updated: November 2025_
#   q u i a h g r o u p _ - 2 5 0 _ w e b - s a f a r i  
 