class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const sArr = s.split("");
        const tArr = t.split("");

        sArr.sort();
        tArr.sort();
        let i;
        for(i = 0; i< sArr.length; i++){
            if(sArr[i] !== tArr[i]) return false
        }
        return true;
    }
}
