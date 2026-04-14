import Link from "next/link";

const UsersPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    // console.log(users);
    return (
        <div>
            <h2 className="font-bold text-5xl my-4 text-center">Users </h2>
            <div className="container mx-auto grid grid-cols-3 gap-2">
                {users.map((user) => (
                    <div key={user.id} className="card bg-primary text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">{user.name}!</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions justify-end">
                                <button className="btn"><Link href={`/users/${user.id}`}>Show details</Link></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UsersPage;
