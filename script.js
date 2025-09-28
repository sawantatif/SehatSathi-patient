// Global variables
let currentLanguage = 'en';
let currentUser = null;
let isOnline = navigator.onLine;
let offlineData = JSON.parse(localStorage.getItem('offlineData') || '{}');
let medicalHistory = JSON.parse(localStorage.getItem('medicalHistory') || '{}');
let selectedDoctor = null;

// Language translations
const translations = {
    en: {
        tagline: "Your Health Companion",
        select_language: "Select Language",
        welcome_back: "Welcome Back",
        login_subtitle: "Enter your details to continue",
        phone_number: "Phone Number",
        aadhaar_number: "Aadhaar Number (Optional)",
        send_otp: "Send OTP",
        enter_otp: "Enter OTP",
        verify_otp: "Verify OTP",
        offline_mode: "Offline Mode",
        synced: "Synced",
        home: "Home",
        appointments: "Appointments",
        records: "Records",
        medicine: "Medicine",
        profile: "Profile",
        quick_actions: "Quick Actions",
        book_appointment: "Book Appointment",
        view_records: "View Records",
        find_medicine: "Find Medicine",
        symptom_checker: "Symptom Checker",
        upcoming_appointments: "Upcoming Appointments",
        medicine_reminders: "Medicine Reminders",
        emergency_help: "Emergency Help",
        my_appointments: "My Appointments",
        book_new: "Book New",
        offline_booking: "Offline Booking Instructions",
        sms_booking_text: "Send SMS to book appointment:",
        sms_booking_note: "You will receive confirmation via SMS",
        health_records: "Health Records",
        scan_qr: "Scan QR",
        view_prescription: "View Prescription",
        view_report: "View Report",
        sync_status_text: "Some records are stored offline and will sync when online",
        medicine_finder: "Medicine Finder",
        nearby_pharmacies: "Nearby Pharmacies",
        offline_medicine_notice: "Showing cached pharmacy data. Last updated: 2 hours ago",
        edit_profile: "Edit Profile",
        change_language: "Change Language",
        notifications: "Notifications",
        help_support: "Help & Support",
        logout: "Logout",
        call_hospital: "Call Civil Hospital",
        call_health_worker: "Call Health Worker",
        send_location: "Send Location via SMS",
        ai_symptom_checker: "AI Symptom Checker",
        symptom_welcome: "Hello! I'm here to help you understand your symptoms. What are you experiencing today?",
        medical_history: "Medical History",
        history_subtitle: "Please provide your basic medical information",
        personal_info: "Personal Information",
        full_name: "Full Name",
        age: "Age",
        gender: "Gender",
        select_gender: "Select Gender",
        male: "Male",
        female: "Female",
        other: "Other",
        village: "Village/Location",
        medical_conditions: "Medical Conditions",
        diabetes: "Diabetes",
        hypertension: "Hypertension",
        heart_disease: "Heart Disease",
        asthma: "Asthma",
        allergies: "Allergies",
        none: "None",
        current_medications: "Current Medications",
        medications_list: "List your current medications",
        emergency_contact: "Emergency Contact",
        contact_name: "Contact Name",
        contact_phone: "Contact Phone",
        save_and_continue: "Save and Continue",
        available_doctors: "Available Doctors",
        sms_consultation: "SMS Consultation",
        sms_instructions: "SMS Instructions",
        sms_step1: "Send SMS to the doctor's number with your symptoms",
        sms_step2: "Include your patient ID and basic information",
        sms_step3: "Wait for doctor's response with advice",
        sms_template: "SMS Template",
        send_sms: "Send SMS"
    },
    hi: {
        tagline: "आपका स्वास्थ्य साथी",
        select_language: "भाषा चुनें",
        welcome_back: "वापस स्वागत है",
        login_subtitle: "जारी रखने के लिए अपना विवरण दर्ज करें",
        phone_number: "फोन नंबर",
        aadhaar_number: "आधार नंबर (वैकल्पिक)",
        send_otp: "OTP भेजें",
        enter_otp: "OTP दर्ज करें",
        verify_otp: "OTP सत्यापित करें",
        offline_mode: "ऑफलाइन मोड",
        synced: "सिंक किया गया",
        home: "होम",
        appointments: "अपॉइंटमेंट",
        records: "रिकॉर्ड",
        medicine: "दवा",
        profile: "प्रोफाइल",
        quick_actions: "त्वरित कार्य",
        book_appointment: "अपॉइंटमेंट बुक करें",
        view_records: "रिकॉर्ड देखें",
        find_medicine: "दवा खोजें",
        symptom_checker: "लक्षण जांचकर्ता",
        upcoming_appointments: "आगामी अपॉइंटमेंट",
        medicine_reminders: "दवा अनुस्मारक",
        emergency_help: "आपातकालीन सहायता",
        my_appointments: "मेरे अपॉइंटमेंट",
        book_new: "नया बुक करें",
        offline_booking: "ऑफलाइन बुकिंग निर्देश",
        sms_booking_text: "अपॉइंटमेंट बुक करने के लिए SMS भेजें:",
        sms_booking_note: "आपको SMS के माध्यम से पुष्टि मिलेगी",
        health_records: "स्वास्थ्य रिकॉर्ड",
        scan_qr: "QR स्कैन करें",
        view_prescription: "प्रिस्क्रिप्शन देखें",
        view_report: "रिपोर्ट देखें",
        sync_status_text: "कुछ रिकॉर्ड ऑफलाइन संग्रहीत हैं और ऑनलाइन होने पर सिंक होंगे",
        medicine_finder: "दवा खोजकर्ता",
        nearby_pharmacies: "पास की फार्मेसी",
        offline_medicine_notice: "कैश्ड फार्मेसी डेटा दिखाया जा रहा है। अंतिम अपडेट: 2 घंटे पहले",
        edit_profile: "प्रोफाइल संपादित करें",
        change_language: "भाषा बदलें",
        notifications: "सूचनाएं",
        help_support: "सहायता और समर्थन",
        logout: "लॉगआउट",
        call_hospital: "सिविल अस्पताल को कॉल करें",
        call_health_worker: "स्वास्थ्य कार्यकर्ता को कॉल करें",
        send_location: "SMS के माध्यम से स्थान भेजें",
        ai_symptom_checker: "AI लक्षण जांचकर्ता",
        symptom_welcome: "नमस्ते! मैं आपके लक्षणों को समझने में आपकी मदद करने के लिए यहां हूं। आज आप क्या अनुभव कर रहे हैं?",
        medical_history: "चिकित्सा इतिहास",
        history_subtitle: "कृपया अपनी बुनियादी चिकित्सा जानकारी प्रदान करें",
        personal_info: "व्यक्तिगत जानकारी",
        full_name: "पूरा नाम",
        age: "आयु",
        gender: "लिंग",
        select_gender: "लिंग चुनें",
        male: "पुरुष",
        female: "महिला",
        other: "अन्य",
        village: "गाँव/स्थान",
        medical_conditions: "चिकित्सा स्थितियां",
        diabetes: "मधुमेह",
        hypertension: "उच्च रक्तचाप",
        heart_disease: "हृदय रोग",
        asthma: "दमा",
        allergies: "एलर्जी",
        none: "कोई नहीं",
        current_medications: "वर्तमान दवाएं",
        medications_list: "अपनी वर्तमान दवाओं की सूची बनाएं",
        emergency_contact: "आपातकालीन संपर्क",
        contact_name: "संपर्क नाम",
        contact_phone: "संपर्क फोन",
        save_and_continue: "सहेजें और जारी रखें",
        available_doctors: "उपलब्ध डॉक्टर",
        sms_consultation: "SMS परामर्श",
        sms_instructions: "SMS निर्देश",
        sms_step1: "अपने लक्षणों के साथ डॉक्टर के नंबर पर SMS भेजें",
        sms_step2: "अपना रोगी ID और बुनियादी जानकारी शामिल करें",
        sms_step3: "डॉक्टर की सलाह के साथ प्रतिक्रिया की प्रतीक्षा करें",
        sms_template: "SMS टेम्प्लेट",
        send_sms: "SMS भेजें",
        select_doctor: "डॉक्टर चुनें",
        appointment_mode: "अपॉइंटमेंट मोड",
        video_call: "वीडियो कॉल",
        audio_call: "ऑडियो कॉल",
        available_slots: "उपलब्ध स्लॉट",
        booking_summary: "बुकिंग सारांश",
        doctor: "डॉक्टर",
        mode: "मोड",
        date_time: "दिनांक और समय",
        confirm_booking: "बुकिंग की पुष्टि करें",
        booking_confirmed: "बुकिंग पुष्ट",
        booking_successful: "बुकिंग सफल!",
        booking_id: "बुकिंग ID",
        sms_fallback_note: "आपको जल्द ही SMS पुष्टि मिलेगी।",
        done: "हो गया",
        prescription: "प्रिस्क्रिप्शन",
        last_updated: "अंतिम अपडेट स्थानीय रूप से 2 घंटे पहले",
        medicines: "दवाएं",
        download_pdf: "PDF डाउनलोड करें",
        scan_qr_pharmacy: "फार्मेसी में QR स्कैन करें",
        next_appointment: "अगला अपॉइंटमेंट",
        medicine_pickup: "दवा पिकअप",
        pickup_question: "क्या आपने आवंटित दुकान से दवा ली?",
        yes: "हां",
        no: "नहीं",
        pickup_confirmed: "दवा पिकअप की पुष्टि हो गई!",
        medical_records: "चिकित्सा रिकॉर्ड"
    },
    pa: {
        tagline: "ਤੁਹਾਡਾ ਸਿਹਤ ਸਾਥੀ",
        select_language: "ਭਾਸ਼ਾ ਚੁਣੋ",
        welcome_back: "ਵਾਪਸ ਸਵਾਗਤ",
        login_subtitle: "ਜਾਰੀ ਰੱਖਣ ਲਈ ਆਪਣਾ ਵੇਰਵਾ ਦਰਜ ਕਰੋ",
        phone_number: "ਫੋਨ ਨੰਬਰ",
        aadhaar_number: "ਆਧਾਰ ਨੰਬਰ (ਵਿਕਲਪਿਕ)",
        send_otp: "OTP ਭੇਜੋ",
        enter_otp: "OTP ਦਰਜ ਕਰੋ",
        verify_otp: "OTP ਤਸਦੀਕ ਕਰੋ",
        offline_mode: "ਆਫਲਾਈਨ ਮੋਡ",
        synced: "ਸਿੰਕ ਕੀਤਾ ਗਿਆ",
        home: "ਘਰ",
        appointments: "ਅਪਾਇੰਟਮੈਂਟ",
        records: "ਰਿਕਾਰਡ",
        medicine: "ਦਵਾਈ",
        profile: "ਪ੍ਰੋਫਾਈਲ",
        quick_actions: "ਤੇਜ਼ ਕਾਰਵਾਈਆਂ",
        book_appointment: "ਅਪਾਇੰਟਮੈਂਟ ਬੁਕ ਕਰੋ",
        view_records: "ਰਿਕਾਰਡ ਦੇਖੋ",
        find_medicine: "ਦਵਾਈ ਲੱਭੋ",
        symptom_checker: "ਲੱਛਣ ਜਾਂਚਕਰਤਾ",
        upcoming_appointments: "ਆਉਣ ਵਾਲੇ ਅਪਾਇੰਟਮੈਂਟ",
        medicine_reminders: "ਦਵਾਈ ਯਾਦ ਦਿਵਾਉਣ ਵਾਲੇ",
        emergency_help: "ਐਮਰਜੈਂਸੀ ਮਦਦ",
        my_appointments: "ਮੇਰੇ ਅਪਾਇੰਟਮੈਂਟ",
        book_new: "ਨਵਾਂ ਬੁਕ ਕਰੋ",
        offline_booking: "ਆਫਲਾਈਨ ਬੁਕਿੰਗ ਨਿਰਦੇਸ਼",
        sms_booking_text: "ਅਪਾਇੰਟਮੈਂਟ ਬੁਕ ਕਰਨ ਲਈ SMS ਭੇਜੋ:",
        sms_booking_note: "ਤੁਹਾਨੂੰ SMS ਦੁਆਰਾ ਪੁਸ਼ਟੀ ਮਿਲੇਗੀ",
        health_records: "ਸਿਹਤ ਰਿਕਾਰਡ",
        scan_qr: "QR ਸਕੈਨ ਕਰੋ",
        view_prescription: "ਪ੍ਰਿਸਕ੍ਰਿਪਸ਼ਨ ਦੇਖੋ",
        view_report: "ਰਿਪੋਰਟ ਦੇਖੋ",
        sync_status_text: "ਕੁਝ ਰਿਕਾਰਡ ਆਫਲਾਈਨ ਸਟੋਰ ਹਨ ਅਤੇ ਆਨਲਾਈਨ ਹੋਣ 'ਤੇ ਸਿੰਕ ਹੋਣਗੇ",
        medicine_finder: "ਦਵਾਈ ਖੋਜਕਰਤਾ",
        nearby_pharmacies: "ਨੇੜਲੀਆਂ ਫਾਰਮੇਸੀ",
        offline_medicine_notice: "ਕੈਸ਼ਡ ਫਾਰਮੇਸੀ ਡੇਟਾ ਦਿਖਾਇਆ ਜਾ ਰਿਹਾ ਹੈ। ਆਖਰੀ ਅਪਡੇਟ: 2 ਘੰਟੇ ਪਹਿਲਾਂ",
        edit_profile: "ਪ੍ਰੋਫਾਈਲ ਸੰਪਾਦਿਤ ਕਰੋ",
        change_language: "ਭਾਸ਼ਾ ਬਦਲੋ",
        notifications: "ਸੂਚਨਾਵਾਂ",
        help_support: "ਮਦਦ ਅਤੇ ਸਹਾਇਤਾ",
        logout: "ਲੌਗਆਉਟ",
        call_hospital: "ਸਿਵਿਲ ਹਸਪਤਾਲ ਨੂੰ ਕਾਲ ਕਰੋ",
        call_health_worker: "ਸਿਹਤ ਕਰਮਚਾਰੀ ਨੂੰ ਕਾਲ ਕਰੋ",
        send_location: "SMS ਦੁਆਰਾ ਸਥਾਨ ਭੇਜੋ",
        ai_symptom_checker: "AI ਲੱਛਣ ਜਾਂਚਕਰਤਾ",
        symptom_welcome: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਤੁਹਾਡੇ ਲੱਛਣਾਂ ਨੂੰ ਸਮਝਣ ਵਿੱਚ ਤੁਹਾਡੀ ਮਦਦ ਕਰਨ ਲਈ ਇੱਥੇ ਹਾਂ। ਅੱਜ ਤੁਸੀਂ ਕੀ ਅਨੁਭਵ ਕਰ ਰਹੇ ਹੋ?",
        medical_history: "ਮੈਡੀਕਲ ਹਿਸਟਰੀ",
        history_subtitle: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੀ ਬੁਨਿਆਦੀ ਮੈਡੀਕਲ ਜਾਣਕਾਰੀ ਪ੍ਰਦਾਨ ਕਰੋ",
        personal_info: "ਨਿੱਜੀ ਜਾਣਕਾਰੀ",
        full_name: "ਪੂਰਾ ਨਾਮ",
        age: "ਉਮਰ",
        gender: "ਲਿੰਗ",
        select_gender: "ਲਿੰਗ ਚੁਣੋ",
        male: "ਮਰਦ",
        female: "ਔਰਤ",
        other: "ਹੋਰ",
        village: "ਪਿੰਡ/ਸਥਾਨ",
        medical_conditions: "ਮੈਡੀਕਲ ਸਥਿਤੀਆਂ",
        diabetes: "ਮਧੁਮੇਹ",
        hypertension: "ਹਾਈ ਬਲੱਡ ਪ੍ਰੈਸ਼ਰ",
        heart_disease: "ਦਿਲ ਦੀ ਬੀਮਾਰੀ",
        asthma: "ਦਮਾ",
        allergies: "ਐਲਰਜੀ",
        none: "ਕੋਈ ਨਹੀਂ",
        current_medications: "ਮੌਜੂਦਾ ਦਵਾਈਆਂ",
        medications_list: "ਆਪਣੀਆਂ ਮੌਜੂਦਾ ਦਵਾਈਆਂ ਦੀ ਸੂਚੀ ਬਣਾਓ",
        emergency_contact: "ਐਮਰਜੈਂਸੀ ਕੰਟੈਕਟ",
        contact_name: "ਕੰਟੈਕਟ ਨਾਮ",
        contact_phone: "ਕੰਟੈਕਟ ਫੋਨ",
        save_and_continue: "ਸੇਵ ਕਰੋ ਅਤੇ ਜਾਰੀ ਰੱਖੋ",
        available_doctors: "ਉਪਲਬਧ ਡਾਕਟਰ",
        sms_consultation: "SMS ਸਲਾਹ",
        sms_instructions: "SMS ਹਦਾਇਤਾਂ",
        sms_step1: "ਆਪਣੇ ਲੱਛਣਾਂ ਦੇ ਨਾਲ ਡਾਕਟਰ ਦੇ ਨੰਬਰ 'ਤੇ SMS ਭੇਜੋ",
        sms_step2: "ਆਪਣਾ ਮਰੀਜ਼ ID ਅਤੇ ਬੁਨਿਆਦੀ ਜਾਣਕਾਰੀ ਸ਼ਾਮਲ ਕਰੋ",
        sms_step3: "ਡਾਕਟਰ ਦੀ ਸਲਾਹ ਦੇ ਨਾਲ ਜਵਾਬ ਦੀ ਉਡੀਕ ਕਰੋ",
        sms_template: "SMS ਟੈਂਪਲੇਟ",
        send_sms: "SMS ਭੇਜੋ",
        select_doctor: "ਡਾਕਟਰ ਚੁਣੋ",
        appointment_mode: "ਅਪਾਇੰਟਮੈਂਟ ਮੋਡ",
        video_call: "ਵੀਡੀਓ ਕਾਲ",
        audio_call: "ਆਡੀਓ ਕਾਲ",
        available_slots: "ਉਪਲਬਧ ਸਲਾਟ",
        booking_summary: "ਬੁਕਿੰਗ ਸਾਰ",
        doctor: "ਡਾਕਟਰ",
        mode: "ਮੋਡ",
        date_time: "ਮਿਤੀ ਅਤੇ ਸਮਾਂ",
        confirm_booking: "ਬੁਕਿੰਗ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",
        booking_confirmed: "ਬੁਕਿੰਗ ਪੁਸ਼ਟ",
        booking_successful: "ਬੁਕਿੰਗ ਸਫਲ!",
        booking_id: "ਬੁਕਿੰਗ ID",
        sms_fallback_note: "ਤੁਹਾਨੂੰ ਜਲਦੀ SMS ਪੁਸ਼ਟੀ ਮਿਲੇਗੀ।",
        done: "ਹੋ ਗਿਆ",
        prescription: "ਪ੍ਰਿਸਕ੍ਰਿਪਸ਼ਨ",
        last_updated: "ਆਖਰੀ ਅਪਡੇਟ ਸਥਾਨਕ ਤੌਰ 'ਤੇ 2 ਘੰਟੇ ਪਹਿਲਾਂ",
        medicines: "ਦਵਾਈਆਂ",
        download_pdf: "PDF ਡਾਊਨਲੋਡ ਕਰੋ",
        scan_qr_pharmacy: "ਫਾਰਮੇਸੀ ਵਿੱਚ QR ਸਕੈਨ ਕਰੋ",
        next_appointment: "ਅਗਲਾ ਅਪਾਇੰਟਮੈਂਟ",
        medicine_pickup: "ਦਵਾਈ ਪਿਕਅੱਪ",
        pickup_question: "ਕੀ ਤੁਸੀਂ ਆਵੰਟਿਤ ਦੁਕਾਨ ਤੋਂ ਦਵਾਈ ਲਈ?",
        yes: "ਹਾਂ",
        no: "ਨਹੀਂ",
        pickup_confirmed: "ਦਵਾਈ ਪਿਕਅੱਪ ਦੀ ਪੁਸ਼ਟੀ ਹੋ ਗਈ!",
        medical_records: "ਮੈਡੀਕਲ ਰਿਕਾਰਡ"
    }
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    checkOnlineStatus();
});

