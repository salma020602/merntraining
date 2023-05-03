/**  
 * 
 * The call method is used to call a function with a
 * specified this value and arguments provided
 * individually. the first argument to call, sets
 * the this value and any subsequent 
 * arguments are passed to the function as
 * individual arguments.
 * 
 */
const person = {
    fstNm : "abc", 
    lstNm : 'pqr',
    flNm : function (p1, p2) {
        return this.fstNm + this.lstNm + ' P1 - ' +p1 +' P2 - ' + p2;
        
    }
}