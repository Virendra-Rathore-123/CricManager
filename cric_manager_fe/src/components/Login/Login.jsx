import React from "react";

function Login() {
  return (
    <div class="bg-gray-100 h-screen flex items-center justify-center">

    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 class="text-3xl font-semibold text-center text-gray-800">Sign In</h2>
        <form action="#" method="POST" class="space-y-6">

            <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
                <input type="email" id="email" name="email" required class="mt-1 block w-full px-4 py-2 text-gray-900 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none" placeholder="you@example.com"/>
            </div>

            <div>
                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" name="password" required class="mt-1 block w-full px-4 py-2 text-gray-900 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none" placeholder="••••••••"/>
            </div>

            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <input type="checkbox" id="remember" name="remember" class="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"/>
                    <label for="remember" class="ml-2 block text-sm text-gray-900">Remember me</label>
                </div>
                <div class="text-sm">
                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                </div>
            </div>

            <div>
                <button type="submit" class="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">Sign In</button>
            </div>
        </form>

        <div class="text-center text-sm">
            <p class="text-gray-600">Don't have an account? <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Sign up</a></p>
        </div>
    </div>

</div>
  );
}

export default Login;