function initializeApp() {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('currentUser');
    const savedMedicalHistory = localStorage.getItem('medicalHistory');
    
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        if (savedMedicalHistory) {
            medicalHistory = JSON.parse(savedMedicalHistory);
            showApp();
        } else {
            showMedicalHistoryScreen();
        }
    } else {
        showLanguageScreen();
    }
    
    // Check saved language
    const savedLanguage = localStorage.getItem('currentLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        updateLanguage();
    }
}

function setupEventListeners() {
    // Online/offline status
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    // Service worker registration
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(registration => console.log('SW registered'))
            .catch(error => console.log('SW registration failed'));
    }
}

function showLanguageScreen() {
    document.getElementById('languageScreen').style.display = 'flex';
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('medicalHistoryScreen').style.display = 'none';
    document.getElementById('appContainer').style.display = 'none';
}

function showLoginScreen() {
    document.getElementById('languageScreen').style.display = 'none';
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('medicalHistoryScreen').style.display = 'none';
    document.getElementById('appContainer').style.display = 'none';
}

function showMedicalHistoryScreen() {
    document.getElementById('languageScreen').style.display = 'none';
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('medicalHistoryScreen').style.display = 'flex';
    document.getElementById('appContainer').style.display = 'none';
}

function showApp() {
    document.getElementById('languageScreen').style.display = 'none';
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('medicalHistoryScreen').style.display = 'none';
    document.getElementById('appContainer').style.display = 'block';
    
    if (currentUser) {
        document.getElementById('userName').textContent = currentUser.name;
        document.getElementById('userId').textContent = `ID: ${currentUser.id}`;
        document.getElementById('profileName').textContent = currentUser.name;
        document.getElementById('profilePhone').textContent = currentUser.phone;
        document.getElementById('profileVillage').textContent = currentUser.village;
    }
    
    // Show appropriate content based on online/offline status
    updateAppContent();
    
    // Initialize smart alerts
    initializeSmartAlerts();
}

function selectLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('currentLanguage', lang);
    updateLanguage();
    showLoginScreen();
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

function sendOTP() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const aadhaarNumber = document.getElementById('aadhaarNumber').value;
    
    if (!phoneNumber) {
        alert('Please enter phone number');
        return;
    }
    
    // Simulate OTP sending
    document.getElementById('otpSection').style.display = 'block';
    document.getElementById('phoneNumber').disabled = true;
    document.getElementById('aadhaarNumber').disabled = true;
    
    // In real app, this would send actual OTP
    console.log('OTP sent to:', phoneNumber);
}

function verifyOTP() {
    const otpCode = document.getElementById('otpCode').value;
    
    if (!otpCode || otpCode.length !== 6) {
        alert('Please enter valid OTP');
        return;
    }
    
    // Simulate OTP verification
    currentUser = {
        id: 'P001',
        name: 'Patient Name',
        phone: document.getElementById('phoneNumber').value,
        village: 'Rampur Village',
        aadhaar: document.getElementById('aadhaarNumber').value
    };
    
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    showMedicalHistoryScreen();
}

function showTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(tabName + 'Tab').classList.add('active');
    
    // Add active class to selected nav item
    event.target.closest('.nav-item').classList.add('active');
    
    // Handle specific tab logic
    if (tabName === 'appointments') {
        showOfflineBookingIfNeeded();
    } else if (tabName === 'medicine') {
        showOfflineNoticeIfNeeded();
    }
}

