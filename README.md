Travel Community – Bus Journey Stories & Forums
A community-driven web application where users can share travel stories, tips, photos, and engage in discussion forums related to their bus journeys.
This platform aims to create a social space for travelers, encouraging contributions and interactions through user-generated content.
________________________________________
Features
=> User-Generated Content
•	Post bus journey experiences
•	Upload & view travel photos
•	Share actionable tips
•	Comment on posts & engage in discussions
=> Community Features
•	Forum-style discussion boards
•	Topic-wise threads (Safety, Routes, Bus Quality, etc.)
•	Social media–style feed for stories
•	Like, comment & interact with other travelers
=> Tech Stack
Layer 	            Technology
Frontend            React 18 + TypeScript + Vite
Styling	            TailwindCSS
Backend             Node.js + Express or Supabase backend
Database	        Supabase (PostgreSQL) or MongoDB depending on implementation
State Management	React Hooks
Deployment	        Vercel / Netlify
________________________________________
Project Structure
Bus_Journey_Task 1/
│── public/
│── src/
│   ├── pages/          # Feed, Forums, Upload Page
│   ├── components/     # UI components
│   ├── hooks/          # Custom React hooks
│   ├── integrations/   # API / Supabase integration
│   ├── assets/         # Images, static files
│   ├── App.tsx
│   └── main.tsx
│── supabase/           # Backend configuration (if used)
│── index.html
│── tailwind.config.ts
│── package.json
________________________________________
Setup Instructions
1. Clone the Repository
git clone <repo_url>
cd Bus_Journey_Task 1
2. Install Dependencies
npm install
3. Setup Environment Variables
Create a .env file:
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_key
4. Start Development Server
npm run dev
5. Build for Production
npm run build
________________________________________
Core Modules Explained
1. Feed Page (pages/)
•	Displays posts shared by travelers
•	Shows images, captions, travel tips
2. Story Upload Module
•	Users can upload photos
•	Add descriptions & travel notes
•	Data stored in Supabase buckets or backend server
3. Forum Module
•	Travelers can create threads
•	Join topic-based discussions
•	Reply to others
4. User Authentication (if enabled)
•	Supabase / JWT-based login
•	Each user can see their own posts
________________________________________
📸 Screenshots
(WEBSITE PICS folder.)
________________________________________
Contributing
Pull requests are welcome.
For major changes, please open an issue first to discuss what you'd like to change.
________________________________________
License
MIT License
________________________________________
Author
Padma Sindhoora Ayyagari
