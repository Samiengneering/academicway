const websiteIndex = {
  'courses': [
       {title: 'Introduction to Web Development', url: 'courses.html', content: 'Learn the basics of HTML, CSS, and JavaScript.'},
      { title: 'Data Science Fundamentals', url: 'courses.html', content: 'Explore the world of data analysis and machine learning.' },
        { title: 'Digital Marketing Strategy', url: 'courses.html', content: 'Understand digital marketing techniques and strategies.' },
       { title: 'Business Management', url: 'courses.html', content: 'Learn about the world of business management and strategy.' }
  ],
 'opportunities': [
      { title: 'Software Engineering Internship', url: 'opportunities.html', content: 'Join our team for a hands-on experience in software development.' },
        { title: 'Research Assistant Position', url: 'opportunities.html', content: 'Assist in cutting-edge research projects in various fields.' },
        { title: 'Graduate Teaching Assistant', url: 'opportunities.html', content: 'Support students in their academic journey as a teaching assistant.' },
         { title: 'IT Support Specialist', url: 'opportunities.html', content: 'Provide essential IT support to our community.' },
        { title: 'Content Writer Internship', url: 'opportunities.html', content: 'Create content to reach a wide range of audience.' },
         { title: 'Market Research Analyst', url: 'opportunities.html', content: 'Analyze market trends to provide data-driven insights.' }
  ],
'pdfs': [
       { title: 'Calculus Textbook', url: 'pdfs.html', content: 'A comprehensive resource for learning calculus concepts.' },
        { title: 'Physics Formula Sheet', url: 'pdfs.html', content: 'A useful compilation of fundamental physics formulas.' },
         { title: 'History Guide', url: 'pdfs.html', content: 'Understand the global history.' },
         { title: 'Computer Science Overview', url: 'pdfs.html', content: 'A guide for basics of computer science.' },
          { title: 'Literary Analysis Guide', url: 'pdfs.html', content: 'Learn analysis for various literary works.' },
           { title: 'Research Methods Handbook', url: 'pdfs.html', content: 'How to conduct research efficiently and ethically.' }
  ],
 'scholarships': [
        { title: 'Global Excellence Scholarship', url: 'scholarships.html', content: 'Awarded to students with outstanding academic achievements.' },
          { title: 'STEM Scholarship', url: 'scholarships.html', content: 'For students pursuing studies in Science, Technology, Engineering, and Mathematics.' },
           { title: 'Arts and Humanities Scholarship', url: 'scholarships.html', content: 'For students pursuing studies in the world of art and humanities.' },
            { title: 'Social Justice Scholarship', url: 'scholarships.html', content: 'For students working towards social change and justice.' },
             { title: 'International Student Scholarship', url: 'scholarships.html', content: 'For students from around the world pursuing studies.' },
              { title: 'Local Student Scholarship', url: 'scholarships.html', content: 'For local students pursuing studies locally.' }
  ],
   'about': [
        { title: 'About ACADEMIC WAY', url: 'about.html', content: 'Welcome to ACADEMIC WAY, your ultimate resource hub for students, lecturers, and educational enthusiasts! We are here to make your academic journey smoother, more fruitful, and full of opportunities.' }
  ]
};

const searchInput = document.getElementById('search-input');
const searchResultsDiv = document.getElementById('search-results');


function displayResults(results) {
searchResultsDiv.innerHTML = '';
  if (results.length === 0) {
     searchResultsDiv.textContent = 'No results found.';
    return;
  }

 results.forEach(item => {
    const resultItem = document.createElement('a');
      resultItem.href = item.url;
      resultItem.classList.add('search-result-item');

     const titleElement = document.createElement('h3');
     titleElement.textContent = item.title;
     resultItem.appendChild(titleElement);

     const contentElement = document.createElement('p');
     contentElement.textContent = item.content;
      resultItem.appendChild(contentElement);

      searchResultsDiv.appendChild(resultItem);
  });
}

if (searchInput) {
searchInput.addEventListener('keyup', function(event) {
  const searchTerm = event.target.value.toLowerCase();
    const searchTerms = searchTerm.split(/\s+/).filter(Boolean);
      let allResults = [];
     if (searchTerms.length > 0) {
        Object.values(websiteIndex).forEach(categoryItems => {
             categoryItems.forEach(item => {
                  let found = false;
                     for (const term of searchTerms) {
                        if (item.title.toLowerCase().includes(term) || item.content.toLowerCase().includes(term)) {
                            found = true;
                            break;
                        }
                    }
                   if (found) {
                        allResults.push(item);
                   }
            });
       });
    }

    displayResults(allResults);
});
}


