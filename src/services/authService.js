const authService = {
    login: async (email, password) => {
      // Dummy login: accepts any email/password
      return { email };
    },
    signup: async (email, password) => {
      // Dummy signup: always successful
      return true;
    },
  };
  
  export default authService;
  