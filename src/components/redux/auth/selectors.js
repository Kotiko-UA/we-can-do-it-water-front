export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIcon = state => state.auth.avatarURL;

export const selectToken = state => state.auth.token;

export const selectIsLoading = state => state.auth.isLoading;

export const selectDailyNorma = state => state.auth.user.dailyNorma;

export const selectError = state => state.auth.error;

export const selectGender = state => state.auth.user.gender;
