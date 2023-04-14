/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    // let set = new Set()
    // for(let email of emails){
        // let splitted = email.split("@")
        // splitted[0] = (splitted[0].split("+"))[0]
        // splitted[0] = splitted[0].replace(/\./g, "")
        // set.add(splitted.join("@"));        
    // }
    // return set.size
    
    return (new Set(emails.map(email => {
    const [local, domain] = email.split('@');
    return local.split('+').shift().split('.').join('') + '@' + domain;
    }))).size;
};