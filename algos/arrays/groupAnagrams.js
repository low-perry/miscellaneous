const groupAnagrams = (strs) => {
  const anagramMap = new Map();
  for (const str of strs) {
    const sorted = str.split('').sort().join('');
    if (!anagramMap.has(sorted)) {
      anagramMap.set(sorted, []);
    }
    anagramMap.get(sorted).push(str);
  }
  return Array.from(anagramMap.values());
}
