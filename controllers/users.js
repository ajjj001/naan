const users = [
    { name: 'John', age: 14 },
    { name: 'Jane', age: 23 },
    { name: 'Bob', age: 25 },
]

const getUser = (req) => {
    const id = req.params.id;
    const user = users[id];

    if (user) return new Response(JSON.stringify(user));

    return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
}

const getUsers = (req) => {
    return new Response(JSON.stringify(users));
}

export { getUsers, getUser }