const researchInput = document.querySelector('.research-content input[type="text"]');
const researchButton = document.querySelector('.research-content button');


function performSearch(searchTerm) {
 const searchTerms = searchTerm.split(/\s+/).filter(Boolean);
  let allResults = [];
   if(searchTerms.length > 0){
         Object.values(websiteIndex).forEach(categoryItems => {
           categoryItems.forEach(item => {
                 let found = false;
                 for (const term of searchTerms) {
                     if (item.title.toLowerCase().includes(term) || item.content.toLowerCase().includes(term)) {
                         found = true;
                         break;
                    }
                 }
                 if (found) {
                   allResults.push(item);
                 }
            });
        });
   }
 displayResults(allResults);
}

if(researchButton && researchInput){
researchButton.addEventListener('click', () => {
  const searchTerm = researchInput.value.toLowerCase();
  performSearch(searchTerm);
});

researchInput.addEventListener("keyup", function (event) {
     if (event.key === "Enter") {
        researchButton.click();
    }
});
}


// Admin Login Logic
const adminLoginForm = document.getElementById('admin-login-form');
const adminUsernameInput = document.getElementById('admin-username');
const adminPasswordInput = document.getElementById('admin-password');
const adminLoginError = document.getElementById('admin-login-error');
const adminCredentials = { // Replace with a more secure backend system for production
   'admin': 'admin123'
};
if (adminLoginForm) {
adminLoginForm.addEventListener('submit', function(event) {
  event.preventDefault();
    const username = adminUsernameInput.value;
    const password = adminPasswordInput.value;

  if (adminCredentials[username] && adminCredentials[username] === password) {
    // In a real application, you would use a more secure backend login system.
       localStorage.setItem('adminLoggedIn', 'true');
     window.location.href = 'admin_dashboard.html';

  } else {
    adminLoginError.style.display = 'block';
   }

});
}

function checkAdminLogin() {
 const isAdminLoggedIn = localStorage.getItem('adminLoggedIn');
const adminMenu = document.querySelector('.admin-menu');
  const userMenu = document.querySelector('.user-menu');
    const userAuth = document.querySelector('.user-auth');
 if (window.location.pathname.includes('admin_dashboard.html') && !isAdminLoggedIn) {
      window.location.href = 'admin_login.html';
  }
  if(adminMenu){
        if(isAdminLoggedIn) {
          adminMenu.style.display = 'block';
          if(userMenu) userMenu.style.display = 'none';
          if(userAuth) userAuth.style.display = 'none';
        } else {
          adminMenu.style.display = 'none';
           if(userMenu) userMenu.style.display = 'block';
            if(userAuth) userAuth.style.display = 'block';
       }
  }
   const adminMenuMobile = document.querySelector('.admin-menu-mobile');
    const userMenuMobile = document.querySelector('.user-menu-mobile');
      const userAuthMobile = document.querySelector('.user-auth-mobile');

  if(adminMenuMobile){
     if(isAdminLoggedIn){
       adminMenuMobile.style.display = 'block';
        if(userMenuMobile) userMenuMobile.style.display = 'none';
          if(userAuthMobile) userAuthMobile.style.display = 'none';
   }else {
       adminMenuMobile.style.display = 'none';
       if(userMenuMobile) userMenuMobile.style.display = 'block';
          if(userAuthMobile) userAuthMobile.style.display = 'block';
    }
 }

}
checkAdminLogin();

function checkUserLogin() {
const isUserLoggedIn = localStorage.getItem('userLoggedIn');
 const userMenu = document.querySelector('.user-menu');
   const userAuth = document.querySelector('.user-auth');

if (window.location.pathname.includes('user_dashboard.html') && !isUserLoggedIn) {
     window.location.href = 'login.html';
}
    if (userMenu) {
    if (isUserLoggedIn) {
        userMenu.style.display = 'block';
          if(userAuth) userAuth.style.display = 'none';
     } else {
     userMenu.style.display = 'none';
      if(userAuth) userAuth.style.display = 'block';
     }
 }
   const userMenuMobile = document.querySelector('.user-menu-mobile');
   const userAuthMobile = document.querySelector('.user-auth-mobile');

    if (userMenuMobile) {
    if (isUserLoggedIn) {
        userMenuMobile.style.display = 'block';
        if(userAuthMobile) userAuthMobile.style.display = 'none';
     } else {
        userMenuMobile.style.display = 'none';
      if(userAuthMobile) userAuthMobile.style.display = 'block';
     }
 }
}
checkUserLogin();

