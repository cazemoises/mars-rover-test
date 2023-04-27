export const moveRover = (
    rover: {
      x_pos: number,
      y_pos: number,
      direction: "N" | "S" | "E" | "W"
    },
    instruction: string
  ) => {
    for (let char of instruction) {
  
      switch (char) {
        case "R":
          turnRight(rover);
          break;
        case "L":
          turnLeft(rover);
          break;
        case "M":
          moveForward(rover);
          break;
        default:
          throw new Error("Invalid instruction");
      }
    }
    console.log(`${rover.x_pos}, ${rover.y_pos}, ${rover.direction}`)
  };
  
  const turnRight = (rover: { direction: "N" | "S" | "E" | "W" }) => {
    switch (rover.direction) {
      case "N":
        rover.direction = "E";
        break;
      case "E":
        rover.direction = "S";
        break;
      case "S":
        rover.direction = "W";
        break;
      case "W":
        rover.direction = "N";
        break;
    }
  };
  
  const turnLeft = (rover: { direction: "N" | "S" | "E" | "W" }) => {
    switch (rover.direction) {
      case "N":
        rover.direction = "W";
        break;
      case "E":
        rover.direction = "N";
        break;
      case "S":
        rover.direction = "E";
        break;
      case "W":
        rover.direction = "S";
        break;
    }
  };
  
  const moveForward = (rover: { x_pos: number, y_pos: number, direction: "N" | "S" | "E" | "W" }) => {
    switch (rover.direction) {
      case "N":
        rover.y_pos++;
        break;
      case "E":
        rover.x_pos++;
        break;
      case "S":
        rover.y_pos--;
        break;
      case "W":
        rover.x_pos--;
        break;
    }
  };