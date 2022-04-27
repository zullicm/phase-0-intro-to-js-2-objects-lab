const employee = {
    name : 'Chris',
    streetAddress: '101 Hill'
}

function updateEmployeeWithKeyAndValue(employee,key,value){
    const newEmployee = {...employee}
    newEmployee[key] = value
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const deleteKey = {...employee}
    delete deleteKey[key]
    return deleteKey
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}