# Robotic Person Social Media Platform for MechSys DEU

A social media platform for robotics enthusiasts, built with the MERN stack and Ballerina, designed to foster collaboration and innovation in the robotics community. The UI is structured as a centralized mind map (root-to-leaf) for intuitive navigation, tailored for MechSys DEU, a leader in robot innovation and manufacturing.

## Project Overview

This platform enables robotics enthusiasts, engineers, and innovators to connect, share ideas, and showcase projects. The UI is centered on the screen, resembling a mind map with a root node expanding to leaf nodes, providing a visually engaging and organized user experience. The project leverages the MERN stack (MongoDB, Express.js, React, Node.js) for the frontend and backend, with Ballerina handling backend microservices for scalability and integration.

## Features

- **Centralized Mind Map UI**: A unique, screen-centered interface resembling a root-to-leaf mind map for intuitive navigation.
- **User Profiles**: Robotics enthusiasts can create profiles to showcase their projects, skills, and interests.
- **Project Sharing**: Upload and share robotics projects, including code, designs, and media.
- **Community Interaction**: Follow users, comment on projects, and join discussion threads.
- **Real-Time Collaboration**: Integrated chat and collaboration tools for team projects.
- **Scalable Backend**: Ballerina microservices handle backend operations, ensuring performance and integration with external systems.

## Tech Stack

- **Frontend**: React (MERN stack) for dynamic and responsive UI.
- **Backend**: 
  - Node.js with Express.js for RESTful API development.
  - Ballerina for microservices, handling complex backend workflows and integrations.
- **Database**: MongoDB for flexible, scalable data storage.
- **Styling**: Tailwind CSS for modern, responsive design.
- **Deployment**: Docker for containerization, deployed on AWS (planned).

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- Ballerina (v2201.8.0 or higher)
- Docker (optional for deployment)
- Git

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/MechSysDEU/robotic-person-social-platform.git
   cd robotic-person-social-platform
   ```

2. **Install Frontend Dependencies**:
   ```bash
   cd client
   npm install
   ```

3. **Install Backend Dependencies**:
   ```bash
   cd ../server
   npm install
   ```

4. **Set Up Ballerina Microservices**:
   ```bash
   cd ../ballerina-services
   bal build
   ```

5. **Configure Environment Variables**:
   Create a `.env` file in the `server` directory with the following:
   ```env
   MONGO_URI=mongodb://localhost:27017/robotic_platform
   JWT_SECRET=your_jwt_secret
   BALLERINA_SERVICE_URL=http://localhost:9090
   ```

6. **Run the Application**:
   - Start MongoDB (if local): `mongod`
   - Start Backend: `cd server && npm start`
   - Start Frontend: `cd client && npm start`
   - Start Ballerina Services: `cd ballerina-services && bal run`

   The app will be available at `http://localhost:3000`.

## Project Structure

```
robotic-person-social-platform/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components (Home, Profile, etc.)
│   │   └── assets/         # Images, icons, etc.
├── server/                 # Node.js/Express backend
│   ├── routes/             # API routes
│   ├── models/             # MongoDB schemas
│   └── controllers/        # Business logic
├── ballerina-services/     # Ballerina microservices
│   ├── services/           # Service definitions
│   └── resources/          # Ballerina resources
└── README.md               # Project documentation
```

## Contributing

We welcome contributions from the robotics community! To contribute:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit changes: `git commit -m "Add your feature"`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

Please follow our [Code of Conduct](CODE_OF_CONDUCT.md) and [Contributing Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## About MechSys DEU

MechSys DEU is a pioneering company in robot innovation and manufacturing, dedicated to advancing robotics technology through cutting-edge solutions and community collaboration. Learn more at [MechSysDEU.com](https://mechsysdeu.com).

## Contact

For inquiries, reach out to:
- Email: info@mechsysdeu.com
- GitHub Issues: [Project Issues](https://github.com/MechSysDEU/robotic-person-social-platform/issues)