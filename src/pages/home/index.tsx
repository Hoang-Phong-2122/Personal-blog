import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { DashBoardlayout } from "../../layouts/dashboard-layout";
import { useAuth } from "../../hooks/use-auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { withAuthGuard } from "../../hocs/with-auth-guard";
import Header from "./components/Header";
import BlogItem from "../../components/BlogItem";

const Index = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {}, []);

  return (
    <div>
      <Header />
      <div className="overflow-x-hidden bg-gray-100 mx-auto  max-w-7xl">
    <div className="px-6 py-8">
        <div className="container flex justify-between mx-auto">
            <div className="w-full lg:w-8/12">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-bold text-gray-700 md:text-2xl">Post</h1>
                    <div>
                        <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                            <option>Latest</option>
                            <option>Last Week</option>
                        </select>
                    </div>
                </div>
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <div className="mt-8">
                    <div className="flex">
                        <a href="#" className="px-3 py-2 mx-1 font-medium text-gray-500 bg-white rounded-md cursor-not-allowed">
                            previous
                        </a>
                    
                        <a href="#" className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white">
                            1
                        </a>
                    
                        <a href="#" className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white">
                            2
                        </a>
                    
                        <a href="#" className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white">
                            3
                        </a>
                    
                        <a href="#" className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white">
                            Next
                        </a>
                    </div>
                </div>
            </div>
            <div className="hidden w-4/12 -mx-8 lg:block">
                <div className="px-8">
                    <h1 className="mb-4 text-xl font-bold text-gray-700">Authors</h1>
                    <div className="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md">
                        <ul className="-mx-4">
                            <li className="flex items-center"><img
                                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                    alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full"/>
                                <p><a href="#" className="mx-1 font-bold text-gray-700 hover:underline">Alex John</a><span
                                        className="text-sm font-light text-gray-700">Created 23 Posts</span></p>
                            </li>
                            <li className="flex items-center mt-6"><img
                                    src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=333&amp;q=80"
                                    alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full"/>
                                <p><a href="#" className="mx-1 font-bold text-gray-700 hover:underline">Jane Doe</a><span
                                        className="text-sm font-light text-gray-700">Created 52 Posts</span></p>
                            </li>
                            <li className="flex items-center mt-6"><img
                                    src="https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=281&amp;q=80"
                                    alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full"/>
                                <p><a href="#" className="mx-1 font-bold text-gray-700 hover:underline">Lisa Way</a><span
                                        className="text-sm font-light text-gray-700">Created 73 Posts</span></p>
                            </li>
                            <li className="flex items-center mt-6"><img
                                    src="https://images.unsplash.com/photo-1500757810556-5d600d9b737d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=735&amp;q=80"
                                    alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full"/>
                                <p><a href="#" className="mx-1 font-bold text-gray-700 hover:underline">Steve Matt</a><span
                                        className="text-sm font-light text-gray-700">Created 245 Posts</span></p>
                            </li>
                            <li className="flex items-center mt-6"><img
                                    src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=373&amp;q=80"
                                    alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full"/>
                                <p><a href="#" className="mx-1 font-bold text-gray-700 hover:underline">Khatab
                                        Wedaa</a><span className="text-sm font-light text-gray-700">Created 332 Posts</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="px-8 mt-10">
                    <h1 className="mb-4 text-xl font-bold text-gray-700">Categories</h1>
                    <div className="flex flex-col max-w-sm px-4 py-6 mx-auto bg-white rounded-lg shadow-md">
                        <ul>
                            <li><a href="#" className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                    AWS</a></li>
                            <li className="mt-2"><a href="#"
                                    className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                    Laravel</a></li>
                            <li className="mt-2"><a href="#"
                                    className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">- Vue</a>
                            </li>
                            <li className="mt-2"><a href="#"
                                    className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                    Design</a></li>
                            <li className="flex items-center mt-2"><a href="#"
                                    className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                    Django</a></li>
                            <li className="flex items-center mt-2"><a href="#"
                                    className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">- PHP</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="px-8 mt-10">
                    <h1 className="mb-4 text-xl font-bold text-gray-700">Recent Post</h1>
                    <div className="flex flex-col max-w-sm px-8 py-6 mx-auto bg-white rounded-lg shadow-md">
                        <div className="flex items-center justify-center"><a href="#"
                                className="px-2 py-1 text-sm text-green-100 bg-gray-600 rounded hover:bg-gray-500">Laravel</a>
                        </div>
                        <div className="mt-4"><a href="#" className="text-lg font-medium text-gray-700 hover:underline">Build
                                Your New Idea with Laravel Freamwork.</a></div>
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center"><img
                                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                    alt="avatar" className="object-cover w-8 h-8 rounded-full"/><a href="#"
                                    className="mx-3 text-sm text-gray-700 hover:underline">Alex John</a></div><span
                                className="text-sm font-light text-gray-600">Jun 1, 2020</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  );

};

export default withAuthGuard(Index);
