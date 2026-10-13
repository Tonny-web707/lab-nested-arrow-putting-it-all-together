function createLoginTracker(userInfo) {
  let attemptCount = 0;
  const maxAttempts = 3;

  const loginAttempt = (passwordAttempt) => {
    
    if (attemptCount >= maxAttempts) {
      return "Account locked due to too many failed login attempts";
    }

    
    if (passwordAttempt === userInfo.password) {
      attemptCount = 0; 
      return "Login successful";
    }

    
    attemptCount++;

    
    return `Attempt ${attemptCount}: Login failed`;
  };

  return loginAttempt;
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
