module.exports = {
  default: async ({ page }) => {
    await page.context().addCookies([{"name": "__session", "value": "API--VUwHFXJZauF7F-DTl1GV49FXgupvbz8KZwn2P4se63A", "url": "http://100.108.230.115:8000/", "httpOnly": true, "secure": false, "sameSite": "Lax"}, {"name": "__session", "value": "API--VUwHFXJZauF7F-DTl1GV49FXgupvbz8KZwn2P4se63A", "url": "http://127.0.0.1:3000/", "httpOnly": true, "secure": false, "sameSite": "Lax"}, {"name": "__session", "value": "API--VUwHFXJZauF7F-DTl1GV49FXgupvbz8KZwn2P4se63A", "url": "http://localhost:3000/", "httpOnly": true, "secure": false, "sameSite": "Lax"}]);
  },
};
