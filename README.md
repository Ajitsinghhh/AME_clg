# AME College Landing Page

A professional, modern landing page for AME College - an aviation career guidance and counseling service provider.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Key Sections**:
  - Hero section with call-to-action
  - Courses showcase (AME, Aeronautical, Aerospace, CPL, etc.)
  - Expert mentors section
  - About us section
  - Student testimonials
  - Contact form with validation
  - Footer with important links

- **Interactive Elements**:
  - Smooth scrolling navigation
  - Mobile-friendly hamburger menu
  - Form validation
  - Scroll animations
  - Hover effects

## Files Structure

```
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # Interactive functionality
└── README.md       # This file
```

## Usage

1. Open `index.html` in a web browser
2. No build process or dependencies required - pure HTML, CSS, and JavaScript

## Customization

- **Colors**: Modify CSS variables in `styles.css` (root section)
- **Content**: Update text content in `index.html`
- **Form Submission**: Update the form submission handler in `script.js` to connect to your backend API

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Images

The landing page uses high-quality aviation-related images from Unsplash. All images are:
- Optimized for web with proper sizing parameters
- Responsive and properly styled
- Used in the following sections:
  - Hero background (aircraft maintenance)
  - Why Choose Us icons (professional images)
  - Mentor profile photos
  - Course discovery images
  - Industry icons
  - Statistics background
  - Blog post images
  - Partner airline logos

**Note**: You can replace these with your own images by updating the `src` attributes in `index.html`. For local images, create an `images` folder and update the paths accordingly.

## Notes

- The contact form currently shows an alert on submission. You'll need to integrate it with your backend API.
- Images are loaded from Unsplash CDN. For production, consider hosting images locally or using your own CDN.
- The form includes basic validation for email and mobile numbers (Indian format).

