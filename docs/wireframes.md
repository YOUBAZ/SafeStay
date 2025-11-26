# SafeStay Platform - Wireframe Specifications

## Overview
This document describes the layout and UI elements for key pages of the SafeStay platform.

---

## 1. Home Page

### Layout
- **Header Navigation**
  - Logo: "SafeStay" (top-left)
  - Main Navigation: Properties, How It Works, For Owners, Contact
  - Right side: Login, Sign Up buttons
  
- **Hero Section**
  - Background: High-quality image of student housing
  - Overlay: Semi-transparent gradient
  - Centered content:
    - H1: "Find Your Perfect Student Home"
    - Subtitle: "Verified, safe housing near your university"
    - Large search box with:
      - Location input (autocomplete)
      - University dropdown
      - Price range
      - "Search" button (primary color)

- **Value Propositions** (3 columns)
  - Card 1: Icon + "Verified Properties" + description
  - Card 2: Icon + "Secure Payments" + description
  - Card 3: Icon + "24/7 Support" + description

- **Featured Properties**
  - Section title: "Featured Properties"
  - Grid layout (3 columns, 2 rows)
  - Each card shows:
    - Property image
    - Gender restriction badge (if applicable)
    - Title
    - Location with distance
    - Price/month
    - Rating stars
    - Heart icon (favorite)

- **How It Works** (3 steps)
  - Step 1: Search → Step 2: Book → Step 3: Move In
  - Timeline visualization

- **Footer**
  - 4 columns: About, For Students, For Owners, Support
  - Social media links
  - Copyright notice

---

## 2. Search Results Page

### Layout
- **Header**: Same as home page

- **Search Bar** (sticky at top)
  - Location, University, Price, Filters button
  - Results count: "Showing 45 properties"
  - View toggle: Grid/List
  - Sort dropdown: Price, Distance, Rating, Newest

- **Two-column layout**
  
  **Left Sidebar (30% width) - Filters**
  - Price Range Slider (min: 500 EGP, max: 5000 EGP)
  - Distance from University
    - Radio buttons: <2km, 2-5km, 5-10km, >10km
  - Property Type
    - Checkboxes: Apartment, Room, Shared Room, Studio
  - Gender Preference
    - Radio: Any, Male Only, Female Only, Mixed
  - Amenities (checkboxes)
    - WiFi, Parking, Furnished, AC, Kitchen, Washing Machine, Balcony, Elevator, Security
  - Utilities Included
    - Electricity, Water, Internet, Gas
  - Bedrooms: Dropdown (Any, 1, 2, 3+)
  - Bathrooms: Dropdown (Any, 1, 2+)
  - "Clear All Filters" link
  - "Apply Filters" button

  **Main Content (70% width) - Property Cards**
  - Grid view: 2 columns
  - List view: 1 column (larger cards)
  
  Each Property Card contains:
  - Image carousel (3-5 images)
  - Verification badge (if verified)
  - Gender restriction badge
  - Featured ribbon (if featured)
  - Title (truncated to 2 lines)
  - Location with map pin icon
  - Distance badge: "2.3 km from Cairo University"
  - Price: "2,500 EGP/month"
  - Key features: 2 bed • 1 bath • 80 m²
  - Amenities icons (first 4)
  - Rating: ⭐ 4.5 (12 reviews)
  - Heart icon (favorite toggle)
  - "View Details" button
  
  - Pagination at bottom

- **Map View Toggle**
  - Button to show map with markers
  - Split screen: 50% map, 50% list

---

## 3. Property Details Page

### Layout
- **Header**: Same as home page

- **Image Gallery**
  - Large main image (60% width)
  - Grid of 4 thumbnails on right
  - "View All Photos" button overlay
  - Lightbox on click

