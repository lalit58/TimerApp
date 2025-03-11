Setup Instuction
npm install -g react-native-cli
git clone https://github.com/lalit58/TimerApp.git
npm install
npx react-native run-android(Android)
npx react-native run-ios(Ios)
npx react-native start


List of Assumptions
Create Timers: Add timers with a name, duration, and category.
Group Timers by Category: Timers are grouped by categories (e.g., Workout, Study, Break).
Progress Visualization: Each timer displays a progress bar showing the remaining time.
Bulk Actions: Start, pause, or reset all timers in a category.
Halfway Alert: Set an optional alert when the timer reaches 50% of its duration.
Timer History: View a log of completed timers with their completion time.
Clean UI/UX: Minimalistic and user-friendly interface.
