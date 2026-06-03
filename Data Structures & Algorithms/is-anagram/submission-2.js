class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sArr = s.split("");
        const tArr = t.split("");

        sArr.sort();
        tArr.sort();
        let i;
        const cArr = sArr.length > tArr.length ? sArr : tArr;
        for(i = 0; i< cArr.length; i++){
            if(sArr[i] !== tArr[i]) return false
        }
        return true;
    }
}
