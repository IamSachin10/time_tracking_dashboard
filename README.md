# Project Name

[Time Tracking] Admin Dashboard

## Purpose

This project serves as a personal work admin dashboard, created with the goal of enhancing React skills. It provides a practical environment to implement and showcase React concepts, best practices, and the development of a user interface for administrative tasks related to work or personal projects.

## Technologies Used

- ReactJS
- Tailwind CSS
- Vite

## Dependencies

Ensure you have the following dependencies installed before running the project:

- React
- React DOM

You can install them using the following commands:

```bash
npm install react react-dom
```

## Project Setup

To access and explore the live version of the project, visit the following URL:

[Live Demo](https://zingy-lokum-64d501.netlify.app/)

No local installation is required for this frontend app. Simply navigate to the provided URL to experience the admin dashboard.

## Features

### Profile Section

- **Daily, Weekly, and Monthly Views:** Choose between different time views to analyze your activities.

- **Metrics:**
  - **Work Hours:** View and track your work hours.
  - **Play Hours:** Monitor and record your leisure or recreational hours.
  - **Study Hours:** Keep track of the time dedicated to educational activities.
  - **Exercise Hours:** Record your physical activity hours.
  - **Social Hours:** Track the time spent socializing or engaging in social activities.
  - **Self-Care Hours:** Monitor and manage time dedicated to self-care activities.



## code snippet

```JSX

import { useState } from "react";
import jsonData from "./data.json";

function App() {
  const [hours, setHours] = useState("daily");
  const clickHandler = (hour) => {
    setHours(hour);

    return (
          <header >
          <img
            src={jeremyPicture}
            alt="admin-profile-picture"/>
          <div>
            <p>report for</p>
            <h1>jeremy robson</h1>
          </div>
        </div>
        <div>
          <p onClick={() => clickHandler("daily")} >
            daily
          </p>
          <p onClick={() => clickHandler("weekly")}>
            weekly
          </p>
          <p onClick={() => clickHandler("monthly")}>
            monthly
          </p>
        </div>
      </header>

      <section>
        <h3> {/* Display work hours based on the selected view */}</h3>
        {/* Repeat similar sections for other metrics */}
      </section>
    )
  };
}

export default App
```

## Feedback and Contributions

We value your feedback! If you have any suggestions for code improvements, new features, or alternative ways to achieve the same goals, please feel free to:

- Open an issue on our [GitHub repository](https://github.com/IamSachin10/time_tracking_dashboard.git) to report bugs or propose new features.
- Submit a pull request with your improvements. Check our [contribution guidelines](link_to_contributing.md) for more details.

We appreciate your contributions and insights to make this project better!

