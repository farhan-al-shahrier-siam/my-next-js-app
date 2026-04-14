import Link from "next/link";

const UserDetail = async({params}) => {
    const {userId} = await params
    const userPromise = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const user = await userPromise.json()
    console.log(user)
    return (
        <div className="container mx-auto text-center">
            <p>{user.email}</p>
            <p>{user.email}</p>
            <Link href="/users" className="btn">Back</Link>
        </div>
    );
};

export default UserDetail;