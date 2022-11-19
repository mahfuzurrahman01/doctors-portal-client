import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const Users = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'], queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json();
            return data;
        }
    })

    const makeUserHandle = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successfully')
                    refetch()
                }
            })
    }
    return (
        <div className='w-3/4 my-10'>
            <h1 className='text-xl mb-5 '>All users: </h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>option</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users.map(user => <tr key={user._id}>
                                    <th>1</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user?.role ? <button className='btn btn-xs bg-secondary text-white border-none'>Admin</button> : <button onClick={() => makeUserHandle(user._id)} className='btn btn-xs bg-primary text-white border-none'>Make Admin</button>
                                        }
                                    </td>
                                    <td><button className='btn btn-xs bg-accent text-white border-none'>delete</button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;