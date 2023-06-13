// test 1: add a task
function testAddTask() {
    tasks = [];
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const testResults = document.getElementById('testResults');
  
    taskInput.value = 'task 1';
    addTaskBtn.click();
  
    // assert tasks array length
    if (tasks.length === 1) {
      testResults.innerHTML += '<p>test 1 passed: task added successfully</p>';
    } else {
      testResults.innerHTML += '<p>test 1 failed: incorrect tasks length</p>';
    }
  
    // assert task name and completion status
    if (tasks[0].name === 'task 1' && tasks[0].completed === false) {
      testResults.innerHTML += '<p>test 1 passed: task name and completion status are correct</p>';
    } else {
      testResults.innerHTML += '<p>test 1 failed: incorrect task name or completion status</p>';
    }
  }
  
  // test 2: toggling task completion
  function testToggleTask() {
    tasks = [{ name: 'task 1', completed: false }, { name: 'task 2', completed: true }];
    const testResults = document.getElementById('testResults');
  
    toggleTask(0);
  
    // assert task completion status
    if (tasks[0].completed === true) {
      testResults.innerHTML += '<p>test 2 passed: task completion status toggled successfully</p>';
    } else {
      testResults.innerHTML += '<p>test 2 failed: incorrect task completion status</p>';
    }
  
    toggleTask(1);
  
    // assert task completion status
    if (tasks[1].completed === false) {
      testResults.innerHTML += '<p>test 2 passed: task completion status toggled successfully</p>';
    } else {
      testResults.innerHTML += '<p>test 2 failed: incorrect task completion status</p>';
    }
  }
  
  // run dem tests
  window.onload = function () {
    testAddTask();
    testToggleTask();
  };
  