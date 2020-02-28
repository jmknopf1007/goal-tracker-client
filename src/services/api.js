const API_ROOT = 'http://localhost:4000';

const token = () => localStorage.getItem("token")

const headers = () => {
  return {
    "Content-Type": 'application/json',
    "Accept": 'application/json',
    "Authorization": token()
  }
}

const login = data => { //data needs to have EXACTLY a username and a password
  return fetch(`${API_ROOT}/api/v1/auth`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify(data)
  }).then(res => res.json())
}

const getCurrentUser = () => {
  return fetch(`${API_ROOT}/api/v1/current_user`, {
    headers: headers()
  }).then(res => res.json())
}

const postUser = user =>
  fetch(`${API_ROOT}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify(user)
  }).then(r => r.json())

const postObjective = (objective) => {
  return fetch(`${API_ROOT}/objectives`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify(objective)
  }).then(r => r.json())
}

const postGoal = (objective, goal) => {
  return fetch(`${API_ROOT}/objectives/${objective.id}/goals`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify(goal)
  }).then(r => r.json())
}

const patchObjective = (objective) => {
  return fetch(`${API_ROOT}/objectives/${objective.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify({
      objective: objective
    })
  }).then(r => r.json())
}

// const getObjectives = user => {
//   return fetch(`${API_ROOT}/users/${user.id}/objectives`)
//     .then(r => r.json())
// }

// const getGoals = (user, objective) => {
//   console.log(user, objective)
//   return fetch(`${API_ROOT}/users/${user.id}/objectives/${objective.id}/goals`)
//   .then(r => r.json())
// }

export const api = {
  auth: {
    login,
    getCurrentUser,
    postUser
  },
  data: {
    postObjective,
    postGoal,
    patchObjective
    // getObjectives,
    // getGoals
  }
}

// Initial Fetches

  // getUser = user =>
  //   fetch(`http://localhost:4000/users/${user.id}`)
  //     .then(r => r.json())
  // postUser = user =>
  //   fetch("http://localhost:4000/users", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json", "Accept": "application/json" },
  //     body: JSON.stringify({ user: user })
  //   }).then(r => r.json())
  // patchUser = user =>
  //   fetch(`http://localhost:4000/users/${user}`, {
  //     method: "PATCH",
  //     headers: { "Content-Type": "application/json", "Accept": "application/json" },
  //     body: JSON.stringify({ user: user })
  //   }).then(r => r.json())
  // deleteUser = user =>
  //   fetch(`http://localhost:4000/users/${user.id}`, {
  //     method: "DELETE",
  //     headers: { "Content-Type": "application/json", "Accept": "application/json" }
  //   }).then(r => r.json())

  // getObjectives = () =>
  //   fetch("http://localhost:4000/objectives")
  //     .then(r => r.json())
  // postObjective = objective =>
  //   fetch("http://localhost:4000/objectives", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json", "Accept": "application/json" },
  //     body: JSON.stringify(objective)
  //   }).then(r => r.json())
  // patchObjective = objective =>
  //   fetch(`http://localhost:4000/objectives/${objective.id}`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json", "Accept": "application/json" },
  //     body: JSON.stringify(objective)
  //   }).then(r => r.json())
  // deleteObjective = objective =>
  //   fetch(`http://localhost:4000/objectives/${objective.id}`, {
  //     method: "DELETE",
  //     headers: { "Content-Type": "application/json", "Accept": "application/json" }
  //   }).then(r => r.json())

    // getGoals = () =>
  //   fetch("http://localhost:4000/goals")
  //     .then(r => r.json())
  // postGoal = goal => 
  //   fetch("http://localhost:4000/goals", {
  //     method: "POST",
  //     headers: {"Content-Type": "application/json", "Accept": "application/json"},
  //     body: JSON.stringify(goal) 
  //   }).then(r => r.json())
  // patchGoal = goal => 
  //   fetch(`http://localhost:4000/goals/${goal.id}`, {
  //     method: "POST",
  //     headers: {"Content-Type": "application/json", "Accept": "application/json"},
  //     body: JSON.stringify(goal) 
  //   }).then(r => r.json())
  // deleteGoal = goal => 
  //   fetch(`http://localhost:4000/goals/${goal.id}`, {
  //     method: "DELETE",
  //     headers: {"Content-Type": "application/json", "Accept": "application/json"}
  //   }).then(r => r.json())