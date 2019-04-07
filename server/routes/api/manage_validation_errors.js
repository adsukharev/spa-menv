
function errors_client(error) {
    let array_errors = [];
    if (error.message.indexOf('duplicate key error') !== -1)
    {
        return (['This name already exists']);
    }
    for (let key in error.errors)
    {
        array_errors.push(error.errors[key].message)
    }
    console.log(error.message);
    return array_errors;
}

function errors_provider(error) {
    if (error.message.indexOf('duplicate key error') !== -1)
    {
        return (['This name already exists']);
    }
    return ([error.errors['name'].message]);
}

module.exports = {errors_client, errors_provider};
// module.exports = errors_provider;