- **Property Information (two-column)**
  
  **Main Content (65%)**
  - Title: "Spacious 2-Bedroom Apartment in Nasr City"
  - Location: "Nasr City, Cairo" with map pin
  - Verification badge: "✓ Verified Property"
  - Gender badge: "Female Only"
  
  **Quick Info Bar**
  - Property Type: Apartment
  - 2 Bedrooms
  - 1 Bathroom
  - 90 m²
  - 3rd floor of 5
  
  **Tabbed Content**
  - Tab 1: Overview
    - Description text
    - Available from: Date
    - Lease duration: Minimum period
  
  - Tab 2: Amenities
    - Grid of amenities with icons
    - Utilities included
  
  - Tab 3: Location
    - Embedded map
    - Distance to universities (list)
    - Nearby facilities: Metro, Supermarket, etc.
  
  - Tab 4: House Rules
    - Text list of rules
    - Pet policy, smoking policy, etc.
  
  - Tab 5: Reviews (12)
    - Average rating with breakdown
    - Individual reviews with:
      - Student name and photo
      - Rating stars
      - Date stayed
      - Verified stay badge
      - Review text
      - Helpful count
      - Owner response (if any)
    - "Write a Review" button (if eligible)

  **Sidebar (35%)**
  - **Price Card**
    - Large price: "2,500 EGP/month"
    - Deposit: "1,000 EGP"
    - Service fee: "250 EGP"
    - "Request Booking" button (primary, large)
    - "Save to Favorites" button (secondary)
  
  - **Owner Info Card**
    - Profile photo
    - Name: "Ahmed Hassan"
    - Member since: 2023
    - Properties: 3
    - Rating: ⭐ 4.8 (25 reviews)
    - Response rate: 95%
    - Response time: < 1 hour
    - "Contact Owner" button
  
  - **Similar Properties**
    - 3 small cards

---

## 4. Student Dashboard

### Layout
- **Sidebar Navigation** (fixed, left side)
  - SafeStay Logo
  - Menu items with icons:
    - 📊 Dashboard
    - 🏠 My Bookings
    - ❤️ Favorites
    - 💬 Messages
    - 👤 Profile
    - ⚙️ Settings
    - 🚪 Logout

- **Main Content Area**
  
  **Header**
  - Page title: "My Dashboard"
  - User greeting: "Welcome back, Sarah!"
  - Notification bell icon with badge
  
  **Stats Cards Row** (4 cards)
  - Active Bookings: 1
  - Saved Properties: 8
  - Unread Messages: 3
  - Upcoming Payments: 1
  
  **Current Booking Card** (if active)
  - Property image (small)
  - Property title
  - Address
  - Lease period: "Jan 2025 - Dec 2025"
  - Next payment: "1,500 EGP due on Feb 1, 2025"
  - "Pay Now" button
  - "View Contract" link
  - "Contact Owner" link
  
  **Quick Actions**
  - "Search Properties" button
  - "View Payment History" link
  - "Download Contracts" link
  
  **Favorite Properties** (horizontal scroll)
  - 4-5 property cards (compact)
  - "View All" link
  
  **Recent Messages**
  - List of 3 recent conversations
  - Profile pic, name, preview, timestamp
  - "View All Messages" link
  
  **Notifications**
  - List of recent notifications
  - Icon, message, timestamp

---

## 5. Property Owner Dashboard

### Layout
- **Top Navigation**
  - Logo
  - Search bar
  - Notifications
  - Profile dropdown

- **Stats Dashboard** (4 cards)
  - Total Properties: 5
  - Active Bookings: 12
  - Monthly Revenue: 30,000 EGP
  - Pending Requests: 3
  - Each with trend indicator (↑ or ↓)

- **Tabbed Content**
  
  **Tab 1: My Properties**
  - "Add New Property" button (top-right, prominent)
  - Table view:
    - Columns: Image, Title, Status, Occupancy, Monthly Rent, Views, Actions
    - Status badges: Active, Pending, Inactive
    - Actions: Edit, View, Delete icons
  - Filters: All, Active, Pending Verification, Inactive
  
  **Tab 2: Bookings**
  - Filters: All, Pending, Active, Completed
  - Table:
    - Property, Student Name, Period, Status, Rent, Actions
    - "View Details" button
  - Pending requests highlighted
  - "Approve" / "Reject" buttons
  
  **Tab 3: Payments**
  - Filter by date range
  - Table:
    - Date, Student, Property, Amount, Type, Status
  - Total revenue summary
  - "Download Report" button
  
  **Tab 4: Reviews**
  - List of reviews received
  - Respond to reviews interface
  
  **Tab 5: Analytics**
  - Charts:
    - Revenue over time (line chart)
    - Occupancy rate (bar chart)
    - Property performance comparison
  - Top performing property
  - Average rating trend

- **Side Panel: Booking Requests**
  - List of pending requests
  - Student name, property, dates
  - Quick approve/reject buttons
  - "View Full Details" link

