module.exports = function createDreamTeam(members) {
  let temp, str, secretName;
  let tempArr = [],
    tempArr2 = [];
  if (Array.isArray(members) === false) {
    return false;
  }
  for (let j = 0; j < members.length; j++) {
    if (typeof members[j] !== "string") {
      members[j] = "";
    } else {
      temp = members[j].toUpperCase();
      tempArr2.push(temp);
    }
  }

  let sortMembers = tempArr2
    .join(",")
    .replace(/\s/g, "")
    .split(",")
    .sort();
  for (let i = 0; i < sortMembers.length; i++) {
    temp = sortMembers[i].slice(0, 1);
    tempArr.push(temp);
    secretName = tempArr.join("").replace(/\d|\[|\]/g, "");
  }
  return secretName;
};