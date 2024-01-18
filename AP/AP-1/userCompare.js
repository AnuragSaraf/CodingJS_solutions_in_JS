function userCompare(aName, aId, bName, bId){
  if (aName.localeCompare(bName) < 0) {
        return -1;
    } else if (aName.localeCompare(bName) > 0) {
        return 1;
    } else if (aId < bId) {
        return -1;
    } else if (aId > bId) {
        return 1;
    }
    return 0;
}