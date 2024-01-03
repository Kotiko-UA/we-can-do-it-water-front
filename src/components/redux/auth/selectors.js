export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIcon = state => state.auth.icon;

export const selectIsLoading = state => state.auth.isLoading;

export const selectError = state => state.auth.error;
