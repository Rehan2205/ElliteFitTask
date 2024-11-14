# Task Management Application

## Overview
The Simple Task Manager project is a task management app focused on essential features and usability. Users can view upcoming, overdue, and completed tasks on a main dashboard, add and edit tasks with priority levels, and search or filter tasks by priority and status. Built with a lightweight frontend and local storage, the application ensures a simple, efficient user experience.

## Features
- *Dashboard Overview:* Shows a clear view of upcoming, overdue, and completed tasks.
- *Task Management:* Add, edit, and delete tasks with ease.
- *Search & Filter Options:* Quickly locate tasks by priority level or status using filter and search functionalities.
- *Local Data Storage:* Stores tasks locally, preserving data across sessions and the data is not lost after refreshing the page.

## Project Structure
The application is structured as follow:
- *Components:* Functional parts like filters, task lists, and search are each encapsulated within individual React components for modularity.
- *State Management:* Task data is managed locally with React’s state management for seamless interaction and updates.

## Assumptions
- Each task includes a title, description, due date, priority level, and status (upcoming, overdue, completed).
- Data is stored in local storage to maintain tasks across sessions without needing a backend.
- Tasks are flagged as overdue based on the current date.
- Tasks must be marked as completed manually; they will not automatically transition from upcoming to completed.


## Technologies
- *Frontend:* React for component-based UI, TailwindCSS for streamlined styling.
- *Tooling:* Vite for optimized builds and enhanced frontend development experience.


## Setup Instructions
1. *Clone the repository*:
   bash
   https://github.com/Rehan2205/ElliteFitTask.git
   cd task-management
3. **Install dependencies:**:
   bash
   npm install
4. *Run the application:*:
   bash
   npm run dev
5. **Build for production**:
   bash
   npm run build


## Future Enhancements
- Integrate user authentication for personalized task lists.
- Add reminders and notifications for upcoming or overdue tasks.
- Implement drag-and-drop functionality for easier task reordering.
- Include an analytics dashboard for insights on task completion and productivity trends.

## Live Demo

Check out the deployed application here: [EliteFit Task Manager](https://task-manager-uqbo.onrender.com)