function showOfflineBookingIfNeeded() {
    if (!isOnline) {
        document.getElementById('offlineBooking').style.display = 'block';
    } else {
        document.getElementById('offlineBooking').style.display = 'none';
    }
}

function showOfflineNoticeIfNeeded() {
    if (!isOnline) {
        document.getElementById('offlineNotice').style.display = 'block';
    } else {
        document.getElementById('offlineNotice').style.display = 'none';
    }
}

function bookAppointment() {
    if (isOnline) {
        showBookingScreen();
    } else {
        // Show offline booking instructions
        showOfflineBookingIfNeeded();
    }
}

function showBookingScreen() {
    document.getElementById('bookingModal').classList.add('show');
    generateAvailableSlots();
}

function closeBookingModal() {
    document.getElementById('bookingModal').classList.remove('show');
}

function selectBookingDoctor(name, specialty) {
    // Remove previous selection
    document.querySelectorAll('.doctor-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selection to clicked option
    event.target.closest('.doctor-option').classList.add('selected');
    
    // Update summary
    document.getElementById('selectedDoctorNameSummary').textContent = name;
    updateBookingSummary();
}

function generateAvailableSlots() {
    const slotsGrid = document.getElementById('slotsGrid');
    const today = new Date();
    const slots = [];
    
    // Generate slots for next 7 days
    for (let i = 1; i <= 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        
        const times = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'];
        
        times.forEach(time => {
            const slotDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            slots.push({ date: slotDate, time: time, fullDate: date.toISOString() });
        });
    }
    
    slotsGrid.innerHTML = '';
    slots.forEach(slot => {
        const slotElement = document.createElement('div');
        slotElement.className = 'slot-item';
        slotElement.innerHTML = `
            <div class="slot-date">${slot.date}</div>
            <div class="slot-time">${slot.time}</div>
        `;
        slotElement.onclick = () => selectSlot(slotElement, slot);
        slotsGrid.appendChild(slotElement);
    });
}

function selectSlot(element, slot) {
    // Remove previous selection
    document.querySelectorAll('.slot-item').forEach(item => {
        item.classList.remove('selected');
    });
    
    // Add selection to clicked slot
    element.classList.add('selected');
    
    // Update summary
    document.getElementById('selectedDateTimeSummary').textContent = `${slot.date} at ${slot.time}`;
    updateBookingSummary();
}

function updateBookingSummary() {
    const selectedDoctor = document.querySelector('.doctor-option.selected');
    const selectedSlot = document.querySelector('.slot-item.selected');
    const selectedMode = document.querySelector('input[name="appointmentMode"]:checked');
    
    if (selectedDoctor && selectedSlot && selectedMode) {
        document.getElementById('bookingSummary').style.display = 'block';
        document.getElementById('selectedModeSummary').textContent = selectedMode.nextElementSibling.textContent;
    }
}

function confirmBooking() {
    const selectedDoctor = document.querySelector('.doctor-option.selected h5').textContent;
    const selectedDateTime = document.getElementById('selectedDateTimeSummary').textContent;
    const selectedMode = document.querySelector('input[name="appointmentMode"]:checked').value;
    
    // Generate booking ID
    const bookingId = 'BK' + Date.now().toString().slice(-6);
    
    // Update confirmation modal
    document.getElementById('bookingId').textContent = bookingId;
    document.getElementById('confirmedDoctor').textContent = selectedDoctor;
    document.getElementById('confirmedDateTime').textContent = selectedDateTime;
    document.getElementById('confirmedMode').textContent = selectedMode;
    
    // Close booking modal and show confirmation
    closeBookingModal();
    document.getElementById('confirmationModal').classList.add('show');
    
    // Add to appointment list
    addAppointmentToList(bookingId, selectedDoctor, selectedDateTime, selectedMode);
    
    // Show smart alert
    showSmartAlert('green', 'Booking Confirmed', `Your appointment with ${selectedDoctor} is confirmed. Booking ID: ${bookingId}`);
}

function closeConfirmationModal() {
    document.getElementById('confirmationModal').classList.remove('show');
}

function addAppointmentToList(bookingId, doctor, dateTime, mode) {
    const appointmentList = document.querySelector('.appointment-list');
    const appointmentItem = document.createElement('div');
    appointmentItem.className = 'appointment-item';
    appointmentItem.innerHTML = `
        <div class="appointment-date">
            <span class="date">${dateTime.split(' ')[0]}</span>
            <span class="time">${dateTime.split(' ')[2]}</span>
        </div>
        <div class="appointment-details">
            <h4>${doctor}</h4>
            <p>${mode} Consultation</p>
            <span class="appointment-id">ID: ${bookingId}</span>
        </div>
        <div class="appointment-actions">
            <span class="status-badge confirmed">Confirmed</span>
            <button class="btn-call" onclick="startConsultation('${bookingId}')">
                <i class="fas fa-video"></i>
            </button>
        </div>
    `;
    appointmentList.insertBefore(appointmentItem, appointmentList.firstChild);
}

function showPrescription() {
    document.getElementById('prescriptionModal').classList.add('show');
}

function closePrescriptionModal() {
    document.getElementById('prescriptionModal').classList.remove('show');
}

function downloadPrescriptionPDF() {
    alert('Downloading prescription PDF...');
}

function scanQRAtPharmacy() {
    alert('QR code scanner will open...');
}

function showMedicinePickup() {
    document.getElementById('pickupModal').classList.add('show');
}

function closePickupModal() {
    document.getElementById('pickupModal').classList.remove('show');
}

function confirmPickup(pickedUp) {
    const pickupStatus = document.getElementById('pickupStatus');
    const pickupOptions = document.querySelector('.pickup-options');
    
    if (pickedUp) {
        pickupStatus.style.display = 'block';
        pickupOptions.style.display = 'none';
        
        // Show success alert
        showSmartAlert('green', 'Medicine Pickup Confirmed', 'Thank you for confirming your medicine pickup!');
        
        // Update pharmacy stock (simulate)
        updatePharmacyStock();
    } else {
        // Show reminder alert
        showSmartAlert('yellow', 'Medicine Pickup Reminder', 'Please remember to collect your medicine from the pharmacy.');
    }
}

function updatePharmacyStock() {
    // Simulate stock update
    console.log('Pharmacy stock updated');
}

function showSmartAlert(type, title, message) {
    const alertsContainer = document.getElementById('smartAlerts');
    const alertId = 'alert-' + Date.now();
    
    const alertElement = document.createElement('div');
    alertElement.className = `alert-item ${type}`;
    alertElement.id = alertId;
    alertElement.innerHTML = `
        <div class="alert-header">
            <i class="fas fa-${type === 'green' ? 'check-circle' : type === 'yellow' ? 'exclamation-triangle' : 'exclamation-circle'} alert-icon"></i>
            <span class="alert-title">${title}</span>
        </div>
        <div class="alert-message">${message}</div>
        <div class="alert-actions">
            <button class="alert-btn primary" onclick="dismissAlert('${alertId}')">Dismiss</button>
        </div>
    `;
    
    alertsContainer.appendChild(alertElement);
    
    // Auto-dismiss after 5 seconds
    setTimeout(() => {
        dismissAlert(alertId);
    }, 5000);
}

function dismissAlert(alertId) {
    const alertElement = document.getElementById(alertId);
    if (alertElement) {
        alertElement.remove();
    }
}

// Initialize smart alerts on app load
function initializeSmartAlerts() {
    // Show sample alerts
    setTimeout(() => {
        showSmartAlert('green', 'Welcome to SehatSathi', 'Your health companion is ready to help!');
    }, 2000);
    
    setTimeout(() => {
        showSmartAlert('yellow', 'Medicine Reminder', 'Don\'t forget to take your evening medicine at 6:00 PM');
    }, 5000);
}

function viewRecords() {
    showTab('records');
}

function findMedicine() {
    showTab('medicine');
}

function symptomChecker() {
    document.getElementById('symptomModal').classList.add('show');
}

function showEmergency() {
    document.getElementById('emergencyModal').classList.add('show');
}

function closeEmergency() {
    document.getElementById('emergencyModal').classList.remove('show');
}

function closeSymptomChecker() {
    document.getElementById('symptomModal').classList.remove('show');
}

function callEmergency(type) {
    let number;
    if (type === 'hospital') {
        number = '108'; // Emergency number
    } else if (type === 'healthworker') {
        number = '+91-9876543210'; // Health worker number
    }
    
    if (number) {
        window.location.href = `tel:${number}`;
    }
    closeEmergency();
}

function sendLocationSMS() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const message = `Emergency! My location: ${lat}, ${lng}`;
            const number = '108';
            
            // Try to send SMS
            if (navigator.sms) {
                navigator.sms.send(number, message);
            } else {
                // Fallback to phone call
                window.location.href = `tel:${number}`;
            }
        });
    }
    closeEmergency();
}

