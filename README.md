# Solar System Visualization with Three.js

Explore the wonders of our solar system through this mesmerizing JavaScript project utilizing Node.js, npm, and Three.js. The project presents an interactive 3D visualization of the solar system, allowing you to navigate through planets and moons.

## Project Structure

- **index.html:** The HTML file sets up the project structure and includes the necessary scripts and stylesheets.

- **js/app.js:** The main JavaScript file initializes a `SolarSystem` object and begins the animation loop.

- **js/class/Planet.js:** Defines the `Planet` class responsible for creating individual planets, specifying their properties, and updating their positions and rotations.

- **js/class/SolarSystem.js:** Implements the `SolarSystem` class that sets up the Three.js scene, camera, lighting, and default planets. It also handles the animation loop and user controls.

- **js/class/Controls.js:** Manages user input controls, specifically listening for key presses, and toggling the rotation of the solar system.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-solar-system.git
   cd your-solar-system
    ```

2. **Install the required dependencies:**

   ```bash
    npm install
    ``` 

3. **Run the project:**
    ```bash
    npm run dev
    ```

4. **Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to explore the solar system.**

## Controls

- Use the **Space bar** to toggle the rotation of the solar system.

## Acknowledgments

Special thanks to the powerful combination of Node.js, npm, and Three.js for making this interactive solar system visualization possible.
