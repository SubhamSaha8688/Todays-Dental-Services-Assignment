# Bright Smile Dental Clinic Website

A modern, responsive dental clinic website built with ReactJS, featuring a clean design, comprehensive services showcase, and user-friendly contact forms.

## 🚀 Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **React Router**: Single-page application with seamless navigation
- **Contact Form**: Fully validated contact form with Axios integration
- **Service Showcase**: Detailed service pages with modal dialogs
- **FAQ Section**: Interactive FAQ with smooth animations
- **Accessibility**: WCAG compliant with semantic HTML and ARIA labels
- **SEO Optimized**: Proper meta tags and semantic structure



## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── Footer.jsx          # Site footer
│   └── FAQ.jsx             # FAQ component
├── pages/
│   ├── Home.jsx            # Homepage
│   ├── About.jsx           # About us page
│   ├── Services.jsx        # Services showcase
│   └── Contact.jsx         # Contact page with form
├── styles/
│   └── main.css            # Global styles
├── App.jsx                 # Main app component
└── main.jsx                # Entry point
```

## 🎨 Design Features

- **Color Scheme**: Professional blue (#2563eb) and green (#10b981) palette
- **Typography**: Clean, readable fonts with proper hierarchy
- **Animations**: Smooth hover effects and transitions
- **Accessibility**: High contrast ratios and keyboard navigation
- **Mobile-First**: Responsive design with mobile optimization

## 📋 Pages Included

### Home Page
- Hero section with call-to-action
- Services overview
- Why choose us section
- FAQ component

### About Us Page
- Clinic background and story
- Team member profiles
- Mission and values
- Awards and certifications

### Services Page
- 6+ dental services with detailed descriptions
- Interactive service modals
- Pricing and duration information
- Service booking integration

### Contact Page
- Validated contact form with error handling
- Contact information and office hours
- Google Maps integration
- Emergency contact section

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (v14 or higher)


### Installation

1. Clone the repository:
```bash
git clone https://github.com/SubhamSaha8688/Todays-Dental-Services-Assignment.git
cd Todays-Dental-Services-Assignment
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```


## 🔧 Configuration

### Environment Variables
No environment variables are required for basic functionality. The contact form uses a mock API endpoint for demonstration.

### Customization
- **Colors**: Edit CSS custom properties in `src/styles/main.css`
- **Content**: Update content in respective page components
- **Images**: Replace placeholder images with actual clinic photos
- **Contact Info**: Update contact details in Footer and Contact components

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast mode support
- Screen reader compatible
- Focus management for modals
