/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let set = new Set()
    for(let email of emails){
        let localName = email.split("@")
        localName[0] = (localName[0].split("+"))[0]
        localName[0] = localName[0].replace(/\./g, "")
        set.add(localName.join("@"));        
    }
    return set.size
};