function startConsultation(appointmentId) {
    // Simulate starting video consultation
    alert(`Starting consultation for appointment ${appointmentId}`);
}

function cancelAppointment(appointmentId) {
    if (confirm('Are you sure you want to cancel this appointment?')) {
        // Remove appointment from list
        const appointmentItem = event.target.closest('.appointment-item');
        appointmentItem.remove();
        
        // In real app, this would update the backend
        console.log('Appointment cancelled:', appointmentId);
    }
}

function viewPrescription(prescriptionId) {
    showPrescription();
}

function downloadRecord(recordId) {
    // Simulate downloading record
    alert(`Downloading record ${recordId}`);
}

function viewLabReport(reportId) {
    // Simulate viewing lab report
    alert(`Viewing lab report ${reportId}`);
}

function scanQR() {
    // Simulate QR scanning
    alert('QR scanner feature coming soon!');
}

function searchMedicine() {
    const query = document.getElementById('medicineSearch').value;
    if (query.length > 2) {
        document.getElementById('medicineResults').style.display = 'block';
        // In real app, this would search medicine database
    } else {
        document.getElementById('medicineResults').style.display = 'none';
    }
}

function callPharmacy(pharmacyId) {
    // Simulate calling pharmacy
    alert(`Calling pharmacy ${pharmacyId}`);
}

