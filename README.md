# My Project for SoftUni ReactJS Course

## Brief Overview

This project is a showcase of my capabilities in React.js, leveraging technologies like Vite, React Hooks, and Context API. It's designed as a full-fledged web application with authentication, CRUD operations, and dynamic routing, offering both public and private user experiences.

## Application Structure

### Public Part
- **Start Page:** Welcoming page providing an overview of the application.
- **Product Catalog:** Displays all products with basic specifications, accessible without user authentication.
- **User Login and Registration Forms:** Allows new users to register and existing users to log in.

### Private Part
- **For registered users** allowing them to create, edit and delete comments.
- **For admins** that enables admins to create and manage products, accessible only after admin authentication.

## Starting the Project

### Development Setup
- **Local Server:** Run `node .\server.js` in the 'server' folder.
- **Client Development:** Execute `npm run dev` in the client folder for Vite and hot reload.

### Deployment to Firebase
- **Client Deployment:** In the client folder, run `npm run build` followed by `firebase deploy`.
- **Server Functions:** In the server folder, execute `firebase deploy --only functions`.

## Detailed Overview

### Features
- **Dynamic Product Display:** Utilizes React's useEffect hook for API calls to fetch and display products.
- **Product Detail Pages:** Each product has a dedicated page with detailed information and user comments.
- **User Interaction:** Registered users can add, edit, or delete comments on product pages.
- **Admin Capabilities:** Special privileges for admins to create new products and to edit product specifications or delete the product through a modal interface.
- **Authentication:** Robust system allowing user account creation and login with different privileges.

### Technical Highlights
- **Form Validation and Error Handling:** Ensures a smooth user experience and robust application performance.
- **Dynamic Pages and Views:** Incorporates at least three dynamic pages, including product catalog and detail views.
- **Component-Based Architecture:** Structured with separate components and CSS files for modularity and maintainability.
- **Data Storage:** Product images and data are stored securely on Google Cloud.
- **Deployment:** Fully deployed on Firebase, available at [SoftUni ReactJS Project](https://softuni-reactjs-project-1234.web.app).

### Advanced React Features
- **Custom `useForm` Hook:** Enhances forms handling process.
- **Local Storage Management:** Efficient handling of authentication tokens for secure and persistent user sessions.
- **Auth Guard:** Route guards based on user privileges for enhanced security and user experience.
- **Reusable Services:** Efficient, reusable services for server communication, optimizing data fetching and manipulation.
- **AuthContext:** Streamlined user state management across the application using AuthContext.

### UI/UX Design
- **Styling:** Demonstrates strong UI creation skills with CSS, focusing on an intuitive and responsive design.