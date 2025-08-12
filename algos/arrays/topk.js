const topKFrequent = (nums, k) => {
      const count = new Map();
        let freqArray = Array.from({ length: nums.length + 1 }, () => []);


        for (const n of nums) {
            count[n] = (count[n] || 0) + 1;
        }

        for (const n in count) {
            freqArray[count[n]].push(parseInt(n));
        }

        const res = [];

        for (let i = freqArray.length - 1; i > 0; i--) {
            for (const n of freqArray[i]) {
                res.push(n);
                if (res.length === k) return res;
            }
        }

}