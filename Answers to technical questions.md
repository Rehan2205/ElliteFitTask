# Task Manager

## Overview

This Task Manager application is built with React, providing a robust platform for efficiently managing tasks. Users can update, delete, and filter tasks, offering full control over their task lists.The application features an intuitive interface, allowing for a seamless user experience while organizing and tracking tasks.


## Q1) How long did you spend on the coding test?

I spent approximately **7-8 hours** on the coding test. This includes the time spent understanding the requirements, writing the code, and refining the solution. The process was spread over **3-4 sessions** with breaks for clarification and review.


## Q2) What was the most useful feature that was added to the latest version of your chosen language?

### Filters and priority setting

In this App component, I'm managing tasks with features like search, priority, and status filters for easy organization. The SearchBar, PriorityFilter, and StatusFilter components streamline task searches and filtering. With React hooks (useState and useEffect), task updates, deletions, and persistence are handled efficiently, creating an interactive and user-friendly task manager.

Here's how the main App component integrates useState and useEffect for efficient task management, handling task updates, filtering, and localStorage persistence in this task management project:

```javascript
import React, { useState, useEffect } from 'react';
import TaskDashboard from './TaskDashboard';
import SearchBar from './SearchBar';
import PriorityFilter from './PriorityFilter';
import StatusFilter from './StatusFilter';
import TaskForm from './TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  // Load tasks from localStorage with error handling and debugging
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    
    if (storedTasks) {
      try {
        const parsedTasks = JSON.parse(storedTasks);
        
        if (Array.isArray(parsedTasks)) {
          setTasks(parsedTasks);
        } else {
          setTasks([]); // Default to an empty array if the format is incorrect
        }
      } catch (error) {
        setTasks([]); // Default to an empty array in case of parse error
      }
    } else {
      setTasks([]); // Default to an empty array if no tasks are stored
    }
  }, []);
  
  // Save tasks to localStorage whenever `tasks` state changes
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (task) => {
    const newTask = { ...task, id: Date.now(), status: 'Pending' };
    setTasks(prevTasks => [...prevTasks, newTask]);
    setShowForm(false);
  };

  const updateTask = (updatedTask) => {
    setTasks(prevTasks => prevTasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    setEditingTask(null);
    setShowForm(false);
  };

  const deleteTask = (id) => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.filter(task => task.id !== id);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white font-sans">
      {/* Header Section */}
      <header className="py-6 shadow-md bg-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">Task Manager</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Controls Section */}
        <div className="space-y-4 md:space-y-0 md:flex md:items-center md:justify-between mb-6">
          {/* Search Bar */}
          <div className="w-full md:w-1/3">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>

          {/* Filters and Add Button */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            {/* Filter Button (Mobile) */}
            <button
              className="md:hidden px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
            >
              Filters
            </button>

            {/* Filter Options */}
            <div className={`${isFilterMenuOpen ? 'block' : 'hidden'} md:block md:flex md:space-x-4`}>
              <PriorityFilter priorityFilter={priorityFilter} setPriorityFilter={setPriorityFilter} />
              <StatusFilter statusFilter={statusFilter} setStatusFilter={setStatusFilter} />
            </div>

            {/* Add Task Button */}
            <button
              onClick={() => setShowForm(true)}
              className="w-full sm:w-auto px-4 py-2 bg-teal-400 text-white rounded-md hover:bg-teal-600 transition-colors duration-200 shadow-md"
            >
              + Add Task
            </button>
          </div>
        </div>

        {/* Task Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-lg">
              <TaskForm
                addTask={addTask}
                updateTask={updateTask}
                editingTask={editingTask}
                closeForm={() => setShowForm(false)}
              />
            </div>
          </div>
        )}

        {/* Task Dashboard */}
        <div className="bg-blue-100 rounded-lg shadow-lg overflow-hidden">
          <TaskDashboard
            tasks={tasks}
            searchQuery={searchQuery}
            priorityFilter={priorityFilter}
            statusFilter={statusFilter}
            deleteTask={deleteTask}
            setEditingTask={(task) => { setEditingTask(task); setShowForm(true); }}
            updateTask={updateTask}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
```
## Q3) How would you track down a performance issue in production?

To track down a performance issue in production, I would start by reviewing logs and using monitoring tools to identify slow responses or high traffic areas. I’d then narrow down the issue by checking code, network calls, or database queries for inefficiencies. Once identified, I would optimize the code, implement caching, or adjust server settings. After applying fixes, I’d monitor the system to ensure the issue is resolved and verify that the system performs well under different conditions. I’ve used this approach in the past to resolve performance lags by optimizing inefficient code and improving overall system response times.

## Q4)  If you had more time, what additional features or improvements would you consider adding to the task management application?

If I had more time to enhance the task management application, I would have considered adding the following features and improvements:

 - User Authentication & Authorization - Personalized accounts with different permission levels.
 - Task Prioritization & Sorting - Sort tasks by priority, due date, etc.
 - Due Dates & Reminders - Set due dates and send reminders.
 - Drag-and-Drop Interface - Reorganize tasks easily.
 - Analytics & Reporting - Task completion stats and progress reports.
