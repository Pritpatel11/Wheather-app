# 🌦️ Weather App

A fully responsive weather application that allows users to get real-time weather updates by entering a city name. This project demonstrates how to work with REST APIs, DOM manipulation, error handling, and user-friendly design using **HTML**, **CSS**, and **JavaScript**.

---

## 📌 Table of Contents

- [Demo](#-demo)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [Getting Started](#-getting-started)
- [API Key Setup](#-api-key-setup)
- [How It Works](#-how-it-works)
- [Troubleshooting](#-troubleshooting)
- [Future Improvements](#-future-improvements)
- [License](#-license)
- [Author](#-author)

---

## 🎬 Demo

Live Demo: *[Coming Soon if deployed]*  
Or run it locally following the steps below.

---

## 🌟 Features

✅ Search weather by city name  
✅ Displays:
- Temperature in Celsius
- Wind Speed
- Humidity
- Weather Icon (based on current condition)

✅ Error Handling for:
- Invalid or misspelled city names
- Network issues

✅ Responsive UI  
✅ Simple and clean design  

---

## 🧰 Technologies Used

- **HTML5** – Markup structure
- **CSS3** – Styling with Flexbox & Grid
- **JavaScript (ES6+)** – API fetch, logic, and DOM updates
- **OpenWeatherMap API** – Weather data

---

## 📁 Project Structure

```
weather-app/
├── index.html           # Main HTML file
├── style.css            # App styling
├── script.js            # JavaScript logic and API integration
└── images/
    ├── search.png       # Search button icon
    ├── clouds.png       # Weather condition icon
    ├── clear.png
    ├── drizzle.png
    ├── mist.png
    ├── rain.png
    ├── wind.png         # Wind icon
    └── humidity.png     # Humidity icon
```

---
S
## 🚀 Getting Started

To run this project locally:

1. **Clone the repository**

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

2. **Open the `index.html` file** in your browser:

```bash
# No server required
double-click index.html
```

Or use a Live Server extension (VS Code).

---

## 🔑 API Key Setup

1. Go to [https://openweathermap.org/api](https://openweathermap.org/api)
2. Sign up and log in.
3. Create a new API key from your dashboard.
4. Replace this line in `script.js` with your API key:

```js
const ApiKey = "YOUR_API_KEY_HERE";  // Replace this with your key
```

---

## ⚙️ How It Works

- User inputs a city name and clicks the search button.
- JavaScript makes an API call to OpenWeatherMap.
- If city is valid:
  - Weather info is displayed including icon, temperature, humidity, and wind speed.
- If city is invalid:
  - Error message "Invalid cityName....!" is shown.
- If a network or unexpected error occurs:
  - Message "Something went wrong!" is displayed.

---

## 🛠️ Troubleshooting

| Issue | Solution |
|-------|----------|
| Weather info not showing | Check API key and internet connection |
| Error message appears even for valid city | Ensure the API URL is correct, and key is active |
| Images not loading | Make sure the image paths (`./images/*.png`) are correct and files exist |
| Nothing happens on search | Check if JS file is properly linked, and look for console errors in browser dev tools |

---

## 🧠 Future Improvements

- 📍 Add geolocation support to get weather based on current location
- 🌡️ Add Fahrenheit support and unit toggle
- 📆 5-day or hourly weather forecast
- 🎨 Theme switcher (light/dark mode)
- 🌐 Multi-language support

---

## 📄 License

This project is open-source and free to use for personal and educational purposes.  
Feel free to fork, modify, and share!

---

## 🙋‍♂️ Author

**PRITKUMAR PATEL**  
📧 Contact: [pritpatel1179@gmail.com]  
🌐 GitHub: [https://github.com/your-username](https://github.com/your-username)

---