---

## 6. Admin Verification Dashboard

### Layout
- **Admin Sidebar**
  - Logo
  - Navigation:
    - 📊 Dashboard
    - ✓ Verifications
    - 👥 Users
    - 🏠 Properties
    - ⚖️ Disputes
    - 📈 Analytics
    - ⚙️ Settings

- **Main Content**
  
  **Header**
  - Page title: "Verification Queue"
  - Stats: Pending (23), Today (5), This Week (45)
  
  **Filter Tabs**
  - All
  - Student IDs (8)
  - National IDs (5)
  - Property Listings (7)
  - Bank Accounts (3)
  
  **Verification Table**
  - Columns:
    - Type (with icon/badge)
    - User/Property
    - Submitted Date
    - Priority (High/Medium/Low)
    - Status
    - Actions
  
  - Sortable by date, priority, type
  
  **Expandable Row Details**
  - User/Owner Information
    - Name, email, phone
    - Registration date
    - Other verified items
  
  - Submitted Documents
    - Image previews
    - Zoom/download functionality
  
  - Verification Checklist
    - ☐ ID matches name
    - ☐ Photo is clear and readable
    - ☐ Not expired
    - ☐ No signs of tampering
  
  - Admin Notes
    - Text area for internal notes
  
  - Action Buttons
    - "Approve" (green, large)
    - "Request More Info" (yellow)
    - "Reject" (red)
  
  **Side Panel: Recent Activity**
  - Timeline of recent verifications
  - Admin who processed
  - Timestamp

---

## 7. Booking Flow (Multi-step)

### Step 1: Request Booking
- Property summary card
- Date selection
  - Move-in date
  - Lease duration (dropdown: 3, 6, 9, 12 months)
  - Move-out date (calculated)
- Price summary
  - Monthly rent × months
  - Deposit
  - Service fee
  - Total
- "Continue" button

### Step 2: Review & Confirm
- Property details summary
- Dates summary
- Student information review
  - Name, email, phone, university
  - Edit link
- Parent/guardian required? (checkbox)
  - If yes: Parent email input
- House rules acknowledgment (checkbox)
- Terms & Conditions (checkbox)
- "Proceed to Payment" button

### Step 3: Payment
- Payment method selection
  - Credit/Debit Card
  - Bank Transfer
  - Installment Plan (if available)
- Payment gateway integration
- Security badges

### Step 4: Contract Signing
- Contract preview (PDF)
- "Download Contract" button
- "I have read and agree" checkbox
- E-signature pad
- "Sign Contract" button
- Wait for owner signature

### Step 5: Confirmation
- Success message
- Booking reference number
- Contract download
- Next steps:
  - Wait for owner approval
  - Payment instructions
  - Contact information
- "Go to My Bookings" button

---

## 8. Parent Dashboard

### Layout
- Simplified sidebar

- **Overview**
  - Child/Student linked: Name, Photo
  - Current booking summary
  
- **Active Contracts**
  - List of active leases
  - Property details
  - Lease dates
  - Download contract button
  
- **Payments**
  - Payment history table
  - Upcoming payments
  - "Pay on Behalf" button
  - Receipt downloads
  
- **Contact & Support**
  - Student contact info
  - Property owner contact
  - SafeStay support
  - Emergency hotline

---

## Design System Notes

### Colors
- **Primary**: Teal/Blue (#0EA5E9)
- **Secondary**: Purple (#8B5CF6)
- **Success**: Green (#10B981)
- **Warning**: Yellow (#F59E0B)
- **Danger**: Red (#EF4444)
- **Neutral**: Gray scale

### Typography
- **Headings**: Inter, Bold
- **Body**: Inter, Regular
- **Arabic**: Cairo or Tajawal

### Components
- **Buttons**: Rounded, with hover states
- **Cards**: Subtle shadow, hover elevation
- **Inputs**: Outlined, focus states
- **Badges**: Rounded, colored backgrounds
- **Icons**: Consistent size, outlined style

### Spacing
- Base unit: 4px
- Common spacing: 8px, 16px, 24px, 32px

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## Accessibility Considerations
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader friendly
- High contrast mode
- Focus indicators
- Alt text for images
- ARIA labels

---

## RTL Support (Arabic)
- All layouts must support RTL
- Icons and images flip appropriately
- Text alignment changes
- Padding/margin adjustments