// Logout function (you would typically place this on the logout.html)
function adminLogout(){
localStorage.removeItem('adminLoggedIn');
 window.location.href = 'index.html';
}
function userLogout(){
 localStorage.removeItem('userLoggedIn');
window.location.href = 'index.html';
}

// Check if we are on the admin_dashboard page or profile page, and add logout logic (for demonstration):
if (window.location.pathname.includes('admin_dashboard.html') || window.location.pathname.includes('profile.html')) {
  const logoutLink = document.querySelector('.auth-links a[href="logout.html"]');
     if(logoutLink){
        logoutLink.addEventListener('click', function(event){
          event.preventDefault();
         adminLogout();
    });
 }
}

if (window.location.pathname.includes('user_dashboard.html') || window.location.pathname.includes('profile.html') || window.location.pathname.includes('index.html')) {
  const logoutLink = document.querySelector('.auth-links a[href="logout.html"]');
     if(logoutLink){
        logoutLink.addEventListener('click', function(event){
         event.preventDefault();
        userLogout();
    });
 }
}
// User Login Logic
const loginForm = document.querySelector('form');
const loginError = document.getElementById('login-error');
 if(loginForm){
      loginForm.addEventListener('submit', function (event) {
         event.preventDefault();
          const user_username = document.querySelector('input[name="username"]');
         const user_password = document.querySelector('input[name="password"]');
           const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
          const user = storedUsers.find(u => u.username === user_username.value);
           if (user && user.password === user_password.value) {
                localStorage.setItem('userLoggedIn', 'true');
               window.location.href = 'user_dashboard.html';
           } else {
             loginError.style.display = 'block';
         }

    });
  }

// User Signup Logic
const signupForm = document.getElementById('signup-form');
const signupError = document.getElementById('signup-error');
  if(signupForm)
{
 signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.querySelector('input[name="username"]').value;
       const email = document.querySelector('input[name="email"]').value;
        const password = document.querySelector('input[name="password"]').value;
      const confirmPassword = document.querySelector('input[name="confirmPassword"]').value;
      if(password !== confirmPassword) {
          signupError.style.display = 'block';
          return;
      }

      const newUser = { username, email, password };
      const storedUsers = JSON.parse(localStorage.getItem('users') || '[]'); // Get all users, or empty array if nothing
     storedUsers.push(newUser);
       localStorage.setItem('users', JSON.stringify(storedUsers));
    window.location.href = 'login.html';

  });
 }

// User Management Logic
const manageUsersSection = document.querySelector('.admin-content-section h2');
if(manageUsersSection) {
  const adminListContent = document.querySelector('.admin-list-content');
  adminListContent.addEventListener('click', function (event) {
       if (event.target.classList.contains('delete-user-button')) {
           const card = event.target.closest('.admin-card');
           const userId = card.dataset.userId;
            deleteUser(userId, card);
        }

      if(event.target.classList.contains('edit-user-button')){
          const card = event.target.closest('.admin-card');
          const userId = card.dataset.userId;
            editUser(userId, card);
        }
  });

function deleteUser(userId, card) {
      const confirmDelete = confirm(`Are you sure you want to delete user ${userId}?`);
      if(confirmDelete) {
         const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
           const updatedUsers = storedUsers.filter(user => user.username !== userId);
         localStorage.setItem('users', JSON.stringify(updatedUsers));
         card.remove();
     }
   }


   function editUser(userId, card) {
     const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
     const user = storedUsers.find(u => u.username === userId);
      if(!user) return;

      const newUsername = prompt('Enter new username', user.username);
     const newEmail = prompt('Enter new email', user.email);
      if(newUsername && newEmail){
          const updatedUsers = storedUsers.map(u => {
              if(u.username === userId){
              u.username = newUsername;
              u.email = newEmail;
           }
              return u;
          });
           localStorage.setItem('users', JSON.stringify(updatedUsers));
           card.querySelector('.user-username').textContent = newUsername;
         card.querySelector('.user-email').textContent = newEmail;

     }
   }
}