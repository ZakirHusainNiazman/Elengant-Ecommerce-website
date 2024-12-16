

    function generateUniqueCode() {
      const part1 = Math.floor(1000 + Math.random() * 9000); // 4-digit random number
      const part2 = Math.floor(100 + Math.random() * 900); // 3-digit random number
      const shortTimestamp = Date.now().toString().slice(-4); // Last 4 digits of the timestamp
      return `#${part1}_${part2}${shortTimestamp}`;
    }


export default generateUniqueCode;