function calculateNameValue(name) {
    return [...name.toLowerCase()].filter(char => /[a-z]/.test(char)).reduce((acc, char) => acc + char.charCodeAt(0), 0);
  }
  
  function nameMatchmakingScore(name1, name2) {
    const value1 = calculateNameValue(name1);
    const value2 = calculateNameValue(name2);
    const lengthDifference = Math.abs(name1.length - name2.length);
    let score = (value1 + value2) % 100;
    const scoreAdjustment = 100 - lengthDifference * 2;
    const finalScore = (score + scoreAdjustment) % 100;
    return finalScore;
  }
  
  const name1 = "";
  const name2 = "";
  console.log(`${nameMatchmakingScore(name1, name2)}%`);
  