function _manipulateStudentRecord(obj, operation, prop, newValue) {
    let newObj = { ...obj }; 

    if (operation === 'delete') {
        // Remove the specified property if it exists
        delete newObj[prop];
    } else if (operation === 'edit') {
        // Edit the value of the specified property if it exists
        if (newObj.hasOwnProperty(prop)) {
            newObj[prop] = newValue;
        }
    }

   
    Object.keys(newObj).sort().forEach(key => {
        console.log(`${key} ${newObj[key]}`);
    });
}
// we can check here by manually

let obj = { name: "dess", lastName: "fentahun", city: "addis ketema" };
_manipulateStudentRecord(obj, "edit", "city", "Seattle");