function navigateToPharmacy(pharmacyId) {
    // Simulate navigation to pharmacy
    alert(`Navigating to pharmacy ${pharmacyId}`);
}

function editProfile() {
    alert('Edit profile feature coming soon!');
}

function changeLanguage() {
    showLanguageScreen();
}

function notificationSettings() {
    alert('Notification settings feature coming soon!');
}

function helpSupport() {
    alert('Help & support feature coming soon!');
}

function viewMedicalRecords() {
    showTab('records');
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('currentUser');
        currentUser = null;
        showLoginScreen();
    }
}

function handleSymptomInput(event) {
    if (event.key === 'Enter') {
        sendSymptomMessage();
    }
}

function sendSymptomMessage() {
    const input = document.getElementById('symptomInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message to chat
    addChatMessage(message, 'user');
    input.value = '';
    
    // Simulate AI response
    setTimeout(() => {
        const response = getSymptomResponse(message);
        addChatMessage(response, 'bot');
    }, 1000);
}

function addChatMessage(message, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    const p = document.createElement('p');
    p.textContent = message;
    messageDiv.appendChild(p);
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getSymptomResponse(symptoms) {
    // Simple symptom checker responses
    const responses = {
        'fever': 'Fever can be caused by various conditions. Please monitor your temperature and stay hydrated. If it persists for more than 3 days, consult a doctor.',
        'cough': 'Cough can be due to cold, flu, or other respiratory conditions. Try warm water with honey and rest. If it worsens, seek medical attention.',
        'headache': 'Headaches can have many causes. Try resting in a dark room and staying hydrated. If the pain is severe or persistent, consult a doctor.',
        'stomach': 'Stomach issues can be due to food, stress, or other factors. Try light foods and avoid spicy items. If symptoms persist, see a doctor.',
        'pain': 'Pain can have various causes. Rest and apply ice if it\'s an injury. If the pain is severe or doesn\'t improve, please consult a doctor.'
    };
    
    const lowerSymptoms = symptoms.toLowerCase();
    for (const [key, response] of Object.entries(responses)) {
        if (lowerSymptoms.includes(key)) {
            return response;
        }
    }
    
    return 'I understand you\'re experiencing symptoms. For a proper diagnosis, please consult with a healthcare professional. In case of emergency, call 108 immediately.';
}

function checkOnlineStatus() {
    isOnline = navigator.onLine;
    updateSyncStatus();
}

function handleOnline() {
    isOnline = true;
    updateSyncStatus();
    syncOfflineData();
    updateAppContent();
}

function handleOffline() {
    isOnline = false;
    updateSyncStatus();
    updateAppContent();
}

function updateSyncStatus() {
    const syncStatus = document.getElementById('syncStatus');
    if (syncStatus) {
        if (isOnline) {
            syncStatus.innerHTML = '<i class="fas fa-sync-alt"></i><span>Synced</span>';
            syncStatus.className = 'sync-status';
        } else {
            syncStatus.innerHTML = '<i class="fas fa-wifi-slash"></i><span>Offline</span>';
            syncStatus.className = 'sync-status offline';
        }
    }
}

function syncOfflineData() {
    // In real app, this would sync offline data with server
    console.log('Syncing offline data...');
    offlineData = {};
    localStorage.setItem('offlineData', JSON.stringify(offlineData));
}

// Utility functions
function formatDate(date) {
    return new Intl.DateTimeFormat(currentLanguage, {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }).format(date);
}

function formatTime(date) {
    return new Intl.DateTimeFormat(currentLanguage, {
        hour: '2-digit',
        minute: '2-digit'
    }).format(date);
}

function saveMedicalHistory() {
    // Collect form data
    const formData = {
        fullName: document.getElementById('fullName').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value,
        village: document.getElementById('village').value,
        conditions: [],
        medications: document.getElementById('medications').value,
        emergencyName: document.getElementById('emergencyName').value,
        emergencyPhone: document.getElementById('emergencyPhone').value
    };
    
    // Collect medical conditions
    const conditionCheckboxes = ['diabetes', 'hypertension', 'heart_disease', 'asthma', 'allergies', 'none'];
    conditionCheckboxes.forEach(condition => {
        if (document.getElementById(condition).checked) {
            formData.conditions.push(condition);
        }
    });
    
    // Validate required fields
    if (!formData.fullName || !formData.age || !formData.gender) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Save medical history
    medicalHistory = formData;
    localStorage.setItem('medicalHistory', JSON.stringify(medicalHistory));
    
    // Update user info with medical history data
    currentUser.name = formData.fullName;
    currentUser.village = formData.village;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    showApp();
}

function updateAppContent() {
    const offlineDoctors = document.getElementById('offlineDoctors');
    const quickActions = document.getElementById('quickActions');
    
    if (isOnline) {
        // Online mode - show quick actions
        offlineDoctors.style.display = 'none';
        quickActions.style.display = 'block';
    } else {
        // Offline mode - show available doctors
        offlineDoctors.style.display = 'block';
        quickActions.style.display = 'none';
    }
}

function selectDoctor(name, specialty, phone) {
    selectedDoctor = { name, specialty, phone };
    
    // Update SMS modal with selected doctor info
    document.getElementById('selectedDoctorName').textContent = name;
    document.getElementById('selectedDoctorSpecialty').textContent = specialty;
    document.getElementById('selectedDoctorPhone').textContent = phone;
    
    // Update SMS template with patient info
    const template = `Patient ID: ${currentUser.id}
Name: ${currentUser.name}
Age: ${medicalHistory.age}
Gender: ${medicalHistory.gender}
Village: ${currentUser.village}
Symptoms: [Describe your symptoms]
Duration: [How long]
Previous conditions: ${medicalHistory.conditions.join(', ')}
Current medications: ${medicalHistory.medications}`;
    
    document.getElementById('smsTemplate').value = template;
    
    // Show SMS modal
    document.getElementById('smsModal').classList.add('show');
}

function closeSMSModal() {
    document.getElementById('smsModal').classList.remove('show');
}

function sendSMS() {
    const template = document.getElementById('smsTemplate').value;
    const phone = selectedDoctor.phone;
    
    // In a real app, this would integrate with SMS API
    // For demo, we'll show a confirmation
    alert(`SMS would be sent to ${phone}:\n\n${template}`);
    
    closeSMSModal();
}

function showToast(message, type = 'info') {
    // Simple toast notification
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        z-index: 1000;
        font-size: 14px;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        selectLanguage,
        sendOTP,
        verifyOTP,
        showTab,
        bookAppointment,
        symptomChecker,
        showEmergency,
        callEmergency,
        sendLocationSMS,
        startConsultation,
        cancelAppointment,
        viewPrescription,
        downloadRecord,
        viewLabReport,
        scanQR,
        searchMedicine,
        callPharmacy,
        navigateToPharmacy,
        editProfile,
        changeLanguage,
        notificationSettings,
        helpSupport,
        logout,
        handleSymptomInput,
        sendSymptomMessage,
        addChatMessage,
        getSymptomResponse,
        checkOnlineStatus,
        handleOnline,
        handleOffline,
        updateSyncStatus,
        syncOfflineData,
        formatDate,
        formatTime,
        showToast
    };
}
