# SehatSathi - Patient App

A mobile-first, offline-first patient application for rural telemedicine system. Built with HTML, CSS, and JavaScript, optimized for low-bandwidth environments and multilingual support.

## Features

### 🌐 Multilingual Support
- **English** - Primary language
- **Hindi** - हिंदी support
- **Punjabi** - ਪੰਜਾਬੀ support
- Dynamic language switching
- Localized content and UI

### 📱 Mobile-First Design
- Responsive design optimized for mobile devices
- Touch-friendly interface with large buttons
- Works on low-end Android phones
- Progressive Web App (PWA) capabilities

### 🔄 Offline-First Architecture
- Service Worker for offline functionality
- Local storage for critical data
- Background sync when online
- Offline indicators and status

### 🏥 Core Health Features

#### Registration & Login
- Simple phone number / Aadhaar login
- OTP verification system
- Offline mode indicator
- Language selector at startup

#### Home Dashboard
- Quick action cards for common tasks
- Upcoming appointments display
- Medicine reminders
- Emergency help button

#### Appointment Management
- Online booking with available slots
- Offline SMS booking instructions
- Appointment confirmation with booking ID
- Reschedule and cancel options

#### Digital Health Records (DHR)
- Timeline view of consultations
- Prescription cards with QR codes
- Lab reports and scan results
- Offline storage with sync status
- PDF download capabilities

#### Medicine Shop Finder
- Search medicine by name
- Nearby pharmacies with stock status
- Color-coded stock indicators (Green/Yellow/Red)
- Distance and contact information
- Offline cached stock data

#### AI Symptom Checker
- Lightweight chatbot interface
- Offline symptom library
- Online AI integration for advanced answers
- Multilingual symptom descriptions

#### Emergency Help
- One-tap emergency button
- Auto-call Civil Hospital (108)
- Call Health Worker
- GPS location sharing via SMS
- Works offline with SMS fallback

### 🔔 Notifications & Reminders
- Daily medicine reminders
- Appointment notifications
- Push notifications support
- SMS fallback for critical alerts
- Color-coded alert system

### 🎨 Visual Design
- Clean, medical theme (white/blue/green)
- Large, accessible buttons
- Icons with text labels
- High contrast for readability
- Optimized for rural usability

## Technical Features

### Performance
- Optimized for low-bandwidth connections
- Compressed assets and images
- Lazy loading for better performance
- Efficient caching strategies

### Accessibility
- Screen reader support
- High contrast mode
- Large touch targets
- Keyboard navigation
- Focus indicators

### Security
- HTTPS enforcement
- Secure data storage
- Input validation
- XSS protection

## Installation & Setup

### Local Development
1. Clone the repository
2. Open `index.html` in a web browser
3. For full PWA features, serve via HTTPS

### Production Deployment
1. Upload files to web server
2. Ensure HTTPS is enabled
3. Configure service worker
4. Test offline functionality

## File Structure

```
sih-patient/
├── index.html          # Main application file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── manifest.json       # PWA manifest
├── sw.js              # Service Worker for offline functionality
└── README.md          # Documentation
```

## Browser Support

- **Chrome** 60+ (Recommended)
- **Firefox** 55+
- **Safari** 11.1+
- **Edge** 79+
- **Mobile browsers** (Android Chrome, iOS Safari)

## Offline Capabilities

### Cached Resources
- HTML, CSS, JavaScript files
- Font Awesome icons
- Google Fonts
- App manifest

### Offline Features
- View cached health records
- Access medicine information
- Use symptom checker
- Emergency help (SMS)
- Offline appointment booking

### Data Sync
- Automatic sync when online
- Background sync support
- Conflict resolution
- Data integrity checks

## API Integration

### Health Records
- Patient data synchronization
- Prescription management
- Lab report access
- Scan result viewing

### Pharmacy Integration
- Stock level checking
- Medicine availability
- Pharmacy contact information
- Distance calculation

### Appointment System
- Doctor availability
- Slot booking
- Confirmation system
- SMS notifications

## Customization

### Adding New Languages
1. Add translations to `translations` object in `script.js`
2. Add language option to language selector
3. Update manifest.json language settings

### Styling Customization
- Modify CSS variables in `styles.css`
- Update color scheme
- Adjust button sizes and spacing
- Customize icons and images

### Feature Extensions
- Add new health modules
- Integrate additional APIs
- Extend offline capabilities
- Add new notification types

## Testing

### Manual Testing
- Test on different devices
- Verify offline functionality
- Check multilingual support
- Test emergency features

### Automated Testing
- Unit tests for JavaScript functions
- Integration tests for API calls
- Performance testing
- Accessibility testing

## Deployment

### Vercel (Recommended)
1. Connect GitHub repository
2. Deploy automatically
3. Configure custom domain
4. Enable HTTPS

### Other Platforms
- Netlify
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront

## Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Create an issue on GitHub
- Contact the development team
- Check documentation

## Roadmap

### Phase 1 (Current)
- ✅ Basic patient app functionality
- ✅ Offline-first architecture
- ✅ Multilingual support
- ✅ PWA capabilities

### Phase 2 (Planned)
- 🔄 Video consultation integration
- 🔄 Advanced AI symptom checker
- 🔄 Wearable device integration
- 🔄 Telemedicine platform connection

### Phase 3 (Future)
- 🔄 Blockchain health records
- 🔄 IoT device integration
- 🔄 Advanced analytics
- 🔄 Machine learning insights

---

**SehatSathi** - Empowering rural healthcare through technology
